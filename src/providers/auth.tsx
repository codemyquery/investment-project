import { useMediaQuery } from "@mui/material";
import React, { createContext, useContext, useMemo, useReducer } from "react"
import { ADMIN_SESSION_NAME, USER_SESSION_NAME } from "../utils/constants";

interface UserInfo {
    id: string,
    name: string,
    email: string,
    mobile: string,
    kycStatus: 'YES' | 'NO',
    dateCreated: string,
    status: string
}
interface AdminInfo {
    userName: string,
    email: string,
    lastLogin: string
}
interface AuthState {
    userToken: string | null;
    idToken: string;
    userInfo?: UserInfo;
    adminInfo?: AdminInfo;
    homeURL: string;
    status: "idle" | "signInAdmin" | "signOutAdmin" | "signOutUser" | "signIn" | "signUp",
    isDark: boolean,
    openDrawer: boolean;
}

interface AuthContextAction {
    signIn: (
        token: string,
        userName: string,
    ) => void;
    signInAdmin: (
        token: string,
        userName: string,
    ) => void;
    signUp: (
        email: string,
        password: string,
        mobile: number
    ) => void;
    signOutUser: () => void;
    signOutAdmin: () => void;
    changeTheme: (isDark: boolean) => void;
    changeDrawer: (openDrawer: boolean) => void;
}

interface AuthContextType extends AuthState, AuthContextAction { }

const AuthContext = createContext<AuthContextType>({
    status: "idle",
    userToken: null,
    userInfo: undefined,
    adminInfo: undefined,
    idToken: "",
    homeURL: "",
    isDark: false,
    openDrawer: true,
    changeTheme: () => { },
    changeDrawer: () => { },
    signInAdmin: () => { },
    signOutAdmin: () => { },
    signUp: () => { },
    signIn: () => { },
    signOutUser: () => { }
});

type AuthAction =
    {
        type: "SIGN_IN"
    }
    |
    {
        type: "SIGN_IN_ADMIN",
        userToken: string,
        adminInfo?: AdminInfo,
        status: 'signInAdmin'
    }
    |
    {
        type: "SIGN_OUT_ADMIN",
        userToken: string,
        adminInfo?: undefined,
        status: 'signOutAdmin'
    } |
    {
        type: "SIGN_OUT_USER",
        userToken: string,
        unserInfo?: undefined,
        status: 'signOutUser'
    }
    |
    {
        type: "CHANGE_THEME",
        isDark: boolean
    }
    |
    {
        type: "CHANGE_DRAWER",
        openDrawer: boolean
    }
    |
    {
        type: "SIGN_UP"
    }

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const preferDarkModes = useMediaQuery("(prefer-color-scheme: dark)");
    const [state, dispatch] = useReducer(AuthReducer, {
        userToken: null,
        idToken: '',
        userInfo: JSON.parse(sessionStorage.getItem(USER_SESSION_NAME) || '{}'),
        adminInfo: JSON.parse(sessionStorage.getItem(ADMIN_SESSION_NAME) || '{}'),
        homeURL: window.location.pathname,
        status: 'idle',
        isDark: false,
        openDrawer: false
    });
    const AuthAction: AuthContextAction = useMemo(() => ({
        signIn: (
            token: string,
            idToken: string,
        ) => {
            dispatch({
                type: "SIGN_IN"
            });
        },
        signInAdmin: (
            username: string,
            token: string,
        ) => {
            dispatch({
                type: "SIGN_IN_ADMIN",
                status: "signInAdmin",
                adminInfo: {
                    userName: username,
                    email: '',
                    lastLogin: ''
                },
                userToken: token
            });
        },
        signOutAdmin: () => {
            dispatch({
                type: "SIGN_OUT_ADMIN",
                status: 'signOutAdmin',
                userToken: '',
                adminInfo: undefined
            });
        },
        signOutUser: () => {
            dispatch({
                type: "SIGN_OUT_USER",
                status: 'signOutUser',
                userToken: '',
                unserInfo: undefined
            });
        },
        changeTheme: (isDark: boolean) => {
            dispatch({
                type: "CHANGE_THEME",
                isDark: isDark
            });
        },
        changeDrawer: (openDrawer: boolean) => {
            dispatch({
                type: "CHANGE_DRAWER",
                openDrawer: openDrawer
            });
        },
        signUp: (email: string, password: string, mobile: number) => {
            dispatch({
                type: "SIGN_UP"
            });
        }
    }), [preferDarkModes, state.idToken]);

    return (
        <AuthContext.Provider value={{ ...state, ...AuthAction }}>
            {children}
        </AuthContext.Provider>
    );
}

const AuthReducer = (prevState: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...prevState,
                ...action
            }
        case 'SIGN_IN_ADMIN':
            return {
                ...prevState,
                ...action
            }
        case 'CHANGE_DRAWER':
            return {
                ...prevState,
                ...action
            }
        case 'CHANGE_THEME':
            return {
                ...prevState,
                ...action
            }
        case 'SIGN_OUT_ADMIN':
            return {
                ...prevState,
                ...action
            }
        case 'SIGN_OUT_USER':
            return {
                ...prevState,
                ...action
            }
        case 'SIGN_UP':
            return {
                ...prevState,
                ...action
            };
    }
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be inside the AuthProvider with a value');
    }
    return context;
}