import { profile } from '@/lib/interfaces';
import useProfileFilterStore from '@/lib/zustand/SearchState';
import ProfileItem from './ProfileItem';

function ProfileList() {
    const { filteredProfiles } = useProfileFilterStore();
    const mappedProfiles = filteredProfiles.map((profileItem: profile) => <ProfileItem key={profileItem.id} profile={profileItem} />);
    return (
        <>
            {' '}
            {filteredProfiles.length > 0 ? (
                <div className="container mx-auto mt-4 px-3 pb-4">{mappedProfiles}</div>
            ) : (
                <div className="shadow-border container mx-auto my-2 mt-4 min-h-50 max-w-[85%] items-center justify-between border-t-2 border-b-2 bg-white px-3 py-4 sm:flex">
                    <p className="mx-auto text-center text-4xl font-bold text-gray-600">No profiles found.</p>
                </div>
            )}
        </>
    );
}

export default ProfileList;
