import { Action, createReducer, on } from "@ngrx/store"
import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from "./actions/get-popular-tags.action";

const initialState: MediumClone.IPopularTagsState = {
    data: null,
    error: null,
    isLoading: false
};

const popularTagsReducer = createReducer(initialState,
    on(getPopularTagsAction, (state): MediumClone.IPopularTagsState => ({
        ...state,
        isLoading: true
    })),
    on(getPopularTagsSuccessAction, (state, action): MediumClone.IPopularTagsState => ({
        ...state,
        isLoading: false,
        data: action.populartags
    })),
    on(getPopularTagsFailureAction, (state): MediumClone.IPopularTagsState => ({
        ...state,
        isLoading: false
    }))
);

export const popularTagsReducers = (
    state: MediumClone.IPopularTagsState, action: Action
): MediumClone.IPopularTagsState => popularTagsReducer(state, action);