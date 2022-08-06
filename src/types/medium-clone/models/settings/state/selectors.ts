import { createSelector } from "@ngrx/store"

export const settingsFeatureSelector = (
    state: App.IAppState,
): MediumClone.ISettingsState => state.settings

export const isSubmittingSelector = createSelector(
    settingsFeatureSelector,
    (state: MediumClone.ISettingsState): boolean => state.isSubmitting
);

export const validationErrorsSelector = createSelector(
    settingsFeatureSelector,
    (state: MediumClone.ISettingsState): MediumClone.IBackEndErrors | null => state.validationErrors
)