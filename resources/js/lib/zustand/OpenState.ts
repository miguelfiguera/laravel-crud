import { profile } from '@/lib/interfaces';
import { create } from 'zustand';

export interface ModalState {
    open: boolean;
    settedProfile: profile;
    setOpen: (open: boolean) => void;
    setSettedProfile: (profile: profile) => void;
}

const useModalState = create<ModalState>((set) => ({
    open: false,
    settedProfile: {} as profile,
    setOpen: (open: boolean) => set({ open }),
    setSettedProfile: (profile: profile) => set({ settedProfile: profile }),
}));

export default useModalState;
