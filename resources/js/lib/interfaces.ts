export interface profile {
    id: number;
    full_name: string;
    phone: string;
    email: string;
    country: string;
    state: string;
    address: string;
}

export interface ContactData extends Pick<profile, 'full_name' | 'phone' | 'email' | 'id'> {}
export interface AddressData extends Pick<profile, 'country' | 'state' | 'address'> {}
export interface ContactDataNoId extends Pick<profile, 'full_name' | 'phone' | 'email'> {}
