import ColumnHeaders from '@/components/ProfileComponents/ColumnHeaders';
import ModalConfirmation from '@/components/ProfileComponents/ModalConfirmation';
import ProfileHeader from '@/components/ProfileComponents/ProfileHeader';
import ProfileList from '@/components/ProfileComponents/ProfileList';
import { Head } from '@inertiajs/react';

function ProfileIndex() {
    return (
        <div className="min-h-screen">
            <Head title="Profiles" />
            {/*header*/}
            <ProfileHeader />

            {/*column headers*/}
            <ColumnHeaders />

            {/*mapped profiles or No profiles guard*/}
            <ProfileList />

            {/*Modal for delete confirmation*/}
            <ModalConfirmation />
        </div>
    );
}

export default ProfileIndex;
