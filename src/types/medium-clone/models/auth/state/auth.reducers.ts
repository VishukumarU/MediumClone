import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store"
import { registerAction } from "src/types/medium-clone/core";
import { loginAction, loginFailureAction, loginSuccessAction } from "./actions/login.action";
import { registerFailureAction, registerSuccessAction } from "./actions/register.action";

const initialState: MediumClone.IAuthState = {
    isSubmitting: false,
    currenntUser: null,
    isLoggedIn: null,
    validationErrors: null
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
        currenntUser: action.currentUser,
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
        currenntUser: action.currentUser,
        isLoggedIn: true,
        validationErrors: null
    })),
    on(loginFailureAction, (state, action): MediumClone.IAuthState => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    }))
);

export function authReducers (state: MediumClone.IAuthState, action: Action) {
    return authReducer(state, action);
}