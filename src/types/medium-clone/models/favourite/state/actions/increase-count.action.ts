import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./action-types";

export const increaseCountAction = createAction(
    ActionTypes.INCREASE_COUNT,
    props<{ slug: string }>()
);

export const increaseCountSuccessAction = createAction(
    ActionTypes.INCREASE_COUNT_SUCCESS,
    props<{ article: MediumClone.IArticle }>()
);

export const increaseCountFailueAction = createAction(
    ActionTypes.INCREASE_COUNT_FAILURE,
    props<{ error: string }>()
)