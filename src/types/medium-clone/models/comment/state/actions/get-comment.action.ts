import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./action-types";

export const getCommentAction = createAction(
    ActionTypes.GET_COMMENT,
    props<{ username: string }>()
);
export const getCommentSuccessAction = createAction(
    ActionTypes.GET_COMMENT_SUCCESS,
    props<{ comments: MediumClone.IComment[] }>()
);
export const getCommentFailureAction = createAction(
    ActionTypes.GET_COMMENT_FAILURE
);