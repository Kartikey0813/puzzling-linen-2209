import { Container, Box, Image, Flex, Heading, Spacer, ButtonGroup, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom"
import style from "./Navbar.css"


function Navbar() {
  return (
    <>
    <div className="navbar">
     <div className="navbody">
       <div className="logo">
       <Image
          src="https://cdn1.cronometer.com/webflow/Cronometer-Logo---Mandarin.svg"
          W="80%"
          alt="logo"
        />
       </div>
       <div className="routbody">
        <ButtonGroup gap='2' pl="250px">
            <Button color="black" bg="white" maxW="100px" fontSize={17}><Link to="/product">Product</Link></Button>
            <Button color="black" bg="white" maxW="100px" fontSize={17}><Link >Support</Link></Button>
            <Button color="black" bg="white" maxW="100px" fontSize={17}><Link > Blog</Link></Button>
            <Button color="black" bg="white" maxW="100px" fontSize={17}><Link >Forum</Link></Button>
            <Button color="black" bg="white" maxW="100px" fontSize={17}><Link to="/aboute">About</Link></Button>
            <Button colorScheme='white'  boxShadow='dark-lg' border="1px" borderColor="tomato" color="tomato"><Link to="/login">Login</Link></Button>

        </ButtonGroup>
       </div>
       <div className="hambur">
       <Button color="black"  bg="red.300" fontSize={20}><Link >=</Link></Button>
       </div>
     </div>




    </div>
    <div className="hamburgermenu">
     <div className="hamtop">
     <Button color="black"  bg="red.300" fontSize={20}><Link >clear</Link></Button>
     </div>
     <div>
     <div><Link to="/product">Product</Link></div>
     <div><Link >Support</Link></div>
     <div><Link > Blog</Link></div>
     <div><Link >Forum</Link></div>
     <div><Link to="/aboute">About</Link></div>
     </div>
     
    </div>
    </>
    
  );
}
export default Navbar