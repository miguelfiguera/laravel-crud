import { Link } from '@inertiajs/react';
import { CircleX, Search } from 'lucide-react';
import { ChangeEvent } from 'react';

function ProfileHeader({
    handleFilterTypeChange,
    handleSearchFilterChange,
    handleReset,
    searchFilter,
    filterType,
}: {
    handleFilterTypeChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    handleSearchFilterChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleReset: () => void;
    searchFilter: string;
    filterType: string;
}) {
    return (
        <div className="sticky top-0 container mx-auto flex flex-col items-start justify-between border-b-2 bg-white px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
            {/* Left Side: Heading and Description */}
            <div>
                <h1 className="text-2xl font-semibold text-gray-800 sm:text-3xl">Client List</h1>
                <p className="text-gray-600">Manage your client's information</p>
            </div>

            {/* Right Side: Search Bar + New Client Button */}
            <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="mx-2 hidden sm:block">
                    <Search />
                </div>
                <select
                    className="my-2 me-2 rounded-md border border-gray-300 px-4 py-2 focus:outline-none"
                    name="filterType"
                    id="select"
                    value={filterType}
                    onChange={handleFilterTypeChange}
                >
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                </select>
                <div className="me-2 flex items-center rounded-md border border-gray-300 px-4 py-2 focus:outline-none">
                    <input type="text" placeholder="Search..." value={searchFilter} onChange={handleSearchFilterChange} />
                    <CircleX onClick={handleReset} className={`${searchFilter === '' ? 'hidden' : 'me-2 block'}`} />
                </div>
                <Link href="/profiles/create">
                    <button className="mt-4 rounded bg-gray-700 px-4 py-2 font-bold text-white hover:bg-gray-900 focus:ring-2 focus:ring-gray-400 focus:ring-offset-1 focus:outline-none sm:mt-0">
                        + New Client
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ProfileHeader;
