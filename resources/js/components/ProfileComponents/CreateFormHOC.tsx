import { AddressData, ContactDataNoId } from '@/lib/interfaces';
import { Head, useForm } from '@inertiajs/react';
import { UserRoundCheck } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import MyStepper from './FormComponents/MyStepper';
import ProfileStepOne from './FormComponents/ProfileStepOne';
import ProfileStepTwo from './FormComponents/ProfileStepTwo';
import Spinner from './FormComponents/Spinner';

function CreateFormHOC() {
    const [activeStep, setActiveStep] = useState(0);
    const { post, data, setData, errors } = useForm({
        full_name: '',
        email: '',
        phone: '',
        address: '',
        state: '',
        country: '',
    });

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

    const submit = () => {
        post(route('profiles.store'), {
            onSuccess: () => {
                toast.success(`${data.full_name} created successfully`);
            },
            onError: (error) => {
                // Capture the error object
                console.error('Submission failed:', error); // Log the entire error for debugging

                let errorMessage = Object.values(error).flat().join('\n'); // Default message

                toast.error(`${errorMessage}`, {
                    autoClose: 6000,
                });
                prevStep();
            },
        });
    };

    const handleSubmit = () => {
        nextStep();
        submit();
    };

    return (
        <>
            <div className="container mx-auto min-h-screen py-4">
                <Head title="Client Information Form" />
                <div className="container mx-auto flex items-center justify-center">
                    <UserRoundCheck size={40} className="hidden sm:block" />
                    <h1 className="mx-2 py-4 text-center text-3xl font-bold underline">Client Information Form</h1>
                </div>
                <div className="container mx-auto max-w-[75%] rounded-md border p-4 pb-16 shadow-lg sm:max-w-[50%]">
                    <MyStepper activeStep={activeStep} />
                    {activeStep == 0 && (
                        <ProfileStepOne
                            nextStep={nextStep}
                            handleContactData={handleContactData}
                            contactData={data} // Pass 'data' here
                        />
                    )}
                    {activeStep == 1 && (
                        <ProfileStepTwo
                            onSubmit={handleSubmit}
                            prevStep={prevStep}
                            handleAddressData={handleAddressData}
                            addressData={data} // Pass 'data' here
                        />
                    )}
                    {activeStep == 2 && <Spinner />}
                </div>
            </div>
        </>
    );
}

export default CreateFormHOC;
