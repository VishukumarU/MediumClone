import { routerNavigationAction } from "@ngrx/router-store";
import { Action, createReducer, on, State } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";
import { ActionTypes } from "../../favourite/state/actions/action-types";
import { decreaseCountSuccessAction } from "../../favourite/state/actions/decrease-count.action";
import { increaseCountAction, increaseCountSuccessAction } from "../../favourite/state/actions/increase-count.action";
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
    on(routerNavigationAction, (): MediumClone.IFeedState => initialState),
    on(increaseCountSuccessAction, (state, action): MediumClone.IFeedState => {

        const articles = getArticles(state, action);
        return {
            ...state,
            data: {
                ...state.data!,
                articles: articles!,
            }
        };
    }),
    on(decreaseCountSuccessAction, (state, action): MediumClone.IFeedState => {
        const articles = getArticles(state, action);
        return {
            ...state,
            data: {
                ...state.data!,
                articles: articles!
            }
        };
    })
);


// Function to get the new articles after favouriting
const getArticles = (state: MediumClone.IFeedState, action: {
    article: MediumClone.IArticle
} & TypedAction<ActionTypes.DECREASE_COUNT_SUCCESS | ActionTypes.INCREASE_COUNT_SUCCESS> & {
    type: ActionTypes.DECREASE_COUNT_SUCCESS | ActionTypes.INCREASE_COUNT_SUCCESS;
}) => {

    const index = state.data?.articles?.findIndex(article => article.slug === action.article.slug);
    let articles: MediumClone.IArticle[] | null = null;
    if (index !== -1 && index !== undefined) {
        if (state.data !== null) {
            articles = state.data.articles.slice();
            articles[index!] = action.article;
        }
    }
    return articles;

}

export const feedReducers = (state: MediumClone.IFeedState, action: Action): MediumClone.IFeedState => {
    return feedReducer(state, action)
}