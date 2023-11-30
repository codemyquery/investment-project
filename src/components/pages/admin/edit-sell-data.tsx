import { Checkbox, FormControl, Grid, InputAdornment, MenuItem, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminEditPageTemplate } from "../../templates";
import { ControlSelect, ControlText, Notifications } from "../../molecules";
import { Sell, useHookForm } from "../../../services";
import { DefaultFormState, FormModes, FormState } from "../../../types";
import { SellFormDataAdmin } from "../../../types/sell";
import { t } from "../../../utils";

const defaultValues: SellFormDataAdmin = {
    id: "",
    customerName: "",
    planName: "",
    planAmount: "",
    purchaseStatus: "",
    orderDate: ""
}
export const EditPlanSell = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = React.useState<FormState>({ ...DefaultFormState });
    const { itemID } = useParams();
    const {
        control,
        handleSubmit,
        formState: { errors, isDirty },
        setValue,
        reset,
        watch,
        getValues
    } = useHookForm<SellFormDataAdmin>({ defaultValues })

    const onSubmitPreCheck = async () => {
        onSubmit();
    }

    useEffect(() => {
        let mode: FormModes = 'init';
        const init = async () => {
            if (itemID) {
                mode = 'edit';
                const abortController = new AbortController();
                const data = await Sell.fetchSaleData(itemID, abortController);
                reset(data)
            } else {
                mode = 'create';
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
                const itemID = getValues('id');
                const abortController = new AbortController();
                const data = await Sell.fetchSaleData(itemID, abortController);
                reset(data)
                setFormState(prev => ({
                    ...prev,
                    formSubmitted: false,
                }))
            }
            init();
        }
    }, [formState])

    const onSubmitItem = async (data: SellFormDataAdmin) => {
        setFormState(prev => ({ ...prev, loading: true }))
        const abortController = new AbortController();
        try {
            const response = await Sell.updateSellData(data, abortController)
            setFormState(prev => {
                return {
                    ...prev,
                    notificationOpen: true,
                    formSubmitted: true,
                    ...(response.status ? { mode: 'edit' } : {}),
                    ...(response.status ? { notificationMessage: t.successMessage } : { notificationType: t.errorMessage }),
                    loading: false,
                    ...(response.status ? { notificationType: 'success' } : { notificationType: 'error' }),
                }
            });
            if (formState.mode === 'create') {
                navigate(`../../edit/vendors/${data.id}`)
            }
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

    const onSubmit = () => handleSubmit(onSubmitItem)();

    const onFormCancel = () => {
        navigate('/admin/plan-sell');
    }

    return (
        <>
            <AdminEditPageTemplate
                id="edit-add-Vendor"
                loading={false}
                onFormSubmit={onSubmit}
                onFormCancel={onFormCancel}
                submitDisabled={!isDirty}
                title={"Edit: Plan Sell"}
            >
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <ControlText
                            control={control}
                            label="Customer Name"
                            name="customerName"
                            helperText=""
                            rules={{
                                required: true
                            }}
                            isDisabled={true}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ControlText
                            control={control}
                            label="Plan Name"
                            name="planName"
                            helperText=""
                            rules={{
                                required: true
                            }}
                            isDisabled={true}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ControlText
                            control={control}
                            label="Plan Amount"
                            name="planAmount"
                            helperText=""
                            rules={{
                                required: true
                            }}
                            isDisabled={true}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ControlText
                            control={control}
                            label="Order Date"
                            name="orderDate"
                            helperText=""
                            rules={{
                                required: true
                            }}
                            isDisabled={true}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ControlSelect
                            control={control}
                            label="Purchase Status"
                            labelId="purchaseStatus"
                            name="purchaseStatus"
                            helperText={""}
                            defaultValue={''}
                            rules={{ required: true }}
                        >
                            {
                                ["YES", "NO"].map((purchaseStatus, index) => {
                                    return <MenuItem key={index} value={purchaseStatus}>{purchaseStatus}</MenuItem>
                                })
                            }
                        </ControlSelect>
                    </Grid>
                </Grid>
                <Notifications
                    open={formState.notificationOpen}
                    message={formState.notificationMessage}
                    onClose={() => { setFormState(prev => { return { ...prev, notificationOpen: false, notificationType: 'error', notificationMessage: '' } }) }}
                    severity={formState.notificationType}
                />
            </AdminEditPageTemplate >
        </>
    )
}