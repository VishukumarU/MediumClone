import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./action-types";

export const decreaseCountAction = createAction(
    ActionTypes.DECREASE_COUNT,
    props<{ slug: string }>()
);
export const decreaseCountSuccessAction = createAction(
    ActionTypes.DECREASE_COUNT_SUCCESS,
    props<{ article: MediumClone.IArticle }>()
);
export const decreaseCountFailureAction = createAction(
    ActionTypes.DECREASE_COUNT_FAILURE,
    props<{ error: string }>()
);