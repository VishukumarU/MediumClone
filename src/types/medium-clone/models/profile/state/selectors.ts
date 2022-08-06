import { createSelector } from "@ngrx/store"

export const profileFeatureSelector = (
    state: App.IAppState
): MediumClone.IProfileState => state.profile

export const isLoadingSelector = createSelector(
    profileFeatureSelector,
    (state): boolean => state.isLoading
);

export const errorSelector = createSelector(
    profileFeatureSelector,
    (state): string | null => state.error
);

export const profileSelector = createSelector(
    profileFeatureSelector,
    (state): App.IProfile | null => state.data
);