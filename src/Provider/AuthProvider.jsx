import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firbase/firebase.init";

export const AuthContex=createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState([]);

    const creatUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const authInfo ={
        creatUser,
    }
    return (
        <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>
    )
};

export default AuthProvider;
