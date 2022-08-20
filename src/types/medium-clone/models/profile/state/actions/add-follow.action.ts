import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./action-types";

export const addFollowAction = createAction(
    ActionTypes.ADD_FOLLOW,
    props<{ username: string }>()
);
export const addFollowSuccessAction = createAction(
    ActionTypes.ADD_FOLLOW_SUCCESS,
    props<{ profile: App.IProfile }>()
);
export const addFollowFailureAction = createAction(
    ActionTypes.ADD_FOLLOW_FAILURE
);