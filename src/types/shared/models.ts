export interface IAppState {
    auth: MediumClone.IAuthState;
    feed: MediumClone.IFeedState;
    popularTags: MediumClone.IPopularTagsState;
    article: MediumClone.IArticleState;
    settings: MediumClone.ISettingsState;
}

export interface IProfile {
    bio: string | null;
    following: boolean;
    image: string;
    username: string;
}
