export interface IComment {
    author: App.IProfile;
    body: string;
    createdAt: string;
    id: number;
    updatedAt: string;
}

export interface ICommentResponse {
    comment: IComment;
}

export interface ICommentListResponse {
    comments: IComment[];
}

export interface ICommentState {
    isLoading: boolean;
    comments: MediumClone.IComment[] | null;
    validationErrors: MediumClone.IBackEndErrors | null;
}