import * as React from 'react';
import { Button, Card, CardHeader, CardMedia, Grid, IconButton, Typography } from "@mui/material"
import { Control, UseFormGetValues, UseFormSetValue } from "react-hook-form"
import { UserKYCFormData } from "../../types"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { KYCCards } from '../molecules';
import { noAadharCardBank, noAadharCardFront, noBankStatement, noPanCard, noSignature } from '../../assets';
import { data } from 'jquery';
import { WS_BASE_URL } from '../../utils';
import { callFileUploadService } from '../../utils/service';
interface UserUploadDocumentsProps {
    control: Control<UserKYCFormData, any>
    setValue: UseFormSetValue<UserKYCFormData>
    getValues: UseFormGetValues<UserKYCFormData>
}

export const UserUploadDocuments = ({
    control,
    setValue,
    getValues
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
        let response = null;
        switch (option) {
            case 'Aadhar Card Front':
                response = await callFileUploadService({
                    userToken: 'asdasdasd',
                    file: [getValues('aadharCard.front')!],
                    url: `${WS_BASE_URL}/virtual-property/api/routes.php?page=upload&actions=uploadKyc`
                })
                setValue('aadharCard.frontUrl', response.url);
                break;
            case 'Aadhar Card Back':
                response = await callFileUploadService({
                    userToken: 'asdasdasd',
                    file: [getValues('aadharCard.back')!],
                    url: `${WS_BASE_URL}/virtual-property/api/routes.php?page=upload&actions=uploadKyc`
                })
                setValue('aadharCard.backUrl', response.url);
                break;
            case 'PAN Card ':
                response = await callFileUploadService({
                    userToken: 'asdasdasd',
                    file: [getValues('panCard')!],
                    url: `${WS_BASE_URL}/virtual-property/api/routes.php?page=upload&actions=uploadKyc`
                })
                setValue('panCardUrl', response.url);
                break;
            case 'Bank Statement ':
                response = await callFileUploadService({
                    userToken: 'asdasdasd',
                    file: [getValues('bankStatement')!],
                    url: `${WS_BASE_URL}/virtual-property/api/routes.php?page=upload&actions=uploadKyc`
                })
                setValue('bankStatementUrl', response.url);
                break;
            case 'Signature ':
                response = await callFileUploadService({
                    userToken: 'asdasdasd',
                    file: [getValues('signature')!],
                    url: `${WS_BASE_URL}/virtual-property/api/routes.php?page=upload&actions=uploadKyc`
                })
                setValue('signatureUrl', response.url);
                break;
        }
    }

    return <>
        <Grid item xs={6}>
            <KYCCards onChangeHandler={onChangeHandler} onUploadHandler={onUploadHandler} title='Aadhar Card' subTitle='Front' docUrl={`${WS_BASE_URL}/virtual-property/${getValues('aadharCard.frontUrl')}`} noDocUrl={noAadharCardFront} />
        </Grid>
        <Grid item xs={6}>
            <KYCCards onChangeHandler={onChangeHandler} onUploadHandler={onUploadHandler} title='Aadhar Card' subTitle='Back' docUrl={`${WS_BASE_URL}/virtual-property/${getValues('aadharCard.backUrl')}`} noDocUrl={noAadharCardBank} />
        </Grid>
        <Grid item xs={6}>
            <KYCCards onChangeHandler={onChangeHandler} onUploadHandler={onUploadHandler} title='PAN Card' docUrl={`${WS_BASE_URL}/virtual-property/${getValues('panCardUrl')}`} noDocUrl={noPanCard} />
        </Grid>
        <Grid item xs={6}>
            <KYCCards onChangeHandler={onChangeHandler} onUploadHandler={onUploadHandler} title='Signature' docUrl={`${WS_BASE_URL}/virtual-property/${getValues('signatureUrl')}`} noDocUrl={noSignature} />
        </Grid>
        <Grid item xs={6}>
            <KYCCards onChangeHandler={onChangeHandler} onUploadHandler={onUploadHandler} title='Bank Statement' docUrl={`${WS_BASE_URL}/virtual-property/${getValues('bankStatementUrl')}`} noDocUrl={noBankStatement} />
        </Grid>
    </>
}