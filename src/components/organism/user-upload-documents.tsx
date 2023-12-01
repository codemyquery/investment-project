import * as React from 'react';
import { Button, Card, CardHeader, CardMedia, Grid, IconButton, Typography } from "@mui/material"
import { Control, FieldErrors, UseFormGetValues, UseFormSetValue } from "react-hook-form"
import { FormState, UserKYCFormData } from "../../types"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { KYCCards } from '../molecules';
import { noAadharCardBank, noAadharCardFront, noBankStatement, noPanCard, noSignature } from '../../assets';
import { data } from 'jquery';
import { WS_BASE_URL, t } from '../../utils';
import { callFileUploadService } from '../../utils/service';
import { SetStateAction } from 'react';
interface UserUploadDocumentsProps {
    control: Control<UserKYCFormData, any>
    setValue: UseFormSetValue<UserKYCFormData>
    getValues: UseFormGetValues<UserKYCFormData>
    setFormState: (value: SetStateAction<FormState>) => void,
    errors: FieldErrors<UserKYCFormData>
}

export const UserUploadDocuments = ({
    control,
    setValue,
    getValues,
    setFormState,
    errors
}: UserUploadDocumentsProps) => {

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
    };

    const onUploadHandler = async (option: string) => {
        try {
            let response: any = null;
            switch (option) {
                case 'Aadhar Card Front':
                    response = await callFileUploadService({
                        userToken: 'asdasdasd',
                        file: [getValues('aadharCard.front')!],
                        url: `${WS_BASE_URL}?page=upload&actions=uploadKyc`
                    })
                    setValue('aadharCard.frontUrl', response.url);
                    break;
                case 'Aadhar Card Back':
                    response = await callFileUploadService({
                        userToken: 'asdasdasd',
                        file: [getValues('aadharCard.back')!],
                        url: `${WS_BASE_URL}?page=upload&actions=uploadKyc`
                    })
                    setValue('aadharCard.backUrl', response.url);
                    break;
                case 'PAN Card ':
                    response = await callFileUploadService({
                        userToken: 'asdasdasd',
                        file: [getValues('panCard')!],
                        url: `${WS_BASE_URL}?page=upload&actions=uploadKyc`
                    })
                    setValue('panCardUrl', response.url);
                    break;
                case 'Bank Statement ':
                    response = await callFileUploadService({
                        userToken: 'asdasdasd',
                        file: [getValues('bankStatement')!],
                        url: `${WS_BASE_URL}?page=upload&actions=uploadKyc`
                    })
                    setValue('bankStatementUrl', response.url);
                    break;
                case 'Signature ':
                    response = await callFileUploadService({
                        userToken: 'asdasdasd',
                        file: [getValues('signature')!],
                        url: `${WS_BASE_URL}?page=upload&actions=uploadKyc`
                    })
                    setValue('signatureUrl', response.url);
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
            <KYCCards onChangeHandler={onChangeHandler} onUploadHandler={onUploadHandler} title='Aadhar Card' subTitle='Front' docUrl={getValues('aadharCard.frontUrl') ? `${WS_BASE_URL}/virtual-property/${getValues('aadharCard.frontUrl')}` : ''} noDocUrl={noAadharCardFront} />
        </Grid>
        <Grid item xs={6}>
            <KYCCards onChangeHandler={onChangeHandler} onUploadHandler={onUploadHandler} title='Aadhar Card' subTitle='Back' docUrl={getValues('aadharCard.backUrl') ? `${WS_BASE_URL}/virtual-property/${getValues('aadharCard.backUrl')}` : ''} noDocUrl={noAadharCardBank} />
        </Grid>
        <Grid item xs={6}>
            <KYCCards onChangeHandler={onChangeHandler} onUploadHandler={onUploadHandler} title='PAN Card' docUrl={getValues('panCardUrl') ? `${WS_BASE_URL}/virtual-property/${getValues('panCardUrl')}` : ''} noDocUrl={noPanCard} />
        </Grid>
        <Grid item xs={6}>
            <KYCCards onChangeHandler={onChangeHandler} onUploadHandler={onUploadHandler} title='Signature' docUrl={getValues('signatureUrl') ? `${WS_BASE_URL}/virtual-property/${getValues('signatureUrl')}` : ''} noDocUrl={noSignature} />
        </Grid>
        <Grid item xs={6}>
            <KYCCards onChangeHandler={onChangeHandler} onUploadHandler={onUploadHandler} title='Bank Statement' docUrl={getValues('bankStatementUrl') ? `${WS_BASE_URL}/virtual-property/${getValues('bankStatementUrl')}` : ''} noDocUrl={noBankStatement} />
        </Grid>
    </>
}