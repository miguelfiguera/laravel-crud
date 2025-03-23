import { Head, usePage } from '@inertiajs/react';

function ProfileIndex() {
    const { profiles } = usePage().props;

    return (
        <>
            <Head title="Profile" />
            This is my superpower
        </>
    );
}

export default ProfileIndex;
