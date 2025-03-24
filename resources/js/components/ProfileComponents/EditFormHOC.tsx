import { AddressData, ContactDataNoId, profile } from '@/lib/interfaces';
import { Head, useForm, usePage } from '@inertiajs/react';
import { UserRoundCheck } from 'lucide-react';
import { useEffect, useState } from 'react'; // Import useEffect
import { toast } from 'react-toastify';
import MyStepper from './FormComponents/MyStepper';
import ProfileStepOne from './FormComponents/ProfileStepOne';
import ProfileStepTwo from './FormComponents/ProfileStepTwo';
import Spinner from './FormComponents/Spinner';

function EditFormHOC() {
    const { profile } = usePage<{ profile: profile }>().props;
    const [activeStep, setActiveStep] = useState(0);
    const { put, data, setData, errors, processing } = useForm({
        full_name: profile?.full_name || '', // Initialize with profile data or empty string
        email: profile?.email || '',
        phone: profile?.phone || '',
        address: profile?.address || '',
        state: profile?.state || '',
        country: profile?.country || '',
        id: profile?.id || null,
    });

    // useEffect to update form data when the profile prop changes (important for re-renders)
    useEffect(() => {
        if (profile) {
            setData({
                full_name: profile.full_name || '',
                email: profile.email || '',
                phone: profile.phone || '',
                address: profile.address || '',
                state: profile.state || '',
                country: profile.country || '',
                id: profile.id || null,
            });
        }
    }, [profile, setData]); // Add setData to the dependency array

    const nextStep = () => {
        if (activeStep < 2) {
            setActiveStep((prevStep) => prevStep + 1);
        }
    };

    const prevStep = () => {
        if (activeStep > 0) {
            setActiveStep((prevStep) => prevStep - 1);
        }
    };

    const handleContactData = (newData: ContactDataNoId) => {
        setData((prevData) => ({ ...prevData, ...newData }));
    };

    const handleAddressData = (newData: AddressData) => {
        setData((prevData) => ({ ...prevData, ...newData }));
    };

    const update = () => {
        put(route('profiles.update', { profile: profile.id }), {
            // Pass the profile ID in the route
            ...data, // Send the form data
            onSuccess: () => {
                toast.success(`${data.full_name} Updated successfully`);
            },
            onError: (error) => {
                console.error('Submission failed:', error);

                let errorMessage = 'Update failed.  Please check the form.';

                if (error.errors) {
                    // If there are validation errors from Laravel
                    const errorMessages = Object.values(error.errors).flat().join('\n'); // Extract and join errors
                    errorMessage = `Validation Errors:\n${errorMessages}`;
                } else if (error.message) {
                    // If there's a general error message
                    errorMessage = `Error: ${error.message}`;
                }

                toast.error(errorMessage, {
                    autoClose: 6000,
                });
                prevStep();
            },
        });
    };

    const handleUpdate = () => {
        nextStep();
        update();
    };

    return (
        <>
            <div className="container mx-auto min-h-screen py-4">
                <Head title="Edit Client Information" />
                <div className="container mx-auto flex items-center justify-center">
                    <UserRoundCheck size={40} className="hidden sm:block" />
                    <h1 className="mx-2 py-4 text-center text-3xl">
                        <strong>Edit</strong> {data.full_name}
                    </h1>
                </div>
                <div className="container mx-auto max-w-[75%] rounded-md border p-4 pb-16 shadow-lg sm:max-w-[50%]">
                    <div className="my-3 border-b py-3 sm:border-0">
                        {' '}
                        <MyStepper activeStep={activeStep} />
                    </div>{' '}
                    {activeStep == 0 && <ProfileStepOne nextStep={nextStep} handleContactData={handleContactData} contactData={data} />}
                    {activeStep == 1 && (
                        <ProfileStepTwo onSubmit={handleUpdate} prevStep={prevStep} handleAddressData={handleAddressData} addressData={data} />
                    )}
                    {activeStep == 2 && <Spinner />}
                </div>
            </div>
        </>
    );
}

export default EditFormHOC;
