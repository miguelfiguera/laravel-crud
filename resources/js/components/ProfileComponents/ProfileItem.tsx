import { profile } from '@/lib/interfaces';
import { useForm } from '@inertiajs/react';
import { PencilLine, Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';
function ProfileItem({ profile }: { profile: profile }) {
    const {
        data,
        delete: destroy,
        processing,
    } = useForm({
        full_name: profile.full_name,
        phone: profile.phone,
        email: profile.email,
        address: profile.address,
        country: profile.country,
        id: profile.id,
    });
    const handleDelete = (profile: profile) => {
        if (confirm('Are you sure you want to delete this profile?')) {
            destroy(route('profiles.destroy', profile.id), {
                onSuccess: () => {
                    toast.success(`${profile.full_name} deleted successfully`);
                },
                onError: () => {
                    toast.error('Failed to delete profile');
                },
            });
        }
    };

    return (
        <div className="my-2 items-center justify-between rounded-md border-b-2 bg-white px-2 py-4 shadow-sm">
            {/* Mobile Card View */}
            <div className="md:hidden">
                <h2 className="text-lg font-semibold text-gray-800">{profile.full_name}</h2>
                <p className="text-gray-600">Phone: {profile.phone}</p>
                <p className="text-gray-600">Email: {profile.email}</p>
                <p className="text-gray-600">Country: {profile.country}</p>
                <div className="mt-2 flex justify-end">
                    <button className="focus:shadow-outline mr-2 flex items-center gap-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none">
                        <PencilLine size="18px" /> Edit
                    </button>
                    <button
                        disabled={processing}
                        onClick={() => handleDelete(profile)}
                        className="focus:shadow-outline flex items-center gap-2 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 focus:outline-none"
                    >
                        <Trash2 size="18px" />
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
                    <button className="focus:shadow-outline mr-2 flex items-center gap-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none">
                        <PencilLine size="18px" className="hidden md:block" />
                    </button>
                    <button
                        disabled={processing}
                        onClick={() => handleDelete(profile)}
                        className="focus:shadow-outline flex items-center gap-2 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 focus:outline-none"
                    >
                        <Trash2 size="18px" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileItem;
