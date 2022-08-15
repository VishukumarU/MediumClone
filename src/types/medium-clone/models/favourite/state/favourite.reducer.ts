import { Action, createReducer, on } from "@ngrx/store"
import { decreaseCountAction, decreaseCountFailureAction, decreaseCountSuccessAction } from "./actions/decrease-count.action";
import { increaseCountAction, increaseCountFailueAction, increaseCountSuccessAction } from "./actions/increase-count.action";

const initialState: MediumClone.IFavouriteState = {
    error: null,
    isLoading: false
}

const reducer = createReducer(initialState,
    on(increaseCountAction, (state): MediumClone.IFavouriteState => ({
        ...state,
        isLoading: true
    })),
    on(increaseCountSuccessAction, (state): MediumClone.IFavouriteState => ({
        ...state,
        isLoading: false
    })),
    on(increaseCountFailueAction, (state, action): MediumClone.IFavouriteState => ({
        ...state,
        error: action.error,
        isLoading: false
    })),
    on(decreaseCountAction, (state): MediumClone.IFavouriteState => ({
        ...state,
        isLoading: true
    })),
    on(decreaseCountSuccessAction, (state): MediumClone.IFavouriteState => ({
        ...state,
        isLoading: false
    })),
    on(decreaseCountFailureAction, (state, action): MediumClone.IFavouriteState => ({
        ...state, isLoading: false,
        error: action.error
    }))
);

export const favouriteReducer = (
    state: MediumClone.IFavouriteState, action: Action
): MediumClone.IFavouriteState => reducer(state, action)