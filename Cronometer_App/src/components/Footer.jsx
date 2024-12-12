import {
    Container,
    Box,
    Image,
    Flex,
    Heading,
    Spacer,
    ButtonGroup,
    Button,
    Center,
    Text,
    Grid,
    GridItem,
  } from "@chakra-ui/react";




function Footer(){


return (
<div>
 <Container maxW="100%" height="90vh" bg="#262a3b" pt="50px"> 
 
    
    <Flex maxW="1200px" h="300px" m="auto" justifyContent="space-between"> 
    <Box w="20%" h="100%" >
        <Image style={{ alignItems:"center", paddingTop:"50px"}}
                src="https://cdn1.cronometer.com/webflow/Cronometer-Icon---Mandarin.svg"
                w="80px"
                alt="logo"
                mt="50px"
                />
    </Box>
    <Box w="25%" h="100%" >
            <Text mt="50px" color="white"  fontSize="20px" fontWeight="700">Calomate</Text>
            <Text mt="20px" color="white" fontSize="17px">For Individuals</Text>
            <Text mt="20px" color="white" fontSize="17px">For Professionals</Text>
            <Text mt="20px" color="white" fontSize="17px">Privacy</Text>
            <Text mt="20px" color="white" fontSize="17px">Terms</Text>
        </Box>
        <Box w="25%" h="100%" >
        <Text mt="50px"  color="white"  fontSize="20px" fontWeight={700}>The Company</Text>
            <Text mt="20px" color="white"  fontSize="17px">About Us</Text>
            <Text mt="20px" color="white" fontSize="17px">Crono Blog</Text>
            <Text mt="20px" color="white" fontSize="17px">Crono Forums</Text>
            <Text mt="20px" color="white" fontSize="17px">Jobs</Text>
            <Text mt="20px" color="white" fontSize="17px">Support</Text>
        </Box>

        <Box w="25%" h="100%" >
            <Text mt="50px" color="white" fontSize="20px" fontWeight="700">Partners & Affiliates</Text>
            <Text mt="20px" color="white" fontSize="17px">Affilate Program</Text>
            <Text mt="20px" color="white" fontSize="17px">Media Kit</Text>
            
        
        </Box>


    </Flex>
        <Box maxW="1200px" h="50px" borderBottom="1px solid white" m="auto">
            
            
        </Box> 
        <div style={{width:"74%", paddingTop:"50px", margin:"auto", display:"flex", justifyContent:"space-between"}}>
            <div style={{width:"21%"}}>
                <div style={{display:"flex",justifyContent:"space-between", marginBottom:"25%"}}>
                    <a href="https://www.instagram.com/cronometer_official/?hl=en"><Image
                    w="76%"
                    src="https://cdn1.cronometer.com/webflow/instragm-icon-snow-white.svg"
                    /></a>
                    <a href="https://www.facebook.com/cronometer">
                    <Image
                    w="76%"
                    src="https://cdn1.cronometer.com/webflow/facebook-icon-snow-white.svg"
                    />
                    </a>
                    <a href="https://twitter.com/cronometer">
                    <Image
                    w="76%"
                    src="https://cdn1.cronometer.com/webflow/twitter-icon-snow-white.svg"
                    />
                    </a>
                    <a href="https://www.youtube.com/channel/UCX4_3R4oVBU3Ff5Jmh1iJbw"><Image
                    w="76%"
                    src="https://cdn1.cronometer.com/webflow/youtube-icon-snow-white.svg"
                    /></a>
                </div>
                <Text textAlign="center" color="white" fontSize="18px">Copyright © 2011-2022</Text>
                <Text textAlign="center" color="white" fontSize="18px">All rights reserved</Text>
            </div>
            <div>
                <Center h="70px" maxW="100%"  gap="40px">
                    <GridItem maxW="120px" h="100%">
                        <a href="https://apps.apple.com/ca/app/cronometer-nutrition-tracker/id1145935738">
                        <Image
                        w="100%"
                        src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"
                        />
                        </a>
                    </GridItem>
                    <GridItem w="120px" h="100%">
                        <a href="https://play.google.com/store/apps/details?id=com.cronometer.android.gold&hl=en_CA">
                        <Image
                        w="100%"
                        src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"
                        />
                        </a>
                    </GridItem>
                </Center>
            </div>
        </div>

    </Container>

</div> )

}


export default Footer