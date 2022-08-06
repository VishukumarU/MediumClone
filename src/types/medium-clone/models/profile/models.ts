export interface IProfileResponse {
    profile: App.IProfile;
}

export interface IProfileState {
    data: App.IProfile | null;
    isLoading: boolean;
    error: string | null;
}