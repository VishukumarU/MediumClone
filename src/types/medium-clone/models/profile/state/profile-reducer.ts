import { Action, createReducer, on } from "@ngrx/store";
import { getProfileAction, getProfileFailureAction, getProfileSuccessAction } from './actions/get-profile.action';

const initialState: MediumClone.IProfileState = {
    data: null,
    error: null,
    isLoading: false
};

// export const reducer = createReducer(initialState,
export const profileReducer = createReducer(initialState,
    on(getProfileAction, (state): MediumClone.IProfileState => ({
        ...state,
        isLoading: true
    })),
    on(getProfileSuccessAction, (state, action): MediumClone.IProfileState => ({
        ...state,
        data: action.profile,
        isLoading: false
    })),
    on(getProfileFailureAction, (state): MediumClone.IProfileState => ({
        ...state,
        isLoading: false
    }))
);

// export const profileReducer = (
//     state: MediumClone.IProfileState, action: Action
// ): MediumClone.IProfileState => reducer(state, action)