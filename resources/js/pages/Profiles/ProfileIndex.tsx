import ColumnHeaders from '@/components/ProfileComponents/ColumnHeaders';
import ModalConfirmation from '@/components/ProfileComponents/ModalConfirmation';
import ProfileHeader from '@/components/ProfileComponents/ProfileHeader';
import ProfileList from '@/components/ProfileComponents/ProfileList';
import { profile } from '@/lib/interfaces';
import useProfileFilterStore from '@/lib/zustand/SearchState';
import { Head, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

interface PageProps {
    profiles: profile[];
    [key: string]: profile[] | string;
}

function ProfileIndex() {
    //Getting Data from backend
    const { profiles } = usePage<PageProps>().props;
    //search bar
    const { filteredProfiles, setFilteredProfiles, searchFilter, filterType } = useProfileFilterStore();

    useEffect(() => {
        setFilteredProfiles(profiles);
        filterProfiles();
    }, [searchFilter, filterType, profiles]); // Add profiles to dependencies

    const filterProfiles = () => {
        let filtered: profile[] = [...profiles]; // Start with a copy of all profiles

        if (searchFilter && filterType) {
            filtered = profiles.filter((profileItem: profile) => {
                const searchTermLower = searchFilter.toLowerCase();
                switch (filterType) {
                    case 'name':
                        return profileItem.full_name.toLowerCase().includes(searchTermLower);
                    case 'email':
                        return profileItem.email.toLowerCase().includes(searchTermLower);
                    case 'phone':
                        return profileItem.phone.toLowerCase().includes(searchTermLower);
                    default:
                        return true; // Should not happen, but prevents errors. Shows all profiles
                }
            });
        }
        setFilteredProfiles(filtered); // Update filteredProfiles state
    };

    return (
        <div className="min-h-screen">
            <Head title="Profiles" />
            {/*header*/}
            <ProfileHeader />

            {/*column headers*/}
            <ColumnHeaders />

            {/*mapped profiles or No profiles guard*/}
            <ProfileList filteredProfiles={filteredProfiles} />

            {/*Modal for delete confirmation*/}
            <ModalConfirmation />
        </div>
    );
}

export default ProfileIndex;
