import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.inite";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // google sign in
  const googleProvider = new GoogleAuthProvider();

  const googleUser = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  };
  // gitHub sign in
  const provider = new GithubAuthProvider();
  const gitHubUser = () => {
    setLoader(true)
   return signInWithPopup(auth, provider)
  };

  // user Login

  const userLogin = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // User Register
  const userRegister = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user photo and
  const updateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData)
  };

  // user sign out
  const userSignOut = () => {
    setLoader(true)
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    loader,
    googleUser,
    userRegister,
    gitHubUser,
    userLogin,
    updateUserProfile,
    userSignOut,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
