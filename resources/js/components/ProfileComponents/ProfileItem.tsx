import { profile } from '@/lib/interfaces';

function ProfileItem({ profile }: { profile: Partial<profile> }) {
    return (
        <div className="sd:flex my-2 items-center justify-between rounded-md border-b-2 bg-white px-2 py-4 shadow-sm">
            {/* Mobile Card View */}
            <div className="md:hidden">
                <h2 className="text-lg font-semibold text-gray-800">{profile.full_name}</h2>
                <p className="text-gray-600">Phone: {profile.phone}</p>
                <p className="text-gray-600">Email: {profile.email}</p>
                <p className="text-gray-600">Country: {profile.country}</p>
                <div className="mt-2 flex justify-end">
                    <button className="focus:shadow-outline mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none">
                        Edit
                    </button>
                    <button className="focus:shadow-outline rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 focus:outline-none">
                        Delete
                    </button>
                </div>
            </div>

            {/* Desktop Row View */}
            <div className="hidden w-full items-center justify-around md:flex">
                <div className="mx-2 w-1/6 text-left">
                    <p className="font-semibold text-gray-800">{profile.full_name}</p>
                </div>
                <div className="mx-2 w-1/6 text-left">
                    {' '}
                    <p className="text-gray-600">{profile.phone}</p>
                </div>
                <div className="mx-2 w-2/6 text-left">
                    {' '}
                    {/* Email takes up 2/6 (1/3) of the space */}
                    <p className="text-gray-600">{profile.email}</p>
                </div>
                <div className="mx-2 hidden w-1/12 text-left lg:block">
                    {' '}
                    {/* Country takes up 1/12 of the space */} <p className="text-gray-600">{profile.country}</p>
                </div>
                <div className="flex w-1/5 justify-end">
                    <button className="focus:shadow-outline mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none">
                        Edit
                    </button>
                    <button className="focus:shadow-outline rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 focus:outline-none">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileItem;
