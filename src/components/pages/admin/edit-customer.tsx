import { Checkbox, FormControl, Grid, InputAdornment, TextField } from "@mui/material";
import React, { useEffect } from "react";
/* import { useHookForm, Vendor } from "../../services"; */
import { useNavigate, useParams } from "react-router-dom";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import { AdminEditPageTemplate } from "../../templates";
/* import { nanoid } from "nanoid";
import { VendorServerData } from "../../types/vendor";
import { UseFormReset } from "react-hook-form"; */

/* const defaultValues: VendorFormData = {
    id: '',
    address: '',
    email: '',
    gstNumber: '',
    mobile: '',
    panNumber: '',
    vendor: ''
} */

export const EditCustomers = () => {
    const navigate = useNavigate();
    /* const [formState, setFormState] = React.useState<FormState>({ ...DefaultFormState });
    const { itemID } = useParams();
    const {
        control,
        handleSubmit,
        formState: { errors, isDirty },
        setValue,
        reset,
        watch,
        getValues
    } = useHookForm<VendorFormData>({ defaultValues }) */
    /* const vendorName = watch('vendor'); */

    /* const onSubmitPreCheck = async () => {
        onSubmit();
    } */

    /* useEffect(() => {
        let mode: FormModes = 'init';
        const init = async () => {
            if (itemID) {
                mode = 'edit';
                const abortController = new AbortController();
                const data = await Vendor.getVendor(itemID, abortController);
                await InitVendorForm({ data, reset });
            } else {
                mode = 'create';
                setValue('id', nanoid(6));
            }
            setFormState(prev => ({
                ...prev,
                mode,
                loading: false,
                formSubmitted: false
            }))
        };
        init();
        
    }, []); */

    /* useEffect(()=>{
        if(formState.mode === 'edit' && formState.formSubmitted){
            const init = async () => {
                const itemID = getValues('id');
                const abortController = new AbortController();
                const data = await Vendor.getVendor(itemID, abortController);
                await InitVendorForm({ data, reset });
                setFormState(prev => ({
                    ...prev, 
                    formSubmitted: false,
                }))
            }
            init();
        }
    }, [formState]) */

    /* const onSubmitItem = async (data: VendorFormData) => {
        setFormState(prev => ({ ...prev, loading: true }))
        const abortController = new AbortController();
        try {
            const response = formState.mode === 'create' ? await Vendor.createVendorRecord(data, abortController) : await Vendor.updateVendorRecord(data, abortController);
            setFormState(prev => {
                return {
                    ...prev,
                    notificationOpen: true,
                    formSubmitted: true,
                    ...(response.status ? { mode: 'edit' } : {}),
                    ...(response.status ? { notificationMessage: translation.successMessage } : { notificationType: translation.errorMessage }),
                    loading: false,
                    ...(response.status ? { notificationType: 'success' } : { notificationType: 'error' }),
                }
            });
            if(formState.mode === 'create'){
                navigate(`../../edit/vendors/${data.id}`)
            }
        } catch (error) {
            setFormState(prev => {
                return {
                    ...prev,
                    notificationOpen: true,
                    formSubmitted: true,
                    mode: 'edit',
                    notificationMessage: translation.errorMessage,
                    reload: new Date(),
                    loading: false,
                    notificationType: 'error'
                }
            })
        }
    } */

    /* const onSubmit = () => handleSubmit(onSubmitItem)(); */

    const closeNotification = () => {
        /* setFormState(prev => {
            return {
                ...prev,
                notificationOpen: false,
                notificationType: 'error',
                notificationMessage: ''
            }
        }) */
    }

    const onFormCancel = () => {
        navigate('/admin/customers');
    }

    return (
        <>
            <AdminEditPageTemplate
                id="edit-add-Vendor"
                loading={false}
                onFormSubmit={() => { }}
                onFormCancel={onFormCancel}
                submitDisabled={!false}
                title={"Edit: 21312"}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            value={'Ashutosh Singh'}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="pan-card"
                            label="Pan Card"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="aadhar-card"
                            label="Aadhar Card"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="mobile"
                            label="Mobile"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="dob"
                            label="Date of Birth"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="address"
                            label="Address"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="bankDetails"
                            label="Bank Details"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="ifsc"
                            label="IFSC Code"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="bankAccountNumber"
                            label="Bank Account Number"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="confirmBankAccountNumber"
                            label="Confirm Bank Account Number"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="nomineeName"
                            label="Nominee Name"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="realtion"
                            label="Relation"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="dateOfBirth"
                            label="Date of Birth"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="nomineeAddress"
                            label="Nominee Address"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <img src="https://www.fisdom.com/wp-content/uploads/2023/06/pvc-aadhaar-card-1.webp" width={'100%'} height={'400px'} alt="Aadhar Card Front" />
                    </Grid>
                    <Grid item xs={6}>
                        <img src="https://www.fisdom.com/wp-content/uploads/2023/06/pvc-aadhaar-card-1.webp" width={'100%'} height={'400px'} alt="Aadhar Card Bank" />
                    </Grid>
                    <Grid item xs={6}>
                        <img src="https://scontent.fknu1-1.fna.fbcdn.net/v/t1.6435-9/207056686_4175559985870132_121310395359847418_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=cWZVIfdZnE8AX9AxIsx&_nc_ht=scontent.fknu1-1.fna&oh=00_AfDT-_UT1X4b1VDQ-cEbu6_kmH4-7qoYpAJ_7owiqxUh0Q&oe=658A3C47" width={'100%'} height={'400px'} alt="PAN Card" />
                    </Grid>
                    <Grid item xs={6}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Wonho-Signature.svg" width={'100%'} height={'400px'} alt="Signature Card" />
                    </Grid>
                    <Grid item xs={6}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/BankStatementChequing.png" width={'100%'} height={'400px'} alt="Bank Statement" />
                    </Grid>
                </Grid>
            </AdminEditPageTemplate >
        </>
    )
}