import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./action-types";

export const removeCommentAction = createAction(
    ActionTypes.REMOVE_COMMENT,
    props<{ slug: string, id: number }>()
);

export const removeCommentSuccessAction = createAction(
    ActionTypes.REMOVE_COMMENT_SUCCESS,
    props<{ id: number }>()
);

export const removeCommentFailureAction = createAction(
    ActionTypes.REMOVE_COMMENT_FAILURE
);