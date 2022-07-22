export interface IAppState {
    auth: MediumClone.IAuthState;
    feed: MediumClone.IFeedState;
    popularTags: MediumClone.IPopularTagsState;
}

export interface IProfile {
    bio: string | null;
    following: boolean;
    image: string;
    username: string;
}
