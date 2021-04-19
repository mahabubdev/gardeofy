import { createContext, useContext, useState } from 'react';


const authContext = createContext(); // all user auth context

let lcs = JSON.parse(localStorage.getItem('user-data')) || {};
const initialValue = {
    isAuthenticated: lcs.isAuthenticated ? lcs.isAuthenticated : false,
    name: lcs.name ? lcs.name : '',
    email: lcs.email ? lcs.email : '',
    photo: lcs.photo ? lcs.photo : '',
    role: lcs.role ? lcs.role : ''
};
console.log(initialValue);


// share context data
const AuthContextData = () => {
    const [user, setUser] = useState(initialValue);


    // actions
    const loginUser = async (usr) => {

        const newData = {
            name: usr.name,
            email: usr.email,
            photo: usr.photo,
            role: usr.role,
            isAuthenticated: true
        };

        await setUser(newData);
        await localStorage.setItem('user-data', JSON.stringify(newData));
    }

    const logoutUser = () => {
        setUser({
            name: '',
            email: '',
            photo: '',
            role: '',
            isAuthenticated: false
        });
        localStorage.removeItem('token');
        localStorage.removeItem('user-data');
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