import { createSelector } from "@ngrx/store"

export const articleFeatureSelector = (
    state: App.IAppState
): MediumClone.IArticleState => state.article

export const isLoadingSelector = createSelector(
    articleFeatureSelector,
    (state: MediumClone.IArticleState): boolean => state.isLoading
);

export const errorSelector = createSelector(
    articleFeatureSelector,
    (state: MediumClone.IArticleState): (string | null) => state.error
);

export const articleSelector = createSelector(
    articleFeatureSelector,
    (state: MediumClone.IArticleState): (MediumClone.IArticle | null) => state.data
);

export const backEndErrorsSelector = createSelector(
    articleFeatureSelector,
    (state: MediumClone.IArticleState): MediumClone.IBackEndErrors | null => state.validationErrors
);