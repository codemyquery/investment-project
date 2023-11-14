export interface ContactUsFormData {
    name:string,
    mobile:string,
    email: string,
    message:string,
    acceptedPromotionMails:boolean
}
export interface ContactUsServerData {
    id : string,
    name:string,
    mobile:string,
    email: string,
    message:string,
    acceptedPromotionMails:boolean,
    dateUpdated: Date
}

export interface ContactusDataResponse {
    count: number,
    rows: Array<ContactUsServerData>
}