import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./action-types";

export const getProfileAction = createAction(
    ActionTypes.GET_PROFILE,
    props<{ username: string }>()
);

export const getProfileSuccessAction = createAction(
    ActionTypes.GET_PROFILE_SUCCESS,
    props<{ profile: App.IProfile }>()
);

export const getProfileFailureAction = createAction(
    ActionTypes.GET_PROFILE_FAILURE
);