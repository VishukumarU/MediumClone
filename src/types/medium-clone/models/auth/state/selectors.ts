import { createFeatureSelector, createSelector } from "@ngrx/store";

export const authSelector = createFeatureSelector<App.IAppState>('auth');


export const isSubmittingSelector = createSelector(
    authSelector,
    (state) => state.auth.isSubmitting
)
