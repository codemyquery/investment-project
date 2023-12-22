import { Checkbox, FormControl, Grid, InputAdornment, TextField } from "@mui/material";
import React, { ChangeEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminEditPageTemplate } from "../../templates";
import { DefaultFormState, FormModes, FormState, UserKYCFormData } from "../../../types";
import { nanoid } from "nanoid";
import { Users, useHookForm } from "../../../services";
import { callFileUploadService } from "../../../utils/service";
import { WS_BASE_URL, t } from "../../../utils";
import { UserPersonalDetails, UserBankDetails, UserNomineeDetails, UserUploadDocuments } from "../../organism";
import { Notifications } from "../../molecules";
import { initCKYCForm } from "../public/user-profile/profile";
import { useAuth } from "../../../providers";

const defaultValues: UserKYCFormData = {
    id: "",
    name: "",
    pancardNumber: "",
    aadharCardNumber: "",
    email: "",
    mobile: "",
    dob: "",
    address: "",
    bankName: "",
    ifsc: "",
    bankAccNo: "",
    confBankAccNo: "",
    nomineeName: "",
    nomineerelation: "",
    nomineeDob: "",
    nomineeAddress: "",
    aadharCard: {
        back: null,
        front: null,
        backUrl: "",
        frontUrl: ""
    },
    panCard: null,
    signature: null,
    bankStatement: null,
    panCardUrl: "",
    signatureUrl: "",
    bankStatementUrl: ""
}

export const EditCustomers = () => {
    const navigate = useNavigate();
    const { userInfo } = useAuth();
    const [formState, setFormState] = React.useState<FormState>({ ...DefaultFormState });
    const { itemID } = useParams();
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
        getValues
    } = useHookForm<UserKYCFormData>({ defaultValues })

    const onSubmitPreCheck = async (data: UserKYCFormData) => {
        onSubmitItem(data);
    }

    useEffect(() => {
        let mode: FormModes = 'init';
        const init = async () => {
            if (itemID) {
                mode = 'edit';
                const abortController = new AbortController();
                const data = await Users.fetchKycDetails(itemID, abortController);
                await initCKYCForm({ data: data, reset: reset, userId: userInfo!.id })
            }
            setFormState(prev => ({
                ...prev,
                mode,
                loading: false,
                formSubmitted: false
            }))
        };
        init();
    }, [formState.reload]);

    const onSubmitItem = async (data: UserKYCFormData) => {
        setFormState(prev => ({ ...prev, loading: true }))
        const abortController = new AbortController();
        console.log(data)
        try {
            const response = await Users.updateKYCDetails(data, abortController);
            setFormState(prev => {
                return {
                    ...prev,
                    notificationOpen: true,
                    formSubmitted: true,
                    ...(response.status ? { mode: 'edit' } : {}),
                    ...(response.status ? { notificationMessage: t.successMessage } : { notificationType: t.errorMessage }),
                    loading: false,
                    ...(response.status ? { notificationType: 'success' } : { notificationType: 'error' }),
                    reload: new Date()
                }
            });
        } catch (error) {
            setFormState(prev => {
                return {
                    ...prev,
                    notificationOpen: true,
                    formSubmitted: true,
                    mode: 'edit',
                    notificationMessage: t.errorMessage,
                    reload: new Date(),
                    loading: false,
                    notificationType: 'error'
                }
            })
        }
    }

    const onSubmit = () => handleSubmit(onSubmitPreCheck)();

    const onFormCancel = () => {
        navigate('/admin/customers');
    }

    return (
        <>
            <AdminEditPageTemplate
                id="edit-add-Vendor"
                loading={false}
                onFormSubmit={onSubmit}
                onFormCancel={onFormCancel}
                submitDisabled={false}
                title={"Edit: 21312"}
            >
                <Grid container spacing={3}>
                    <UserPersonalDetails errors={errors} control={control} />
                    <UserBankDetails errors={errors} control={control} />
                    <UserNomineeDetails errors={errors} control={control} />
                    <UserUploadDocuments showDownloadoptions={true} errors={errors} setFormState={setFormState} control={control} setValue={setValue} getValues={getValues} />
                </Grid>
            </AdminEditPageTemplate >
            <Notifications
                open={formState.notificationOpen}
                message={formState.notificationMessage}
                onClose={() => { setFormState(prev => { return { ...prev, notificationOpen: false, notificationType: 'error', notificationMessage: '' } }) }}
                severity={formState.notificationType}
            />
        </>
    )
}