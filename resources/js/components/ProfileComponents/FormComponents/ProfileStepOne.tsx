// src/components/ProfileComponents/ProfileStepOne.tsx
import { ContactDataNoId } from '@/lib/interfaces'; // Import the ContactData interface
import { Link } from '@inertiajs/react';
import { Contact } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';

interface Props {
    contactData: ContactDataNoId;
    handleContactData: (data: ContactDataNoId) => void;
    nextStep: () => void;
}

function ProfileStepOne({ contactData, handleContactData, nextStep }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleContactData({ ...contactData, [e.target.name]: e.target.value });
    };

    const disabled = !contactData.full_name || !contactData.email || !contactData.phone;

    const handleClick = () => {
        if (disabled === false) {
            nextStep();
        } else {
            toast.error('Please fill in all required fields');
        }
    };
    return (
        <div className="">
            <div className="mb-5 flex items-center justify-center border-b-2 border-gray-200 pb-2">
                <Contact size={'50'} className="hidden sm:block" />
                <h2 className="mx-2 text-3xl font-bold">Personal Information</h2>
            </div>
            <div className="mb-4">
                <label htmlFor="full_name" className="mb-2 block text-sm font-bold text-gray-700">
                    Full Name:
                </label>
                <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={contactData.full_name || ''} // Use contactData
                    onChange={handleChange}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-gray-700">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactData.email || ''} // Use contactData
                    onChange={handleChange}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="mb-2 block text-sm font-bold text-gray-700">
                    Phone:
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={contactData.phone || ''} // Use contactData
                    onChange={handleChange}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    required
                />
            </div>
            <Link href="/">
                <button className="mx-3 rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-400 focus:ring-offset-1 focus:outline-none">
                    Cancel
                </button>
            </Link>
            <button
                onClick={handleClick}
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 focus:outline-none"
            >
                Next
            </button>
        </div>
    );
}

export default ProfileStepOne;
