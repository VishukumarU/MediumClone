import { createSelector } from "@ngrx/store"

export const popularTagsFeatureSelector = (
    state: App.IAppState
): MediumClone.IPopularTagsState => state.popularTags

export const isLoadingSelector = createSelector(
    popularTagsFeatureSelector,
    (state: MediumClone.IPopularTagsState): boolean => state.isLoading
);

export const errorSelector = createSelector(
    popularTagsFeatureSelector,
    (state: MediumClone.IPopularTagsState): (string | null) => state.error
);

export const popularTagsSelector = createSelector(
    popularTagsFeatureSelector,
    (state: MediumClone.IPopularTagsState): (string[] | null) => state.data
)