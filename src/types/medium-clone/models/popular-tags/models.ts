
export interface IPopularTagsResponse {
    tags: string[];
}

export interface IPopularTagsState {
    isLoading: boolean;
    error: string | null;
    data: string[] | null;
}