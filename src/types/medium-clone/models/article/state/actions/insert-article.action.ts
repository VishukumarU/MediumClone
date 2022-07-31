import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./action-types";

export const insertArticleAction = createAction(
    ActionTypes.INSERT_ARTICLE,
    props<{ article: MediumClone.IArticleInput }>()
);

export const insertArticleSuccessAction = createAction(
    ActionTypes.INSERT_ARTICLE_SUCCESS,
    props<{ article: MediumClone.IArticle }>()
);

export const insertArticleFailureAction = createAction(
    ActionTypes.INSERT_ARTICLE_FAILURE,
    props<{ errors: MediumClone.IBackEndErrors }>()
);