export interface ICurrentUserInput extends MediumClone.ICurrentUser {
    password: string;
}

export interface ISettingsState {
    isSubmitting: boolean;
    validationErrors: MediumClone.IBackEndErrors | null;
}