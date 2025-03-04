import { useState } from "react";
import { useHookForm, Users } from "../../../services";
import { DefaultFormState, FormState, LoginFormData, ServerResponse } from "../../../types";
import { t } from "../../../utils";
import { Controller } from "react-hook-form";
import { Notifications } from "../../molecules";
import { useNavigate } from "react-router-dom";
import { BASE_URL, USER_SESSION_NAME } from "../../../utils/constants";
import { loginProperty } from "../../../assets";

const defaultValues: LoginFormData = {
    username: "",
    password: ""
};

export const Login = () => {
    window.scrollTo(0, 0);
    const [formState, setFormState] = useState<FormState>({ ...DefaultFormState });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useHookForm<LoginFormData>({ defaultValues });

    const onSubmitItem = async (data: LoginFormData) => {
        let response: ServerResponse;
        try {
            response = await Users.loginUser(data);
            sessionStorage.setItem(USER_SESSION_NAME, JSON.stringify(response))
            if (response.status) {
                window.location.href = `${BASE_URL}/user/my-plan`
            } else {
                setFormState(prev => {
                    return {
                        ...prev,
                        loading: false,
                        notificationOpen: true,
                        notificationType: 'error',
                        notificationMessage: response?.errMsg || t.errorMessage
                    }
                })
            }
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

    return (<>
        <div className="contact-us">
            <section>
                <div className="container">
                    <div className="text-white   row">
                        <div
                            data-aos="fade-up"
                            className="px-4 px-md-5 mb-5 col-md-5 aos-init aos-animate"
                        >
                            <img
                                src={loginProperty}
                                alt="Login Page Image"
                                className="img-fluid rounded-4"
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            className="px-4 px-md-5 col-md-7 aos-init aos-animate"
                        >
                            <div>
                                <h1 className="fs-md-48 fs-40 fw-bold mb-4">Login</h1>
                                <p className="mb-4">
                                    Login into Your Account & Complete KYC to invest in our
                                    plans. Our advisor will connect with you shortly.
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
                                                    type="email"
                                                    id="validationCustom05"
                                                    className="form-control"
                                                />
                                            )}
                                        />
                                        {errors.username?.type === "required" && <div className="invalid-feedback">{t.required}</div>}
                                        {errors.username?.type === "pattern" && <div className="invalid-feedback">{t.emailError}</div>}
                                    </div>
                                    <div className="mb-4 col-12">

                                        <Controller
                                            name={"password"}
                                            control={control}
                                            rules={{
                                                required: true
                                            }}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    placeholder="Enter Your Password"
                                                    name="password"
                                                    type="password"
                                                    className="form-control"
                                                />
                                            )}
                                        />
                                        {errors.password?.type === "required" && <div className="invalid-feedback">{t.required}</div>}
                                    </div>

                                </div>
                                <button
                                    type="submit"
                                    className="main-btn maincolor mb-2 btn btn-primary"
                                    onClick={onSubmit}
                                >
                                    Login
                                </button>
                                <p>Forget UserId/Password? <a href={`${BASE_URL}/forget-password`}>click here </a></p>
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
    </>)
}