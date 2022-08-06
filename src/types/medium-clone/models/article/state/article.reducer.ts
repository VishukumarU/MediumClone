import { routerNavigationAction } from "@ngrx/router-store";
import { Action, createReducer, on } from "@ngrx/store"
import { deleteArticleSuccessAction } from "./actions/delete-article.action";
import { getArticleAction, getArticleEditAction, getArticleEditSuccessAction, getArticleFailureAction, getArticleSuccessAction } from "./actions/get-article.action";
import { insertArticleFailureAction, insertArticleSuccessAction } from "./actions/insert-article.action";
import { updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction } from "./actions/update-article.action";

const initialState: MediumClone.IArticleState = {
    data: null,
    isLoading: false,
    error: null,
    validationErrors: null
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
    })),
    on(insertArticleSuccessAction, (state, action): MediumClone.IArticleState => ({
        ...state,
        isLoading: false,
        data: action.article,
        validationErrors: null
    })),
    on(insertArticleFailureAction, (state, action): MediumClone.IArticleState => ({
        ...state,
        isLoading: false,
        validationErrors: action.errors
    })),
    on(getArticleEditAction, (state): MediumClone.IArticleState => ({
        ...state,
        isLoading: true
    })),
    on(getArticleEditSuccessAction, (state, action): MediumClone.IArticleState => ({
        ...state,
        data: action.article,
        isLoading: false
    })),
    on(updateArticleAction, (state, action): MediumClone.IArticleState => ({
        ...state,
        isLoading: true
    })),
    on(updateArticleSuccessAction, (state, action): MediumClone.IArticleState => ({
        ...state,
        isLoading: false,
        data: action.article,
        validationErrors: null
    })),
    on(updateArticleFailureAction, (state, action): MediumClone.IArticleState => ({
        ...state,
        isLoading: false,
        data: null,
        validationErrors: action.errors
    }))
);

export const articleReducer = (
    state: MediumClone.IArticleState, action: Action
): MediumClone.IArticleState => reducer(state, action)