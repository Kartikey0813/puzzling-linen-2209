import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AppContext";


function PrivateRoutes({children}){


const {isAuth}=useContext(AuthContext)
if(isAuth){
    return children;
}
else{
    return <Navigate to="/login"/>
}




}
export default PrivateRoutes;