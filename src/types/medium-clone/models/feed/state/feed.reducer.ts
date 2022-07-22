import { routerNavigationAction } from "@ngrx/router-store";
import { Action, createReducer, on } from "@ngrx/store";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "./actions/get-feed.action";

const initialState: MediumClone.IFeedState = {
    isLoading: false,
    error: null,
    data: null
}

const feedReducer = createReducer(initialState,
    on(getFeedAction, (state): MediumClone.IFeedState => ({
        ...state,
        isLoading: true
    })),
    on(getFeedSuccessAction, (state, action): MediumClone.IFeedState => ({
        ...state,
        isLoading: false,
        data: action.feed
    })),
    on(getFeedFailureAction, (state): MediumClone.IFeedState => ({
        ...state,
        isLoading: false
    })),
    on(routerNavigationAction, (): MediumClone.IFeedState => initialState)
);

// export function feedReducers (state: MediumClone.IFeedState, action: Action) {
//     return feedReducer(state, action)
// }

export const feedReducers = (state: MediumClone.IFeedState, action: Action): MediumClone.IFeedState => {
    return feedReducer(state, action)
}