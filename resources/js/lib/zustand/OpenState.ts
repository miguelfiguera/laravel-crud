import { profile } from '@/lib/interfaces';
import { create } from 'zustand';

export interface ModalState {
    open: boolean;
    settedProfile: profile | null;
    setOpen: (open: boolean) => void;
    setSettedProfile: (profile: profile | null) => void;
}

const useModalState = create<ModalState>((set) => ({
    open: false,
    settedProfile: null,
    setOpen: (open: boolean) => set({ open }),
    setSettedProfile: (profile: profile | null) => set({ settedProfile: profile }),
}));

export default useModalState;
