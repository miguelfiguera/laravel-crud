import ProfileItem from '@/components/ProfileComponents/ProfileItem';
import { profile } from '@/lib/interfaces';
import { Head, usePage } from '@inertiajs/react';

interface PageProps {
    profiles: profile[];
    [key: string]: any;
}

function ProfileIndex() {
    const { profiles } = usePage<PageProps>().props;
    const mappedProfiles = profiles.map((profile: profile) => <ProfileItem key={profile.id} profile={profile} />);

    return (
        <div className="min-h-screen">
            <Head title="Profile" />
            <div className="container mx-auto flex flex-row items-start justify-between border-b-2 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
                {/* Left Side: Heading and Description */}
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800 sm:text-3xl">Client List</h1>
                    <p className="text-gray-600">Manage your client's information</p>
                </div>

                {/* Right Side: Add New Client Button */}
                <button className="focus:shadow-outline mt-4 rounded bg-gray-700 px-4 py-2 font-bold text-white hover:bg-gray-900 focus:outline-none sm:mt-0">
                    + New Client
                </button>
            </div>

            <div className="container mx-auto mt-4 px-3">
                <div className="sd:flex my-2 items-center justify-between rounded-md border-b-2 bg-white px-2 py-4 shadow-sm">
                    <div className="hidden w-full items-center justify-around font-bold md:flex">
                        <div className="mx-2 w-1/6 text-left">Name</div>
                        <div className="mx-2 w-1/6 text-left">Phone</div>
                        <div className="mx-2 w-2/6 text-left">Email</div>
                        <div className="mx-2 hidden w-1/12 text-left lg:block">Country</div>
                        <div className="w-1/5 text-center">Actions</div>
                    </div>
                </div>
            </div>
            {profiles.length > 0 ? (
                <div className="container mx-auto mt-4 px-3">{mappedProfiles}</div>
            ) : (
                <div className="sd:flex container mx-auto my-2 mt-4 min-h-25 max-w-[1512px] items-center justify-between rounded-md border-b-2 bg-white px-3 py-4 shadow-sm">
                    <p className="text-center text-4xl font-bold text-gray-600">No profiles found.</p>
                </div>
            )}
        </div>
    );
}

export default ProfileIndex;
