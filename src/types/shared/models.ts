export interface IAppState {
    auth: MediumClone.IAuthState;
    feed: MediumClone.IFeedState;
}

export interface IProfile {
    bio: string | null;
    following: boolean;
    image: string;
    username: string;
}