export interface IFeedResponse {
    articles: IArticle[];
    articlesCount: number;
}

export interface IArticle {
    author: App.IProfile;
    body: string;
    createdAt: string;
    description: string;
    favorited: boolean;
    favoritesCount: number;
    slug: string;
    tagList: string[];
    title: string;
}

export interface IFeedState {
    isLoading: boolean;
    error: string | null;
    data: IFeedResponse | null;
}