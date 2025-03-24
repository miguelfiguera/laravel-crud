import { profile } from '@/lib/interfaces';
import { Head, Link } from '@inertiajs/react';

interface Props {
    profile: profile;
}

export default function Show({ profile }: Props) {
    return (
        <>
            <Head title={`Profile: ${profile.full_name}`} />

            <div className="container mx-auto min-h-screen p-6">
                {' '}
                {/* Light background */}
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-800">Profile Details</h1>
                    <Link
                        href={route('profiles.index')}
                        className="focus:ring-opacity-50 rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        Back to Profiles
                    </Link>
                </div>
                <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Details about this client's profile.</p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{profile.full_name}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{profile.email}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{profile.phone}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Address</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{profile.address}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">State</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{profile.state}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Country</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{profile.country}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    );
}
