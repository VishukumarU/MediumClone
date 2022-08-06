import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./action-types";

export const updateCurrentUserAction = createAction(
    ActionTypes.UPDATE_CURRENT_USER,
    props<{ user: MediumClone.ICurrentUserInput }>()
);

export const updateCurrentUserSuccessAction = createAction(
    ActionTypes.UPDATE_CURRENT_USER_SUCCESS,
    props<{ user: MediumClone.ICurrentUser }>()
);
export const updateCurrentUserFailureAction = createAction(
    ActionTypes.UPDATE_CURRENT_USER_FAILURE,
    props<{ errors: MediumClone.IBackEndErrors }>()
);