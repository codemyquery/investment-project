export interface UserServerData {
    id: string,
    name: string,
    email: string,
    mobile: string,
    kycStatus: string,
    dateUpdated: string
}

export interface LoginFormData {
    username: string,
    password: string
}

export interface SignUpFormData {
    name: string,
    mobile: string,
    email: string,
    lgLcCode: string,
    password: string,
    confirmPassword: string,
    acceptedPromotionMails: number
}

export interface UserDataResponse {
    count: number,
    rows: Array<UserServerData>
}