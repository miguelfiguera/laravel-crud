import ColumnHeaders from '@/components/ProfileComponents/ColumnHeaders';
import ModalConfirmation from '@/components/ProfileComponents/ModalConfirmation';
import ProfileHeader from '@/components/ProfileComponents/ProfileHeader';
import ProfileList from '@/components/ProfileComponents/ProfileList';
import { profile } from '@/lib/interfaces';
import { Head, useForm, usePage } from '@inertiajs/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface PageProps {
    profiles: profile[];
    [key: string]: profile[] | string;
}

function ProfileIndex() {
    //Getting Data from backend
    const { profiles } = usePage<PageProps>().props;
    //Handle Delete with intertia
    const { delete: destroy } = useForm();
    //to delete through modal
    const [open, setOpen] = useState(false);
    const [settedProfile, setSettedProfile] = useState<profile>({} as profile);
    //search bar
    const [filteredProfiles, setFilteredProfiles] = useState<profile[]>(profiles);
    const [searchFilter, setSearchFilter] = useState<string>('');
    const [filterType, setFilterType] = useState<string>('name'); // Default to 'name' for initial filtering

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

    const handleProfile = (profile: profile) => {
        setSettedProfile(profile);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (profile: profile) => {
        if (open) {
            destroy(route('profiles.destroy', profile.id), {
                onSuccess: () => {
                    toast.success(`${profile.full_name} deleted successfully`);
                    setOpen(false);
                },
                onError: () => {
                    toast.error('Failed to delete profile');
                    setOpen(false);
                },
            });
        }
    };

    const handleReset = () => {
        setSearchFilter('');
        // setFilterType('name');
    };

    const handleFilterTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterType(e.target.value);
    };
    const handleSearchFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchFilter(e.target.value);
    };

    return (
        <div className="min-h-screen">
            <Head title="Profiles" />
            {/*header*/}
            <ProfileHeader
                handleFilterTypeChange={handleFilterTypeChange}
                handleSearchFilterChange={handleSearchFilterChange}
                handleReset={handleReset}
                searchFilter={searchFilter}
                filterType={filterType}
            />

            {/*column headers*/}
            <ColumnHeaders />

            {/*mapped profiles or No profiles guard*/}
            <ProfileList filteredProfiles={filteredProfiles} handleProfile={handleProfile} />

            {/*Modal for delete confirmation*/}
            <ModalConfirmation open={open} handleDelete={handleDelete} settedProfile={settedProfile} handleClose={handleClose} />
        </div>
    );
}

export default ProfileIndex;
