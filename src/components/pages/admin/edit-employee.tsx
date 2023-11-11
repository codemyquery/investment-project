import { Checkbox, FormControl, Grid, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminEditPageTemplate } from "../../templates";
import { DefaultFormState, EmployeeFormData, FormModes, FormState } from "../../../types";
import { Employees, useHookForm } from "../../../services";
import { nanoid } from "nanoid";
import { UseFormReset } from "react-hook-form";
import { ControlNumber, ControlText, Notifications } from "../../molecules";
import { t } from "../../../utils";

const defaultValues: EmployeeFormData = {
    id: "",
    employeeName: "",
    employeeCode: "",
    mobile: "",
    email: "",
    designation: "",
}

export const EditEmployee = () => {
    const navigate = useNavigate();
    const abortController = new AbortController();

    const {
        control,
        handleSubmit,
        formState: {  },
        setValue,
        reset,
        getValues
    } = useHookForm<EmployeeFormData>({ defaultValues })

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
    }, [formState.formSubmitted])

    const onSubmitItem = async (data: EmployeeFormData) => {
        setFormState(prev => ({ ...prev, loading: true }))
        try {
            const response = formState.mode === 'create' ? 
            await Employees.createEmployeeRecord(data, abortController) 
            : 
            await Employees.updateEmployeeRecord(data, abortController);
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
            if(formState.mode === 'create'){
                navigate(`/admin/edit-employee/${data.employeeCode}`)
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
        navigate('/admin/employee');
        abortController.abort();
    }

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

    return (
        <>
            <AdminEditPageTemplate
                id="edit-add-Vendor"
                loading={false}
                onFormSubmit={onSubmit}
                onFormCancel={onFormCancel}
                submitDisabled={false}
                title={"Edit: Employee"}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <ControlText
                            control={control}
                            name={'employeeName'}
                            helperText=""
                            label="Employee Name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <ControlText
                            control={control}
                            name={'employeeCode'}
                            helperText=""
                            label="Employee Code"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <ControlText
                            control={control}
                            name={'email'}
                            helperText=""
                            label="Email"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <ControlNumber
                            control={control}
                            name={'mobile'}
                            helperText=""
                            label="Mobile No."
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <ControlText
                            control={control}
                            name={'designation'}
                            helperText=""
                            label="Designation"
                        />
                    </Grid>
                </Grid>
                <Notifications
                open={formState.notificationOpen}
                message={formState.notificationMessage}
                onClose={closeNotification}
                severity={formState.notificationType}
                />
            </AdminEditPageTemplate >
        </>
    )
}

interface InitEmployeeFormProps {
    data: EmployeeFormData;
    reset: UseFormReset<EmployeeFormData>
}

const InitEmployeeForm = async ({
    data,
    reset
}: InitEmployeeFormProps) => {
    reset({

    });
}