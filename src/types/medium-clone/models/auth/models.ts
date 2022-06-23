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

export interface IRegisterUser {
    user: IRegisterRequest;
}

export interface IAuthState {
    isSubmitting: boolean;
    currentUser: ICurrentUser | null;
    isLoggedIn: boolean | null;
    validationErrors: IBackEndErrors | null;
    isLoading: boolean;
}

export interface IAuthResponse {
    user: ICurrentUser
}

export interface IBackEndErrors {
    [key: string]: string[];
}

export interface ILoginRequest {
    user: {
        email: string;
        password: string
    }
}
