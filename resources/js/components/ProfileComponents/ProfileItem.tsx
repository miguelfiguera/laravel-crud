import { profile } from '@/lib/interfaces';
import useModalState from '@/lib/zustand/OpenState';
import { Link } from '@inertiajs/react';
import { PencilLine, Trash2 } from 'lucide-react';

function ProfileItem({ profile }: { profile: profile }) {
    const { open, setOpen, setSettedProfile } = useModalState();

    const handleProfile = () => {
        setSettedProfile(profile);
        setOpen(true);
    };

    return (
        <div className="my-2 items-center justify-between rounded-md border-b-2 bg-white px-2 py-4 shadow-sm">
            {/* Mobile Card View */}
            <div className="border-b-2 md:hidden">
                <Link href={route('profiles.show', { profile: profile.id })} className="block">
                    <h2 className="text-lg font-semibold text-gray-800">{profile.full_name}</h2>
                </Link>
                <p className="max-w-[50%] text-gray-600">
                    <strong>Phone:</strong> {profile.phone}
                </p>
                <p className="max-w-[50%] text-gray-600">
                    <strong>Email:</strong> {profile.email}
                </p>
                <p className="max-w-[50%] text-gray-600">
                    <strong>Country:</strong> {profile.country}
                </p>
                <div className="my-2 flex justify-end">
                    <Link href={route('profiles.edit', { profile: profile.id })}>
                        <button className="mr-2 flex items-center gap-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 focus:outline-none">
                            <PencilLine size="18px" /> Edit
                        </button>
                    </Link>
                    <button
                        onClick={() => handleProfile()}
                        className="flex items-center gap-2 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 focus:ring-2 focus:ring-red-400 focus:ring-offset-1 focus:outline-none"
                    >
                        <Trash2 size="18px" />
                        Delete
                    </button>
                </div>
            </div>

            {/* Desktop Row View */}
            <div className="hidden w-full items-center justify-around md:flex">
                <div className="mx-2 w-1/6 text-left">
                    <Link href={route('profiles.show', { profile: profile.id })} className="block">
                        <p className="font-semibold text-gray-800">{profile.full_name}</p>
                    </Link>
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
                    <Link href={route('profiles.edit', { profile: profile.id })}>
                        <button className="mr-2 flex items-center gap-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 focus:outline-none">
                            <PencilLine size="18px" className="hidden md:block" />
                        </button>
                    </Link>
                    <button
                        onClick={() => handleProfile()}
                        className="flex items-center gap-2 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 focus:ring-2 focus:ring-red-400 focus:ring-offset-1 focus:outline-none"
                    >
                        <Trash2 size="18px" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileItem;
