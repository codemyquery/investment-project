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

export const EditPlanDetails = () => {
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
        navigate('/admin/plan-details');
    }

    return (
        <>
            <AdminEditPageTemplate
                id="edit-add-Vendor"
                loading={false}
                onFormSubmit={() => { }}
                onFormCancel={onFormCancel}
                submitDisabled={!false}
                title={"Edit: Plan"}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="planName"
                            label="Plan Name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="sumAssured"
                            label="Sum Assured"
                            autoFocus
                        />
                        <br />
                        <FormControl fullWidth>
                            <div>
                                Policy Term :
                                <Checkbox />10
                                <Checkbox />20
                                <Checkbox />30
                            </div>
                        </FormControl>
                        <br />
                        <FormControl fullWidth>
                            <div>
                                Premium Paying Term :
                                <Checkbox />10
                                <Checkbox />20
                                <Checkbox />30
                            </div>
                        </FormControl>
                        <br />
                        <FormControl fullWidth>
                            <div>
                                Benefit Payout Frequency :
                                <Checkbox />Weekly
                                <Checkbox />Monthly
                                <Checkbox />Yearly
                            </div>
                        </FormControl>
                        <br />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="totalPaidPremium"
                            label="Total Paid Premium "
                            name="totalPaidPremium"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            margin="normal"
                            fullWidth
                            name="totalBenefitTillMatuarity"
                            label="Total Benefit Till Matuarity"
                            id="totalBenefitTillMatuarity"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            margin="normal"
                            type="file"
                            fullWidth
                            name="PlanDocumentPdf"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            label="Plan Pdf Doc"
                            id="PlanDocumentPdf"
                        />
                    </Grid>
                </Grid>
            </AdminEditPageTemplate >
        </>
    )
}