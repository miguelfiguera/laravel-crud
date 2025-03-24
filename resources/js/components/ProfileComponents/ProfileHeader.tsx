import { profile } from '@/lib/interfaces';
import useProfileFilterStore from '@/lib/zustand/SearchState';
import { Link, usePage } from '@inertiajs/react';
import { CircleX, Search } from 'lucide-react';
import { ChangeEvent, useEffect } from 'react';

interface PageProps {
    profiles: profile[];
    [key: string]: profile[] | string;
}
function ProfileHeader() {
    const { profiles } = usePage<PageProps>().props;
    const { searchFilter, filterType, setFilterType, setSearchFilter, setFilteredProfiles } = useProfileFilterStore();
    useEffect(() => {
        setFilteredProfiles(profiles);
        filterProfiles();
    }, [searchFilter, filterType, profiles]);

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

    //Filter
    const SearchFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchFilter(e.target.value);
    };
    //Filter Type
    const FilterTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterType(e.target.value);
    };
    //Reset (Clear Filter)
    const handleReset = () => {
        setSearchFilter('');
    };

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
                    onChange={FilterTypeChange}
                >
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                </select>
                <div className="me-2 flex items-center rounded-md border border-gray-300 px-4 py-2 focus:outline-none">
                    <input type="text" placeholder="Search..." value={searchFilter} onChange={SearchFilterChange} />
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
