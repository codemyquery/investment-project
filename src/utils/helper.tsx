export interface getAuthHeaderProps {
    userToken: string
}
export const getAuthHeader = ({
    userToken
}: getAuthHeaderProps): Headers => {
    return new Headers({
        userToken,
        timeStamp: `${new Date().toISOString().replace(/[-:]/g, "").substr(0, 15)}Z`,
        Accept: "application/json"
    })
}

export const postJsonAuthHeader = (
    userToken: string,
    bodyLength: number
): Headers => {
    return new Headers({
        userToken,
        timeStamp: `${new Date().toISOString().replace(/[-:]/g, "").substr(0, 15)}Z`,
        'Content-Length': `${bodyLength}`,
        'Content-Type': "application/json"
    })
}

export const formatDate = (date: Date, format?: 'dd-mm-yyyy' | 'yyyy-mm-dd') => {
    switch (format) {
        case 'dd-mm-yyyy':
            return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}}`
        case 'yyyy-mm-dd':
            return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}}`
        default:
            return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}}`
    }
}

export const formatNumber = (number: number, maximumFractionDigits?: number) => {
    return Intl.NumberFormat("en-In", { maximumFractionDigits: maximumFractionDigits,currency: 'INR' }).format(Number(number))
}