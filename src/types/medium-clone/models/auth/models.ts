export interface ICurrentUser {
    id: number;
    email: string;
    createdAt: string;
    updatedAt: string;
    image: string | null;
    bio: string | null;
    token: string;
    username: string;
}

export interface IRegisterRequest {
    username: string;
    password: string;
    email: string;
}

export interface IAuthState {
    isSubmitting: boolean;
}

export interface IAUthResponse {
    user: ICurrentUser
}
