import { createSelector } from "@ngrx/store"

export const commentFeatureSelector = (
    state: App.IAppState
): MediumClone.ICommentState => state.comment

export const isCommentLoadingSelector = createSelector(
    commentFeatureSelector,
    (state: MediumClone.ICommentState): boolean => state.isLoading
);
export const errorsSelector = createSelector(
    commentFeatureSelector,
    (state: MediumClone.ICommentState): (MediumClone.IBackEndErrors | null) => state.validationErrors
);
export const commentsSelector = createSelector(
    commentFeatureSelector,
    (state: MediumClone.ICommentState): (MediumClone.IComment[] | null) => state.comments
);