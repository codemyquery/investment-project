import { Grid, Card, CardContent, TextField, Stack, Button, Box, Step, StepButton, Stepper, Typography } from "@mui/material"
import { UserBankDetails, UserNomineeDetails, UserPersonalDetails, UserUploadDocuments } from "../../../organism"
import { Notifications, UserProfileKycOptions } from "../../../molecules"
import { useEffect, useState } from "react"
import { Users, useHookForm } from "../../../../services"
import { DefaultFormState, FormModes, FormState, UserKYCFormData, UserKYCServerData } from "../../../../types"
import { useAuth } from "../../../../providers"
import React from "react"
import { UseFormReset } from "react-hook-form"
import { t } from "../../../../utils"

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
const steps = ['Personal Details', 'Bank Details', 'Nominee Details', 'Upload Documents'];

const getCompletedObject = () => {
    const obj: { [k: number]: boolean; } = {};
    steps.forEach((step, i) => obj[i] = true)
    return obj;
}

export const Profile = () => {
    window.scrollTo(0, 0);
    const { userInfo } = useAuth();
    const [formState, setFormState] = useState<FormState>({ ...DefaultFormState });
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{ [k: number]: boolean; }>(userInfo?.kycStatus === 'YES' ? getCompletedObject() : {});

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === steps.length - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === steps.length;
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted() ? steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
        if (completedSteps() === steps.length) {
            onSubmit();
        }
    };

    const {
        control,
        handleSubmit,
        formState: { errors, isDirty, isValid },
        setValue,
        reset,
        getValues
    } = useHookForm<UserKYCFormData>({ defaultValues })

    useEffect(() => {
        let mode: FormModes = 'init';
        const init = async () => {
            if (userInfo?.id) {
                mode = 'edit';
                const abortController = new AbortController();
                const data = await Users.fetchKycDetails(userInfo.id, abortController);
                await initCKYCForm({ data: data, reset: reset, userId: userInfo.id })
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
    const onSubmitPreCheck = async (data: UserKYCFormData) => {
        onSubmitItem(data);
    }

    const onSubmit = () => handleSubmit(onSubmitPreCheck)();

    return <Grid>
        <Grid item xs={12}>
            <Card elevation={4} sx={{ padding: '1%' }}>
                <CardContent key={`card-content`}>
                    <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => (
                                <Step key={label} completed={completed[index]}>
                                    <StepButton color="inherit" onClick={handleStep(index)}>
                                        {label}
                                    </StepButton>
                                </Step>
                            ))}
                        </Stepper>
                        <div>
                            {allStepsCompleted() ? (
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    All steps completed - you&apos;re finished
                                </Typography>
                            ) : (
                                <>
                                    <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                                        <Grid container spacing={3}>
                                            {activeStep + 1 === 1 && <UserPersonalDetails control={control} />}
                                            {activeStep + 1 === 2 && <UserBankDetails control={control} />}
                                            {activeStep + 1 === 3 && <UserNomineeDetails control={control} />}
                                            {activeStep + 1 === 4 && <UserUploadDocuments setFormState={setFormState} control={control} getValues={getValues} setValue={setValue} />}
                                        </Grid>
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Button
                                            color="inherit"
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            sx={{ mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        {activeStep !== steps.length &&

                                            <Button onClick={handleComplete} variant="outlined" color="success">
                                                {completedSteps() === steps.length - 1 ? 'Finish' : 'Save & Next'}
                                            </Button>
                                        }
                                    </Box>
                                </>
                            )}
                        </div>
                    </Box>
                </CardContent>
            </Card>
            <Notifications
                open={formState.notificationOpen}
                message={formState.notificationMessage}
                onClose={() => { setFormState(prev => { return { ...prev, notificationOpen: false, notificationType: 'error', notificationMessage: '' } }) }}
                severity={formState.notificationType}
            />
        </Grid>
    </Grid>
}

interface initCKYCFormProps {
    reset: UseFormReset<UserKYCFormData>
    data: UserKYCServerData
    userId: string
}
export const initCKYCForm = async ({
    reset,
    data,
    userId
}: initCKYCFormProps) => {
    reset({
        id: userId,
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
        panCardUrl: data.PannoUrl,
        signatureUrl: data.SignatureUrl,
        bankStatementUrl: data.Bank_Acc_no_url,
        aadharCard: {
            backUrl: data.AdhaarnoBackUrl,
            frontUrl: data.AdhaarnoFrontUrl
        }
    })
}