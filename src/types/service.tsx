export enum ServiceStatus {
    Init = 1,
    Loading,
    Loaded,
    Error
}

export interface WebserviceApiError {
    httpCode: number | null;
    message: string;
    dataError?: any;
}

interface ServiceInit {
    status: ServiceStatus.Init;
}

interface ServiceLoading {
    status: ServiceStatus.Loading;
}

interface ServiceLoaded<T> {
    status: ServiceStatus.Loaded;
    payload: T;
}

interface ServiceError {
    status: ServiceStatus.Error;
    error: Error | WebserviceApiError | unknown;
}

export type Service<T> =
    | ServiceInit
    | ServiceLoading
    | ServiceLoaded<T>
    | ServiceError;

export interface ServerResponse {
    status : boolean,
    errMsg?: string,
    [x: string]: any
}