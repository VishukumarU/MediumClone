import { createSelector } from "@ngrx/store"

export const favouriteFeatureSelector = (
    state: App.IAppState
): MediumClone.IFavouriteState => state.favourite

export const isLoadingSelector = createSelector(
    favouriteFeatureSelector,
    (state: MediumClone.IFavouriteState): boolean => state.isLoading
);

export const errorSelector = createSelector(
    favouriteFeatureSelector,
    (state: MediumClone.IFavouriteState): string | null => state.error
)