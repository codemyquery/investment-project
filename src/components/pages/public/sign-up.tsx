import { useEffect, useState } from "react";
import { Users, useHookForm } from "../../../services";
import { DefaultFormState, FormState, ServerResponse, SignUpFormData } from "../../../types";
import { Controller } from "react-hook-form";
import { t } from "../../../utils";
import { Notifications } from "../../molecules";

const defaultValues: SignUpFormData = {
    name: "",
    mobile: "",
    email: "",
    lgLcCode: "",
    password: "",
    confirmPassword: "",
    acceptedPromotionMails: 0,
};

export const SignUp = () => {
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
    } = useHookForm<SignUpFormData>({ defaultValues });

    const onSubmitItem = async (data: SignUpFormData) => {
        let response: ServerResponse;
        if (data.confirmPassword !== data.password) return;
        try {
            response = await Users.createUser(data);
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
                                                name={"name"}
                                                control={control}
                                                rules={{
                                                    required: true
                                                }}
                                                render={({ field }) => (
                                                    <input
                                                        {...field}
                                                        placeholder="Name"
                                                        name="name"
                                                        type="text"
                                                        className="form-control"
                                                        
                                                    />
                                                )}
                                            />
                                            {errors.name && <div className="invalid-feedback">{t.required}</div>}
                                        </div>
                                        <div className="mb-4 col-12">
                                            <Controller
                                                name={"mobile"}
                                                control={control}
                                                rules={{
                                                    required: true,
                                                    minLength: 10,
                                                    maxLength: 10
                                                }}
                                                render={({ field }) => (
                                                    <input
                                                        {...field}
                                                        placeholder="Phone Number"
                                                        type="number"
                                                        className="form-control"
                                                    />
                                                )}
                                            />
                                            {errors.mobile?.type === 'required' && <div className="invalid-feedback">{t.required}</div>}
                                            {errors.mobile?.type === 'minLength' && <div className="invalid-feedback">{t.minLength}</div>}
                                            {errors.mobile?.type === 'maxLength' && <div className="invalid-feedback">{t.maxLength}</div>}
                                        </div>
                                        <div className="mb-4 col-12">
                                            <Controller
                                                name={"email"}
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
                                            {errors.email?.type === "required" && <div className="invalid-feedback">{t.required}</div>}
                                            {errors.email?.type === "pattern" && <div className="invalid-feedback">{t.emailError}</div>}
                                        </div>
                                        <div className="mb-4">
                                            <Controller
                                                name={"lgLcCode"}
                                                control={control}
                                                render={({ field }) => (
                                                    <textarea
                                                        {...field}
                                                        placeholder="LG Code (Optional)"
                                                        name="lgCode"
                                                        className="form-control"
                                                    />
                                                )}
                                            />
                                        </div>
                                        <div className="mb-4 col-12">
                                            <Controller
                                                name={"password"}
                                                rules={{
                                                    required: true
                                                }}
                                                control={control}
                                                render={({ field }) => (
                                                    <input
                                                        {...field}
                                                        placeholder="Enter New Password"
                                                        name="password"
                                                        type="password"
                                                        className="form-control"
                                                    />
                                                )}
                                            />
                                            {errors.password && <div className="invalid-feedback">{t.required}</div>}
                                        </div>
                                        <div className="mb-4 col-12">
                                            <Controller
                                                name={"confirmPassword"}
                                                control={control}
                                                rules={{
                                                    required: true
                                                }}
                                                render={({ field }) => (
                                                    <input
                                                        {...field}
                                                        placeholder="Re-Enter Password"
                                                        name="reenterpassword"
                                                        type="password"
                                                        className="form-control"
                                                    />
                                                )}
                                            />
                                            {errors.confirmPassword && <div className="invalid-feedback">{t.required}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <div className="form-check">
                                                <Controller
                                                    name={"acceptedPromotionMails"}
                                                    control={control}
                                                    rules={{
                                                        onChange: (evt) => {
                                                            setValue("acceptedPromotionMails",evt.target.value ? 1 : 0);
                                                        },
                                                    }}
                                                    render={({ field }) => (
                                                        <input
                                                            {...field}
                                                            type="checkbox"
                                                            checked={!!field.value}
                                                            className="form-check-input"
                                                        />
                                                    )}
                                                />
                                                <label title="" className="form-check-label">
                                                    You are signing up to receive transaction ,
                                                    promotions and other commercial messages that are
                                                    relevant to you
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        onClick={onSubmit}
                                        className="main-btn maincolor mb-2 btn btn-primary"
                                    >
                                        Create
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
