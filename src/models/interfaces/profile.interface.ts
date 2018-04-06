export interface Profile {
    dateCreated: string;
    id: number;
    name: string;
    desc?: string;
    images?: Array<string>;
    profileData?: ProfileData;
}

export interface ProfileData {
    firstName: string;
    email: string;
    lastName: string;
    displayName?: string;
    birthdate?: string;
}