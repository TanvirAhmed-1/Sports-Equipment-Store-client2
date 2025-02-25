import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import Loading from "../components/Loading";
import { Navigate, useLocation } from "react-router";


const PrivateRoute = ({children}) => {
    const{loader,user}=useContext(AuthContext)
    const location=useLocation()
    // console.log(location)
   if(loader){
    return <Loading></Loading>
   }
   if(user&& user.email){
    return children
   }

//    state={location.pathname}
    return <Navigate state={location.pathname}  to={"/login"}></Navigate> 
};

export default PrivateRoute;