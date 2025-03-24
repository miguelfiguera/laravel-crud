export interface profile {
    id: number;
    full_name: string;
    phone: string;
    email: string;
    country: string;
    state: string;
    address: string;
}

// Use `type` instead of an empty interface
// This is to avoid Eslint error about empty interfaces
export type ContactData = Pick<profile, 'full_name' | 'phone' | 'email' | 'id'>;
export type AddressData = Pick<profile, 'country' | 'state' | 'address'>;
export type ContactDataNoId = Pick<profile, 'full_name' | 'phone' | 'email'>;
