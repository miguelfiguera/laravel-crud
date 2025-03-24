import { MapPinCheck } from 'lucide-react';
import React from 'react';

interface AddressData {
    address: string;
    state: string;
    country: string;
}

interface Props {
    addressData: AddressData;
    handleAddressData: (data: AddressData) => void;
    prevStep: () => void;
    onSubmit: () => void;
}

function ProfileStepTwo({ onSubmit, addressData, handleAddressData, prevStep }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleAddressData({ ...addressData, [e.target.name]: e.target.value });
    };

    return (
        <div className="">
            <MapPinCheck size={'50'} className="hidden sm:block" />

            <div className="mb-4">
                <label htmlFor="address" className="mb-2 block text-sm font-bold text-gray-700">
                    Address:
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={addressData.address || ''} // Default to empty string
                    onChange={handleChange}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="state" className="mb-2 block text-sm font-bold text-gray-700">
                    State:
                </label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    value={addressData.state || ''} // Default to empty string
                    onChange={handleChange}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="country" className="mb-2 block text-sm font-bold text-gray-700">
                    Country:
                </label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={addressData.country || ''} // Default to empty string
                    onChange={handleChange}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    required
                />
            </div>
            <button
                onClick={prevStep}
                className="mr-2 rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-400 focus:ring-offset-1 focus:outline-none"
            >
                Previous
            </button>
            <button
                onClick={() => onSubmit()}
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 focus:outline-none"
            >
                Submit
            </button>
        </div>
    );
}

export default ProfileStepTwo;
