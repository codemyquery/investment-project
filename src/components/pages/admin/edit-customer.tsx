import { Checkbox, FormControl, Grid, InputAdornment, TextField } from "@mui/material";
import React, { ChangeEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminEditPageTemplate } from "../../templates";
import { DefaultFormState, FormModes, FormState, UserKYCFormData } from "../../../types";
import { nanoid } from "nanoid";
import { Users, useHookForm } from "../../../services";
import { ControlNumber, ControlText } from "../../molecules";

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

    useEffect(()=>{
        if(formState.mode === 'edit' && formState.formSubmitted){
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

    const closeNotification = () => {
        setFormState(prev => {
            return {
                ...prev,
                notificationOpen: false,
                notificationType: 'error',
                notificationMessage: ''
            }
        })
    }

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
                    <Grid item xs={12}>
                        <ControlText
                            control={control}
                            label="Name"
                            name="name"
                            helperText=""
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ControlText
                            control={control}
                            label="Pan Card No"
                            name="pancardNumber"
                            helperText=""
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ControlNumber
                            control={control}
                            label="Aadhar Card No"
                            name="aadharCardNumber"
                            helperText=""
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ControlText
                            control={control}
                            label="Email"
                            name="email"
                            helperText=""
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ControlText
                            control={control}
                            label="Mobile"
                            name="mobile"
                            helperText=""
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ControlText
                            control={control}
                            label="Date Of Birth"
                            name="dob"
                            helperText=""
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ControlText
                            control={control}
                            label="Address"
                            name="address"
                            helperText=""
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ControlText
                            control={control}
                            label="Bank Name"
                            name="bankName"
                            helperText=""
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ControlText
                            control={control}
                            label="IFSC Code"
                            name="ifsc"
                            helperText=""
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ControlText
                            control={control}
                            label="Bank Acc No."
                            name="bankAccNo"
                            helperText=""
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ControlText
                            control={control}
                            label="Confirm Bank Acc No."
                            name="confBankAccNo"
                            helperText=""
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ControlText
                            control={control}
                            label="Nominee Name"
                            name="nomineeName"
                            helperText=""
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ControlText
                            control={control}
                            label="Nominee Relation"
                            name="nomineerelation"
                            helperText=""
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ControlText
                            control={control}
                            label="Nominee DOB"
                            name="nomineeDob"
                            helperText=""
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ControlText
                            control={control}
                            label="Nominee Address"
                            name="nomineeAddress"
                            helperText=""
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <input type="file" onChange={(e) => {
                            const files = (e.target as HTMLInputElement).files;
                            if (files) {
                                setValue('aadharCard.front', files[0]);
                            }
                        }} />
                        <img src="https://www.fisdom.com/wp-content/uploads/2023/06/pvc-aadhaar-card-1.webp" width={'100%'} height={'400px'} alt="Aadhar Card Front" />
                    </Grid>
                    <Grid item xs={6}>
                        <input type="file" onChange={(e) => {
                            const files = (e.target as HTMLInputElement).files;
                            if (files) {
                                setValue('aadharCard.back', files[0]);
                            }
                        }} />

                        <img src="https://www.fisdom.com/wp-content/uploads/2023/06/pvc-aadhaar-card-1.webp" width={'100%'} height={'400px'} alt="Aadhar Card Bank" />
                    </Grid>
                    <Grid item xs={6}>
                        <input type="file" onChange={(e) => {
                            const files = (e.target as HTMLInputElement).files;
                            if (files) {
                                setValue('panCard', files[0]);
                            }
                        }} />

                        <img src="https://scontent.fknu1-1.fna.fbcdn.net/v/t1.6435-9/207056686_4175559985870132_121310395359847418_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=cWZVIfdZnE8AX9AxIsx&_nc_ht=scontent.fknu1-1.fna&oh=00_AfDT-_UT1X4b1VDQ-cEbu6_kmH4-7qoYpAJ_7owiqxUh0Q&oe=658A3C47" width={'100%'} height={'400px'} alt="PAN Card" />
                    </Grid>
                    <Grid item xs={6}>
                        <input type="file" onChange={(e) => {
                            const files = (e.target as HTMLInputElement).files;
                            if (files) {
                                setValue('signature', files[0]);
                            }
                        }} />

                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Wonho-Signature.svg" width={'100%'} height={'400px'} alt="Signature Card" />
                    </Grid>
                    <Grid item xs={6}>
                        <input type="file" onChange={(e) => {
                            const files = (e.target as HTMLInputElement).files;
                            if (files) {
                                setValue('BankStatement', files[0]);
                            }
                        }} />

                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/BankStatementChequing.png" width={'100%'} height={'400px'} alt="Bank Statement" />
                    </Grid>
                </Grid>
            </AdminEditPageTemplate >
        </>
    )
}