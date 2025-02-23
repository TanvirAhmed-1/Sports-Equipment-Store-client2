import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.inite";


export const AuthContext=createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]=useState();
    const[loader,setLoader]=useState(true);

    // google sign in
    const googleProvider=new GoogleAuthProvider()
const googleUser=()=>{
  return signInWithPopup(auth,googleProvider);

}
    // gitHub sign in
const gitHubUser=()=>{
    
}

// user Login

const userLogin=(email, password)=>{
  return  signInWithEmailAndPassword(auth, email, password)

}

// User Register
const userRegister=(email, password)=>{
return createUserWithEmailAndPassword(auth, email, password)

}

// user photo and 
const updateUserProfile=()=>{

}

// user sign out
const userSignOut=()=>{
return signOut(auth)
}


    const authInfo={
     user, 
     setUser,
     loader,
     googleUser,
     userRegister,
     gitHubUser,
     userLogin,
     updateUserProfile,
     userSignOut

    }
    return (
        <AuthContext.Provider value={authInfo}  >{children}</AuthContext.Provider>
    )
};

export default AuthProvider;