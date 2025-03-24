import { profile } from '@/lib/interfaces';
import { create } from 'zustand';

export interface SearchState {
    filteredProfiles: profile[];
    searchFilter: string;
    filterType: string;
    setFilteredProfiles: (profiles: profile[]) => void;
    setSearchFilter: (filter: string) => void;
    setFilterType: (type: string) => void;
}

const useProfileFilterStore = create<SearchState>((set) => ({
    filteredProfiles: [],
    searchFilter: '',
    filterType: 'name',
    setFilteredProfiles: (profiles: profile[]) => set({ filteredProfiles: profiles }),
    setSearchFilter: (filter: string) => set({ searchFilter: filter }),
    setFilterType: (type: string) => set({ filterType: type }),
}));

export default useProfileFilterStore;
