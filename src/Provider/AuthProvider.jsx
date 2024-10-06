import {createContext, useEffect, useState} from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import app from "../Firbase/firebase.init";

export const AuthContex = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = provider => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const githubSignIn = provider => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return() => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    createUser,
    signIn,
    logOut
  };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
