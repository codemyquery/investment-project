import React, { createContext, useContext, useMemo, useReducer } from "react"
interface AuthState {
    userToken: string | null;
    idToken: string;
    userInfo: any;
    homeURL: string;
    status: "idle" | "signOut" | "signIn" | "signUp"
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
}

interface AuthContextType extends AuthState, AuthContextAction { }

const AuthContext = createContext<AuthContextType>({
    status: "idle",
    userToken: null,
    userInfo: {},
    idToken: "",
    homeURL: "",
    signIn: () => { },
    signOut: () => { },
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
        type: "SIGN_UP"
    }

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const hash = window.location.hash;
    const routeToNavigate = `${(window.location.pathname !== "/" ? window.location.pathname : '')}${hash}`;
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
        status: 'idle'
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
        signUp: (email: string, password: string, mobile: number) => {
            dispatch({
                type: "SIGN_UP"
            });
        }

    }), [state.idToken]);

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