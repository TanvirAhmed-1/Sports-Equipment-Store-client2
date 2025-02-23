import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import Loading from "../components/Loading";
import { Navigate } from "react-router";


const PrivateRoute = ({children}) => {
    const{loader,user}=useContext(AuthContext)
   if(loader){
    return <Loading></Loading>
   }
   if(user&& user.email){
    return children
   }

//    state={location.pathname}
    return <Navigate   to={"/login"}></Navigate> 
};

export default PrivateRoute;