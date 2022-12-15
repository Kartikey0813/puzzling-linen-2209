import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./signup" 
import Aboute from "./About"
import PrivateRoutes from "../components/PrivateRoutes";
import Product from "./Product";


function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/aboute" element={<Aboute/>}></Route>
            <Route path="/aboute" element={<Aboute/>}></Route>
            <Route path="/product" element={<PrivateRoutes> <Product/></PrivateRoutes>}></Route>
        </Routes>
    )



}
export default AllRoutes;