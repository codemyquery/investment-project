import { Checkbox, FormControl, Grid, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminEditPageTemplate } from "../../templates";
import { DefaultFormState, EmployeeData, FormModes, FormState } from "../../../types";
import { Employees, useHookForm } from "../../../services";
import { nanoid } from "nanoid";
import { UseFormReset } from "react-hook-form";
import { ControlText } from "../../molecules";
import { t } from "../../../utils";

const defaultValues: EmployeeData = {
    id: "",
    empName: "",
    empMobileNumber: "",
    empSalesCode: "",
    totalSaleAmount: "",
    totalCustomerCount: ""
}

export const EditEmployee = () => {
    const navigate = useNavigate();
    const abortController = new AbortController();

    const {
        control,
        handleSubmit,
        formState: { isDirty },
        setValue,
        reset,
        getValues
    } = useHookForm<EmployeeData>({ defaultValues })

    const [formState, setFormState] = useState<FormState>({ ...DefaultFormState });
    const { itemID } = useParams();

    useEffect(() => {
        let mode: FormModes = 'init';
        const init = async () => {
            if (itemID) {
                mode = 'edit';
                const data = await Employees.fetchEmployes(itemID);
                await InitEmployeeForm({ data, reset });
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
    }, []);

    useEffect(() => {
        if (formState.mode === 'edit' && formState.formSubmitted) {
            const init = async () => {
                const itemID = getValues('id');
                const abortController = new AbortController();
                const data = await Employees.fetchEmployes(itemID, abortController);
                await InitEmployeeForm({ data, reset });
                setFormState(prev => ({
                    ...prev,
                    formSubmitted: false,
                }))
            }
            init();
        }
    }, [formState])

    const onSubmitItem = async (data: EmployeeData) => {
        setFormState(prev => ({ ...prev, loading: true }))
        try {
            /* const response = formState.mode === 'create' ? await Vendor.createVendorRecord(data, abortController) : await Vendor.updateVendorRecord(data, abortController);
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
            } */
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
        navigate('/admin/employee');
        abortController.abort();
    }

    return (
        <>
            <AdminEditPageTemplate
                id="edit-add-Vendor"
                loading={false}
                onFormSubmit={onSubmit}
                onFormCancel={onFormCancel}
                submitDisabled={isDirty}
                title={"Edit: Employee"}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <ControlText
                            control={control}
                            name={'id'}
                            helperText=""
                            label="ID"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <ControlText
                            control={control}
                            name={'empName'}
                            helperText=""
                            label="Employee Name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <ControlText
                            control={control}
                            name={'empSalesCode'}
                            helperText=""
                            label="Sales Code"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <ControlText
                            control={control}
                            name={'empMobileNumber'}
                            helperText=""
                            label="Mobile No."
                        />
                    </Grid>
                </Grid>
            </AdminEditPageTemplate >
        </>
    )
}

interface InitEmployeeFormProps {
    data: EmployeeData;
    reset: UseFormReset<EmployeeData>
}

const InitEmployeeForm = async ({
    data,
    reset
}: InitEmployeeFormProps) => {
    reset({

    });
}