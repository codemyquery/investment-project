import * as React from 'react';
import { Button, Card, CardHeader, CardMedia, Grid, IconButton, Typography } from "@mui/material"
import { Control, FieldErrors, UseFormGetValues, UseFormSetValue } from "react-hook-form"
import { FormState, UserKYCFormData } from "../../types"
import { KYCCards } from '../molecules';
import { noAadharCardBank, noAadharCardFront, noBankStatement, noPanCard, noSignature } from '../../assets';
import { data } from 'jquery';
import { WS_BASE_URL, t } from '../../utils';
import { callFileUploadService } from '../../utils/service';
import { SetStateAction } from 'react';
import { BASE_IMG_URL } from '../../utils/constants';
import { SkeletonLoader } from '../atoms';
interface UserUploadDocumentsProps {
    control: Control<UserKYCFormData, any>
    setValue: UseFormSetValue<UserKYCFormData>
    getValues: UseFormGetValues<UserKYCFormData>
    setFormState: (value: SetStateAction<FormState>) => void,
    errors: FieldErrors<UserKYCFormData>
}

interface ImageLoadinStatus {
    aadharCardFront: boolean
    aadharCardBack: boolean
    pan: boolean
    signature: boolean
    bankStatement: boolean
}

const defaultLoadingValues: ImageLoadinStatus = {
    aadharCardFront: false,
    aadharCardBack: false,
    pan: false,
    signature: false,
    bankStatement: false
}

export const UserUploadDocuments = ({
    control,
    setValue,
    getValues,
    setFormState,
    errors
}: UserUploadDocumentsProps) => {
    const [loading, setLoading] = React.useState<ImageLoadinStatus>(defaultLoadingValues)
    const onChangeHandler = (file: File, option: string) => {
        switch (option) {
            case 'Aadhar Card Front':
                setValue('aadharCard.front', file);
                break;
            case 'Aadhar Card Back':
                setValue('aadharCard.back', file);
                break;
            case 'PAN Card ':
                setValue('panCard', file);
                break;
            case 'Bank Statement ':
                setValue('bankStatement', file);
                break;
            case 'Signature ':
                setValue('signature', file);
                break;
        }
        onUploadHandler(option, file)
    };

    const onUploadHandler = async (option: string, file: File) => {
        try {
            let response: any = null;
            switch (option) {
                case 'Aadhar Card Front':
                    setLoading(prev => ({...prev, aadharCardFront: true}))
                    response = await callFileUploadService({
                        userToken: 'asdasdasd',
                        file: [getValues('aadharCard.front')!],
                        url: `${WS_BASE_URL}?page=upload&actions=uploadKyc`
                    })
                    setValue('aadharCard.frontUrl', response.url);
                    setLoading(prev => ({...prev, aadharCardFront: false}))
                    break;
                case 'Aadhar Card Back':
                    setLoading(prev => ({...prev, aadharCardBack: true}))
                    response = await callFileUploadService({
                        userToken: 'asdasdasd',
                        file: [getValues('aadharCard.back')!],
                        url: `${WS_BASE_URL}?page=upload&actions=uploadKyc`
                    })
                    setValue('aadharCard.backUrl', response.url);
                    setLoading(prev => ({...prev, aadharCardBack: false}))
                    break;
                case 'PAN Card ':
                    setLoading(prev => ({...prev, pan: true}))
                    response = await callFileUploadService({
                        userToken: 'asdasdasd',
                        file: [getValues('panCard')!],
                        url: `${WS_BASE_URL}?page=upload&actions=uploadKyc`
                    })
                    setValue('panCardUrl', response.url);
                    setLoading(prev => ({...prev, pan: false}))
                    break;
                case 'Bank Statement ':
                    setLoading(prev => ({...prev, bankStatement: true}))
                    response = await callFileUploadService({
                        userToken: 'asdasdasd',
                        file: [getValues('bankStatement')!],
                        url: `${WS_BASE_URL}?page=upload&actions=uploadKyc`
                    })
                    setValue('bankStatementUrl', response.url);
                    setLoading(prev => ({...prev, bankStatement: false}))
                    break;
                case 'Signature ':
                    setLoading(prev => ({...prev, signature: true}))
                    response = await callFileUploadService({
                        userToken: 'asdasdasd',
                        file: [getValues('signature')!],
                        url: `${WS_BASE_URL}?page=upload&actions=uploadKyc`
                    })
                    setValue('signatureUrl', response.url);
                    setLoading(prev => ({...prev, signature: false}))
                    break;
            }
            setFormState(prev => {
                return {
                    ...prev,
                    notificationOpen: true,
                    formSubmitted: true,
                    ...(response.url ? { mode: 'edit' } : {}),
                    ...(response.url ? { notificationMessage: t.successMessage } : { notificationType: t.errorMessage }),
                    loading: false,
                    ...(response.url ? { notificationType: 'success' } : { notificationType: 'error' })
                }
            })
        } catch (error) {
            setFormState(prev => {
                return {
                    ...prev,
                    notificationOpen: true,
                    formSubmitted: true,
                    mode: 'edit',
                    notificationMessage: t.errorMessage,
                    loading: false,
                    notificationType: 'error'
                }
            })
        }
    }

    return <>
        <Grid item xs={6}>
            {
                loading.aadharCardFront && <SkeletonLoader rowCount={1} height='100%' />
            }
            {
                !loading.aadharCardFront && <KYCCards onChangeHandler={onChangeHandler} title='Aadhar Card' subTitle='Front' docUrl={getValues('aadharCard.frontUrl') ? `${BASE_IMG_URL}/${getValues('aadharCard.frontUrl')}` : ''} noDocUrl={noAadharCardFront} />
            }
        </Grid>
        <Grid item xs={6}>
            {
                loading.aadharCardBack && <SkeletonLoader rowCount={1} height='100%' />
            }
            {
                !loading.aadharCardBack && <KYCCards onChangeHandler={onChangeHandler} title='Aadhar Card' subTitle='Back' docUrl={getValues('aadharCard.backUrl') ? `${BASE_IMG_URL}/${getValues('aadharCard.backUrl')}` : ''} noDocUrl={noAadharCardBank} />
            }
        </Grid>
        <Grid item xs={6}>
            {
                loading.pan && <SkeletonLoader rowCount={1} height='100%' />
            }
            {
                !loading.pan && <KYCCards onChangeHandler={onChangeHandler} title='PAN Card' docUrl={getValues('panCardUrl') ? `${BASE_IMG_URL}/${getValues('panCardUrl')}` : ''} noDocUrl={noPanCard} />
            }
        </Grid>
        <Grid item xs={6}>
            {
                loading.signature && <SkeletonLoader rowCount={1} height='100%' />
            }
            {
                !loading.signature && <KYCCards onChangeHandler={onChangeHandler} title='Signature' docUrl={getValues('signatureUrl') ? `${BASE_IMG_URL}/${getValues('signatureUrl')}` : ''} noDocUrl={noSignature} />
            }
        </Grid>
        <Grid item xs={6}>
            {
                loading.bankStatement && <SkeletonLoader rowCount={1} height='100%' />
            }
            {
                !loading.bankStatement && <KYCCards onChangeHandler={onChangeHandler} title='Bank Statement' docUrl={getValues('bankStatementUrl') ? `${BASE_IMG_URL}/${getValues('bankStatementUrl')}` : ''} noDocUrl={noBankStatement} />
            }
        </Grid>
    </>
}