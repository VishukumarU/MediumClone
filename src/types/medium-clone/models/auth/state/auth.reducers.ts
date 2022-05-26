import { Action, createReducer, on } from "@ngrx/store"
import { registerAction } from ".."

const initialState: MediumClone.IAuthState = {
    isSubmitting: false
}

const authReducer = createReducer<MediumClone.IAuthState>(
    initialState,
    on(registerAction, (state: MediumClone.IAuthState) => {
        return {
            ...state,
            isSubmitting: true
        }
    }));

export function authReducers (state: MediumClone.IAuthState, action: Action) {
    return authReducer(state, action);
}