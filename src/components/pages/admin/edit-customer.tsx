import { Checkbox, FormControl, Grid, InputAdornment, TextField } from "@mui/material";
import React, { ChangeEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminEditPageTemplate } from "../../templates";
import { DefaultFormState, FormModes, FormState, UserKYCFormData } from "../../../types";
import { nanoid } from "nanoid";
import { Users, useHookForm } from "../../../services";
import { callFileUploadService } from "../../../utils/service";
import { WS_BASE_URL } from "../../../utils";
import { UserPersonalDetails, UserBankDetails, UserNomineeDetails, UserUploadDocuments } from "../../organism";

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
        front: null
    },
    panCard: null,
    signature: null,
    BankStatement: null
}

export const EditCustomers = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = React.useState<FormState>({ ...DefaultFormState });
    const { itemID } = useParams();
    const {
        control,
        handleSubmit,
        formState: { errors, isDirty },
        setValue,
        reset
    } = useHookForm<UserKYCFormData>({ defaultValues })

    const onSubmitPreCheck = async (data: UserKYCFormData) => {
        const response = callFileUploadService({
            
            userToken: 'asdasdasd',
            file: [data.BankStatement!],
            url: `${WS_BASE_URL}/routes.php?page=upload&actions=uploadKyc`
        })
        onSubmitItem(data);
}

useEffect(() => {
    let mode: FormModes = 'init';
    const init = async () => {
        if (itemID) {
            mode = 'edit';
            const abortController = new AbortController();
            const data = await Users.fetchKycDetails(itemID, abortController);
            reset({
                id: itemID,
                name: data.Customer_name,
                pancardNumber: data.Panno,
                aadharCardNumber: data.Adhaarno,
                email: data.email,
                mobile: data.mobile,
                dob: data.Customer_dob,
                address: data.address,
                bankName: data.Bank_name,
                ifsc: data.Bank_ifsc,
                bankAccNo: data.Bank_Acc_no,
                confBankAccNo: data.confBankAccNo,
                nomineeName: data.Nominee_name,
                nomineerelation: data.Nominee_relation,
                nomineeDob: data.Nominee_dob,
                nomineeAddress: data.Nominee_address,

            })
        }
        setFormState(prev => ({
            ...prev,
            mode,
            loading: false,
            formSubmitted: false
        }))
    };
    init();

}, []);

useEffect(() => {
    if (formState.mode === 'edit' && formState.formSubmitted) {
        const init = async () => {
            /* const itemID = getValues('id');
            const abortController = new AbortController();
            const data = await Vendor.getVendor(itemID, abortController);
            await InitVendorForm({ data, reset });
            setFormState(prev => ({
                ...prev, 
                formSubmitted: false,
            })) */
        }
        init();
    }
}, [formState])

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
                ...(response.status ? { notificationMessage: 'translation.successMessage' } : { notificationType: 'translation.errorMessage' }),
                loading: false,
                ...(response.status ? { notificationType: 'success' } : { notificationType: 'error' }),
            }
        });
    } catch (error) {
        setFormState(prev => {
            return {
                ...prev,
                notificationOpen: true,
                formSubmitted: true,
                mode: 'edit',
                notificationMessage: 'translation.errorMessage',
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
                <UserPersonalDetails control={control} />
                <UserBankDetails control={control} />
                <UserNomineeDetails control={control} />
                <UserUploadDocuments control={control} setValue={setValue} />
            </Grid>
        </AdminEditPageTemplate >
    </>
)
}