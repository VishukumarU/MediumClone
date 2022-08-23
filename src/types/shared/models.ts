export interface IAppState {
    auth: MediumClone.IAuthState;
    feed: MediumClone.IFeedState;
    popularTags: MediumClone.IPopularTagsState;
    article: MediumClone.IArticleState;
    settings: MediumClone.ISettingsState;
    profile: MediumClone.IProfileState;
    favourite: MediumClone.IFavouriteState;
    comment: MediumClone.ICommentState;
}

export interface IProfile {
    bio: string | null;
    following: boolean;
    image: string;
    username: string;
}
