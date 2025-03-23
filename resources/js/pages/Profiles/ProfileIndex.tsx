import ProfileItem from '@/components/ProfileComponents/ProfileItem';
import { profile } from '@/lib/interfaces';
import { Head, Link, usePage } from '@inertiajs/react';
import { CircleX, Search } from 'lucide-react';
import { ChangeEvent, useEffect, useState } from 'react';

interface PageProps {
    profiles: profile[];
    [key: string]: any;
}

function ProfileIndex() {
    const { profiles } = usePage<PageProps>().props;
    const [filteredProfiles, setFilteredProfiles] = useState<profile[]>(profiles);
    const [searchFilter, setSearchFilter] = useState<string>('');
    const [filterType, setFilterType] = useState<string>('name'); // Default to 'name' for initial filtering

    useEffect(() => {
        setFilteredProfiles(profiles);
        filterProfiles();
    }, [searchFilter, filterType, profiles]); // Add profiles to dependencies

    const filterProfiles = () => {
        let filtered: profile[] = [...profiles]; // Start with a copy of all profiles

        if (searchFilter && filterType) {
            filtered = profiles.filter((profileItem: profile) => {
                const searchTermLower = searchFilter.toLowerCase();
                switch (filterType) {
                    case 'name':
                        return profileItem.full_name.toLowerCase().includes(searchTermLower);
                    case 'email':
                        return profileItem.email.toLowerCase().includes(searchTermLower);
                    case 'phone':
                        return profileItem.phone.toLowerCase().includes(searchTermLower);
                    default:
                        return true; // Should not happen, but prevents errors. Shows all profiles
                }
            });
        }
        setFilteredProfiles(filtered); // Update filteredProfiles state
    };

    const handleReset = () => {
        setSearchFilter('');
        // setFilterType('name');
    };

    const handleFilterTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterType(e.target.value);
    };
    const handleSearchFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchFilter(e.target.value);
    };

    const mappedProfiles = filteredProfiles.map((profileItem: profile) => <ProfileItem key={profileItem.id} profile={profileItem} />);

    return (
        <div className="min-h-screen">
            <Head title="Profile" />
            <div className="container mx-auto flex flex-col items-start justify-between border-b-2 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
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
                        {' '}
                        <button className="focus:shadow-outline mt-4 rounded bg-gray-700 px-4 py-2 font-bold text-white hover:bg-gray-900 focus:outline-none sm:mt-0">
                            + New Client
                        </button>
                    </Link>
                </div>
            </div>

            <div className="container mx-auto mt-4 px-3">
                <div className="my-2 hidden items-center justify-between rounded-md border-b-2 bg-white px-2 py-4 shadow-sm md:flex">
                    <div className="hidden w-full items-center justify-around font-bold md:flex">
                        <div className="mx-2 w-1/6 text-left">Name</div>
                        <div className="mx-2 w-1/6 text-left">Phone</div>
                        <div className="mx-2 w-2/6 text-left">Email</div>
                        <div className="mx-2 hidden w-1/12 text-left lg:block">Country</div>
                        <div className="w-1/5 text-center">Actions</div>
                    </div>
                </div>
            </div>
            {filteredProfiles.length > 0 ? (
                <div className="container mx-auto mt-4 px-3 pb-4">{mappedProfiles}</div>
            ) : (
                <div className="container mx-auto my-2 mt-4 min-h-50 max-w-[85%] items-center justify-between rounded-md border-b-2 bg-white px-3 py-4 shadow-sm sm:flex">
                    <p className="mx-auto text-center text-4xl font-bold text-gray-600">No profiles found.</p>
                </div>
            )}
        </div>
    );
}

export default ProfileIndex;
