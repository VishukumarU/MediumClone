import { Action, createReducer, on } from "@ngrx/store"
import { updateCurrentUserAction, updateCurrentUserFailureAction, updateCurrentUserSuccessAction } from "./actions/update-current-user.action";

const initialState: MediumClone.ISettingsState = {
    isSubmitting: false,
    validationErrors: null
}

const reducer = createReducer(initialState,
    on(updateCurrentUserAction, (state): MediumClone.ISettingsState => ({
        ...state,
        isSubmitting: true
    })),
    on(updateCurrentUserSuccessAction, (state): MediumClone.ISettingsState => ({
        ...state,
        isSubmitting: false
    })),
    on(updateCurrentUserFailureAction, (state, action): MediumClone.ISettingsState => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    }))
);

export const SettingsReducer = (
    state: MediumClone.ISettingsState, action: Action
): MediumClone.ISettingsState => reducer(state, action)
