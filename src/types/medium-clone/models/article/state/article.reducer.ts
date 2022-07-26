import { routerNavigationAction } from "@ngrx/router-store";
import { Action, createReducer, on } from "@ngrx/store"
import { deleteArticleAction, deleteArticleFailureAction, deleteArticleSuccessAction } from "./actions/delete-article.action";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "./actions/get-article.action";

const initialState: MediumClone.IArticleState = {
    data: null,
    isLoading: false,
    error: null
}

const reducer = createReducer(initialState,
    on(getArticleAction, (state): MediumClone.IArticleState => ({
        ...state,
        isLoading: true
    })),
    on(getArticleSuccessAction, (state, action): MediumClone.IArticleState => ({
        ...state,
        isLoading: false,
        data: action.article
    })),
    on(getArticleFailureAction, (state): MediumClone.IArticleState => ({
        ...state,
        isLoading: false
    })),
    on(routerNavigationAction, (state): MediumClone.IArticleState => ({
        ...state,
        data: null
    })),
    on(deleteArticleSuccessAction, (state): MediumClone.IArticleState => ({
        ...state,
        data: null
    }))
);

export const articleReducer = (
    state: MediumClone.IArticleState, action: Action
): MediumClone.IArticleState => reducer(state, action)