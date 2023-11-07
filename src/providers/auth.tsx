import { useMediaQuery } from "@mui/material";
import React, { createContext, useContext, useMemo, useReducer } from "react"
interface AuthState {
    userToken: string | null;
    idToken: string;
    userInfo: any;
    homeURL: string;
    status: "idle" | "signOut" | "signIn" | "signUp",
    isDark: boolean,
    openDrawer: boolean;
}

interface AuthContextAction {
    signIn: (
        token: string,
        idToken: string,
    ) => void;
    signUp: (
        email: string,
        password: string,
        mobile: number
    ) => void;
    signOut: () => void;
    changeTheme: (isDark: boolean) => void;
    changeDrawer: (openDrawer: boolean) => void;
}

interface AuthContextType extends AuthState, AuthContextAction { }

const AuthContext = createContext<AuthContextType>({
    status: "idle",
    userToken: null,
    userInfo: {},
    idToken: "",
    homeURL: "",
    isDark: false,
    openDrawer: true,
    signIn: () => { },
    signOut: () => { },
    changeTheme: () => { },
    changeDrawer: () => { },
    signUp: () => { }
});

type AuthAction =
    {
        type: "SIGN_IN"
    }
    |
    {
        type: "SIGN_OUT"
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
    const hash = window.location.hash;
    const routeToNavigate = `${window.location.pathname}${hash}`;
    const [state, dispatch] = useReducer(AuthReducer, {
        userToken: null,
        idToken: '',
        userInfo: {
            name: "Ashutosh",
            email: "ashutoshsingh5192344@gmail.com",
            mobile: "9794978416",
            roles: ['ADMIN']
        },
        homeURL: routeToNavigate,
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
        signOut: () => {
            dispatch({
                type: "SIGN_OUT"
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
        case 'SIGN_OUT':
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