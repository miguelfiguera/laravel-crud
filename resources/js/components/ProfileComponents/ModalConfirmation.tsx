import { profile } from '@/lib/interfaces';
import useModalState from '@/lib/zustand/OpenState';
import { useForm } from '@inertiajs/react';
import { Trash2, X } from 'lucide-react';
import { toast } from 'react-toastify';

function ModalConfirmation() {
    const { delete: destroy } = useForm();
    const { open, setOpen, settedProfile, setSettedProfile } = useModalState();
    //Early return if no profile is defined and also open is false

    const handleClose = () => {
        setSettedProfile({} as profile);
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
    if (!open) return null;

    return (
        <div onClick={handleClose} className="fixed inset-0 flex items-center justify-center bg-black/40 transition-colors">
            <div
                onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
                className="container mx-auto flex max-h-[600px] min-h-[300px] max-w-[500px] flex-col items-center justify-center gap-4 rounded-xl bg-white p-6 text-center shadow-lg"
            >
                <div className="container mx-auto flex items-center justify-center">
                    <Trash2 size="150px" color="red" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Confirmación de Eliminación</h2>
                {settedProfile ? ( // Conditionally render content if settedProfile is not null
                    <>
                        <p className="text-gray-600">¿Estás seguro de eliminar el perfil "{settedProfile.full_name}"?</p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => handleDelete(settedProfile)}
                                className="focus:shadow-outline flex items-center gap-2 rounded bg-red-500 px-4 py-2 font-bold text-white shadow-lg hover:scale-125 hover:bg-red-700 focus:outline-none"
                            >
                                <Trash2 size="18px" />
                                Eliminar
                            </button>
                            <button
                                onClick={handleClose}
                                className="focus:shadow-outline flex items-center gap-2 rounded bg-gray-500 px-4 py-2 font-bold text-white shadow-lg hover:scale-125 hover:bg-gray-700 focus:outline-none"
                            >
                                <X size="18px" />
                                Cancelar
                            </button>
                        </div>
                    </>
                ) : (
                    <p className="text-gray-600">No profile selected.</p>
                )}
            </div>
        </div>
    );
}

export default ModalConfirmation;
