import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./action-types";

export const addCommentAction = createAction(
    ActionTypes.ADD_COMMENT,
    props<{ slug: string, comment: MediumClone.IComment }>()
);

export const addCommentSuccessAction = createAction(
    ActionTypes.ADD_COMMENT_SUCCESS,
    props<{ comment: MediumClone.IComment }>()
);

export const addCommentFailureAction = createAction(
    ActionTypes.ADD_COMMENT_FAILURE,
    props<{ errors: MediumClone.IBackEndErrors }>()
);