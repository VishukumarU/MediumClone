import { createSelector } from "@ngrx/store";

export const authFeatureSelector = (
    state: App.IAppState
): MediumClone.IAuthState => state.auth;

export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (authState): boolean => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
    authFeatureSelector,
    (authState): MediumClone.IBackEndErrors | null => authState.validationErrors
);