import { auth, googleProvider } from './firebase.config';

// google login
export const googleLogin = async () => {
    let user = {};
    await auth.signInWithPopup(googleProvider)
    .then(response => user = {...response.user})
    .catch(err => user.error = err)

    return user;
}


// email & password : login
export const emailPasswordLogin= async ({ email, password }) => {
    let user = {};
    await auth.signInWithEmailAndPassword(email, password)
    .then(response => user = {...response.user})
    .catch(err => user.error = err)

    return user;
}


// email & password : register
export const emailPasswordRegister = async ({ email, password }) => {
    let user = {};
    await auth.createUserWithEmailAndPassword(email, password)
    .then(new_user => user = {...new_user})
    .catch(err => user = {error: err})

    return user;
}



// logout
export const logOut = async () => {
    let status = {};
    await auth.signOut()
    .then(() => status = {res: true})
    .catch(err => status = {res: false, error: err})

    return status;
}