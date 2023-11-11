export type FormModes = 'init' | 'loading' | 'edit' | 'create'

export type Severity = 'success' | 'error' | 'info' | undefined

export interface FormState {
    mode: FormModes,
    loading: boolean,
    notificationOpen: boolean,
    notificationType: Severity,
    notificationMessage: string | React.ReactNode
    formSubmitted: boolean,
    reload: Date
}

export interface FormDialog {
    open: boolean,
    [x:string]: unknown
}

export const DefaultFormState: FormState = {
    mode: 'init',
    loading: false,
    notificationOpen: false,
    notificationType: 'error',
    notificationMessage: '',
    formSubmitted: false,
    reload: new Date()
}