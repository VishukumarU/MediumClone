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

export interface IArticleResponse {
    article: IArticle;
}

export interface IArticleState {
    data: IArticle | null;
    isLoading: boolean;
    error: string | null;
}