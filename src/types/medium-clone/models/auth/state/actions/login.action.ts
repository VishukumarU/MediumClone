import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./actionTypes";

export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<{ request: MediumClone.ILoginRequest }>()
);

export const loginSuccessAction = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{ currentUser: MediumClone.ICurrentUser }>()
);

export const loginFailureAction = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{ errors: MediumClone.IBackEndErrors }>()
);