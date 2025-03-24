import { profile } from '@/lib/interfaces';
import { Head, Link } from '@inertiajs/react';

interface Props {
    profile: profile;
}

export default function Show({ profile }: Props) {
    return (
        <>
            <Head title={`Profile: ${profile.full_name}`} />

            <div className="container mx-auto p-4">
                <h1 className="mb-4 text-2xl font-bold">Profile Details</h1>

                <div className="rounded-lg bg-white p-6 shadow-md">
                    <div className="mb-4">
                        <strong className="block font-medium text-gray-700">Full Name:</strong>
                        <span className="mt-1 block">{profile.full_name}</span>
                    </div>

                    <div className="mb-4">
                        <strong className="block font-medium text-gray-700">Email:</strong>
                        <span className="mt-1 block">{profile.email}</span>
                    </div>

                    <div className="mb-4">
                        <strong className="block font-medium text-gray-700">Phone:</strong>
                        <span className="mt-1 block">{profile.phone}</span>
                    </div>

                    <div className="mb-4">
                        <strong className="block font-medium text-gray-700">Address:</strong>
                        <span className="mt-1 block">{profile.address}</span>
                    </div>

                    <div className="mb-4">
                        <strong className="block font-medium text-gray-700">State:</strong>
                        <span className="mt-1 block">{profile.state}</span>
                    </div>

                    <div className="mb-4">
                        <strong className="block font-medium text-gray-700">Country:</strong>
                        <span className="mt-1 block">{profile.country}</span>
                    </div>
                </div>

                <Link
                    href={route('profiles.index')}
                    className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                >
                    Back to Profiles
                </Link>
            </div>
        </>
    );
}
