import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./action-types";

export const removeFollowAction = createAction(
    ActionTypes.DELETE_FOLLOW,
    props<{ username: string }>()
);

export const removeFollowSuccessAction = createAction(
    ActionTypes.DELETE_FOLLOW_SUCCESS,
    props<{ profile: App.IProfile }>()
);

export const removeFollowFailureAction = createAction(
    ActionTypes.DELETE_FOLLOW_FAILURE,
);