import { Action, createReducer, on } from "@ngrx/store"
import { registerAction } from "src/types/medium-clone/core";
import { loginAction, loginFailureAction, loginSuccessAction } from "./actions/login.action";
import { registerFailureAction, registerSuccessAction } from "./actions/register.action";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "./actions/get-current-user.action";
import { updateCurrentUserSuccessAction } from "../../settings/state/actions/update-current-user.action";
import { logoutAction } from "../../settings/state/actions/logout-action";

const initialState: MediumClone.IAuthState = {
    isSubmitting: false,
    currentUser: null,
    isLoggedIn: null,
    validationErrors: null,
    isLoading: false
}

const authReducer = createReducer(initialState,
    on(registerAction, (state): MediumClone.IAuthState => ({
        ...state,
        isSubmitting: true,
        validationErrors: null
    })),
    on(registerSuccessAction, (state, action): MediumClone.IAuthState => ({
        ...state,
        isSubmitting: false,
        currentUser: action.currentUser,
        isLoggedIn: true,
        validationErrors: null
    })),
    on(registerFailureAction, (state, action): MediumClone.IAuthState => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    })),
    on(loginAction, (state): MediumClone.IAuthState => ({
        ...state,
        isSubmitting: true,
        validationErrors: null
    })),
    on(loginSuccessAction, (state, action): MediumClone.IAuthState => ({
        ...state,
        isSubmitting: false,
        currentUser: action.currentUser,
        isLoggedIn: true,
        validationErrors: null
    })),
    on(loginFailureAction, (state, action): MediumClone.IAuthState => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    })),
    on(getCurrentUserAction, (state): MediumClone.IAuthState => ({
        ...state,
        isLoading: true
    })),
    on(getCurrentUserSuccessAction, (state, action): MediumClone.IAuthState => ({
        ...state,
        currentUser: action.currentUser,
        isLoading: false,
        isLoggedIn: true
    })),
    on(getCurrentUserFailureAction, (state): MediumClone.IAuthState => ({
        ...state,
        isLoading: false,
        isLoggedIn: false,
        currentUser: null
    })),
    on(updateCurrentUserSuccessAction, (state, action): MediumClone.IAuthState => ({
        ...state,
        currentUser: action.user,
        isLoading: false
    })),
    on(logoutAction, (state): MediumClone.IAuthState => ({
        ...state,
        ...initialState,
        isLoggedIn: false
    }))
);

export function authReducers (state: MediumClone.IAuthState, action: Action) {
    return authReducer(state, action);
}