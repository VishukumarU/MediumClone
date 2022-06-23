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

export const isLoggedInSelector = createSelector(
    authFeatureSelector,
    (authState): boolean => authState?.isLoggedIn === true
);

export const isAnonymousSelector = createSelector(
    authFeatureSelector,
    (authState): boolean => authState?.isLoggedIn === false
);

export const currentUserSelector = createSelector(
    authFeatureSelector,
    (authState): MediumClone.ICurrentUser | null => authState.currentUser
);