import { createContext, useContext, useState } from 'react';


const authContext = createContext(); // all user auth context


// share context data
const AuthContextData = () => {
    const [user, setUser] = useState({
        isAuthenticated: false,
        name: '',
        email: '',
        photo: '',
        role: ''
    });


    // actions
    const loginUser = (usr) => {
        setUser({
            ...user,
            name: usr.name,
            email: usr.email,
            photo: usr.photo,
            role: 'customer',
            isAuthenticated: true
        })
    }

    const logoutUser = () => {
        setUser({
            ...user,
            isAuthenticated: false,
            name: '',
            email: '',
            photo: '',
            role: ''
        });
    }


    // return
    return {
        user,
        loginUser,
        logoutUser
    }
}




// auth context provider
export function AuthContextProvider ({ children }) {
    const authCtx = AuthContextData();

    return (
        <authContext.Provider value={authCtx}>
            { children }
        </authContext.Provider>
    )
}




// getter || get context data @custom HOOK
export function useAuthHook() {
    return useContext(authContext);
}