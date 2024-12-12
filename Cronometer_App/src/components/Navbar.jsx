import { Container, Box, Image, Flex, Heading, Spacer, ButtonGroup, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom"
import style from "./Navbar.css"


function Navbar() {
  return (
    <>
    <div className="navbar">
      <div className="navbody">
        <div className="logo">
          <Image style={{width:"69%"}}
              src="https://cdn1.cronometer.com/webflow/Cronometer-Logo---Mandarin.svg"
              W="60%"
              alt="logo"
            />
        </div>
        <div className="Routebody">
          <ButtonGroup gap='1' pl="200px">
            <Button color="black" bg="white" fontWeight={430} maxW="100px" fontSize={19}><Link to="/Product">Product</Link></Button>
            <Button color="black" bg="white" fontWeight={430} maxW="100px" fontSize={19}><Link >Support</Link></Button>
            <Button color="black" bg="white" fontWeight={430} maxW="100px" fontSize={19}><Link > Blog</Link></Button>
            <Button color="black" bg="white" fontWeight={430} maxW="100px" fontSize={19}><Link >Forum</Link></Button>
            <Button color="black" bg="white" fontWeight={430} maxW="100px" fontSize={19}><Link to="/About">About</Link></Button>
            <Button colorScheme='white' fontWeight={470} fontSize="18px" border="1px" padding="10px 29px" borderColor="black" color="black"><Link to="/login">LOG IN</Link></Button>
          </ButtonGroup>
        </div>
        <div className="hambur">
          <Button color="black"  bg="blue.300" fontSize={20}><Link >=</Link></Button>
        </div>
      </div>
    </div>
    <div className="hamburgermenu">
      <div className="hamtop">
        <Button color="black"  bg="blue.300" fontSize={20}><Link >clear</Link></Button>
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
export default Navbar;
