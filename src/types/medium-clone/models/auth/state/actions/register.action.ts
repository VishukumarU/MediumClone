import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./actionTypes";

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{ request: MediumClone.IRegisterUser }>()
);

export const registerSuccessAction = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<{ currentUser: MediumClone.ICurrentUser }>()
);

export const registerFailureAction = createAction(
    ActionTypes.REGISTER_FAILURE,
    props<{ errors: MediumClone.IBackEndErrors }>()
);