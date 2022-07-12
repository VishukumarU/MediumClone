import { createSelector } from "@ngrx/store"

export const feedFeatureSelector = (
    state: App.IAppState
): MediumClone.IFeedState => state.feed

export const isLoadingSelector = createSelector(
    feedFeatureSelector,
    (feedState: MediumClone.IFeedState): boolean => feedState.isLoading
);

export const errorSelector = createSelector(
    feedFeatureSelector,
    (feedState: MediumClone.IFeedState): (string | null) => feedState.error
);

export const feedSelector = createSelector(
    feedFeatureSelector,
    (feedState: MediumClone.IFeedState): (MediumClone.IFeedResponse | null) => feedState.data
)