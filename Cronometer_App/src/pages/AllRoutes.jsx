import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./signup" 
import About from "./About"
import PrivateRoutes from "../components/PrivateRoutes";
import Product from "./Product";


function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Product" element={<PrivateRoutes> <Product/></PrivateRoutes>}></Route>
        </Routes>
    )



}
export default AllRoutes;