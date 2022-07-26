export interface IFeedResponse {
    articles: MediumClone.IArticle[];
    articlesCount: number;
}

export interface IFeedState {
    isLoading: boolean;
    error: string | null;
    data: IFeedResponse | null;
}