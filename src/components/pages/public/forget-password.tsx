import { useEffect, useState } from "react";
import { Users, useHookForm } from "../../../services";
import { DefaultFormState, FormState, ServerResponse, SignUpFormData } from "../../../types";
import { Controller } from "react-hook-form";
import { t } from "../../../utils";
import { Notifications } from "../../molecules";
import { ForgetPasswordFormDate } from "../../../types/user";

const defaultValues: ForgetPasswordFormDate = {
    
    
    username: ""
   
   
};

export const ForgetPassword = () => {
    const [formState, setFormState] = useState<FormState>({ ...DefaultFormState });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        reset,
    } = useHookForm<ForgetPasswordFormDate>({ defaultValues });

    const onSubmitItem = async (data: ForgetPasswordFormDate) => {
        let response: ServerResponse;
        
        try {
            response = await Users.forgetPassword(data);
            setFormState(prev => {
                return {
                    ...prev,
                    loading: false,
                    notificationOpen: true,
                    formSubmitted: true,
                    notificationMessage: response.status ? t.successMessage : response.errMsg,
                    notificationType: response.status ? 'success' : 'error'
                }
            });
        } catch (error) {
            setFormState(prev => {
                return {
                    ...prev,
                    loading: false,
                    notificationOpen: true,
                    notificationMessage: response?.errMsg || t.errorMessage,
                    notificationType: 'error'
                }
            })
        }
    }

    const onSubmit = () => handleSubmit(onSubmitItem)();

    return (
        <>
            <div className="contact-us">
                <section>
                    <div className="container">
                        <div className="text-white   row">
                            <div
                                data-aos="fade-up"
                                className="px-4 px-md-5 mb-5 col-md-5 aos-init aos-animate"
                            ></div>
                            <div
                                data-aos="fade-up"
                                className="px-4 px-md-5 col-md-7 aos-init aos-animate"
                            >
                                <div>
                                    <h1 className="fs-md-48 fs-40 fw-bold mb-4">Sign Up</h1>
                                    <p className="mb-4">
                                        You are one step closer to start your better financial
                                        Journey. Just enter your details and create your account.
                                        we’ll be in touch shortly.
                                    </p>
                                </div>
                                <div className="contact-from text-white">
                                    <div className="mb-3 row">
                                        
                                        
                                        <div className="mb-4 col-12">
                                            <Controller
                                                name={"username"}
                                                control={control}
                                                rules={{
                                                    required: true,
                                                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                                                }}
                                                render={({ field }) => (
                                                    <input
                                                        {...field}
                                                        placeholder="Email"
                                                        name="email"
                                                        type="email"
                                                        className="form-control"
                                                    />
                                                )}
                                            />
                                            {errors.username?.type === "required" && <div className="invalid-feedback">{t.required}</div>}
                                            {errors.username?.type === "pattern" && <div className="invalid-feedback">{t.emailError}</div>}
                                        </div>
                                        
                                        
                                    </div>
                                    <button
                                        type="submit"
                                        onClick={onSubmit}
                                        className="main-btn maincolor mb-2 btn btn-primary"
                                    >
                                        Retrieve Password
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Notifications
                open={formState.notificationOpen}
                message={formState.notificationMessage}
                onClose={() => { setFormState(prev => { return { ...prev, notificationOpen: false, notificationType: 'error', notificationMessage: '' } }) }}
                severity={formState.notificationType}
            />
        </>
    );
};
