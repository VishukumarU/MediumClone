import { createReducer, on } from "@ngrx/store";
import { addFollowAction, addFollowFailureAction, addFollowSuccessAction } from "./actions/add-follow.action";
import { getProfileAction, getProfileFailureAction, getProfileSuccessAction } from './actions/get-profile.action';
import { removeFollowAction, removeFollowFailureAction, removeFollowSuccessAction } from "./actions/remove-follow.action";

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
    })),
    on(addFollowAction, (state): MediumClone.IProfileState => ({
        ...state,
        isLoading: true
    })),
    on(addFollowSuccessAction, (state, action): MediumClone.IProfileState => ({
        ...state,
        data: action.profile,
        isLoading: false
    })),
    on(addFollowFailureAction, (state): MediumClone.IProfileState => ({
        ...state,
        isLoading: false
    })),
    on(removeFollowAction, (state): MediumClone.IProfileState => ({
        ...state,
        isLoading: true
    })),
    on(removeFollowSuccessAction, (state, action): MediumClone.IProfileState => ({
        ...state,
        data: action.profile,
        isLoading: false
    })),
    on(removeFollowFailureAction, (state): MediumClone.IProfileState => ({
        ...state,
        isLoading: false
    }))
);

// export const profileReducer = (
//     state: MediumClone.IProfileState, action: Action
// ): MediumClone.IProfileState => reducer(state, action)