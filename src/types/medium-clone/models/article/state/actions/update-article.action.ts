import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./action-types";

export const updateArticleAction = createAction(
    ActionTypes.UPDATE_ARTICLE,
    props<{ article: MediumClone.IArticle }>()
);

export const updateArticleSuccessAction = createAction(
    ActionTypes.UPDATE_ARTICLE_SUCCESS,
    props<{ article: MediumClone.IArticle }>()
);

export const updateArticleFailureAction = createAction(
    ActionTypes.UPDATE_ARTICLE_FAILURE,
    props<{ errors: MediumClone.IBackEndErrors }>()
);