import Navbar from "../components/Navbar.jsx";
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
import { Link } from "react-router-dom";
import Fotter from "../components/Footer.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <Container maxW="100%" bg="white" h="550px" centerContent pt="50px">
        <Flex h="550px">
          <Box w="600px" textAlign="left">
            <Text fontSize="60px " as="b" color="blackAlpha.800" style={{fontWeight:"800"}}>
              Eat smarter,
            </Text>
            <br />
            <Text fontSize="60px" as="b" color="blackAlpha.800" style={{fontWeight:"800"}}>
              Live better.
            </Text>
            <Text color="black" fontSize="20px" marginTop={4}>
              Track your diet, exercise, and health data.
            </Text>
            <Button
              bgColor="#44d07b"
              fontSize="20px"
              mt="50px"
              w="300px"
              h="50px"
            >
              <Link to="/signup">Sign UP-It's Free!</Link>
            </Button>
            <Text color="black" mt="30px" style={{padding:"10px"}}>
              Already have an account?
              <span>
                <Link to="/login">Log in.</Link>
              </span>
            </Text>
          </Box>

          <Box w="50%">
            <iframe width="632" height="394" src="https://www.youtube.com/embed/4iJYKW826RQ" title="Calomate. Eat smarter. Live better." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
        </Flex>
      </Container>
      <Container bg="#fafbff" maxW="100%" h="340px" textAlign="center" pt="30px">
        <Text color="blackAlpha.900" fontSize="16px">
          As Seen On
        </Text>
        <Center h="70px" gap={4} mt="30px">
          <GridItem w="300px" h="100%">
            <Image
              w="60%"
              src="https://cdn1.cronometer.com/2021/landing/media-mention-2.svg"
            />
          </GridItem>
          <GridItem w="300px" h="100%">
            <Image
              w="60%"
              src="https://cdn1.cronometer.com/2021/landing/media-mention-1.svg"
            />
          </GridItem>
          <GridItem w="300px" h="100%">
            <Image
              w="60%"
              src="https://cdn1.cronometer.com/2021/landing/media-mention-3.svg"
            />{" "}
          </GridItem>
        </Center>
        <Text color="blackAlpha.900" fontSize="17px" mt="20px">
          Available on Web, iOS and Android
        </Text>
        <Center h="70px" w="100%" mt="30px" gap="20px">
          <GridItem w="160px" h="100%">
            <a href="https://apps.apple.com/ca/app/cronometer-nutrition-tracker/id1145935738"><Image
              w="96%"
              src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"
            /></a>
          </GridItem>
          <GridItem w="160px" h="100%">
            <a href=""><Image
              w="96%"
              src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"
            /></a>
          </GridItem>
        </Center>
      </Container>
      <Container bg="white" maxW="100%" h="800px" textAlign="center" pt="30px">
        <Text color="blackAlpha.800" fontSize="40px" as="b" style={{fontWeight:"800",paddingTop:"60px"}}>
          Develop healthy habits
        </Text>

        <Text
          width="400px"
          color="black"
          textAlign="center"
          m="auto"
          fontSize="17.5px"
        >
          Count your calories, ensure you're meeting nutrient targets, and see
          your progress over time.
        </Text>
        <Center maxW="1200px" h="300px" margin="auto" mt="50px" gap={66}>
          <Box width="28%" h="100%">
            <Image
              src="https://cdn1.cronometer.com/webflow/cronometer-features-11.svg"
              maxW="60%"
              h="60%"
              alt="icon"
              margin="auto"
            ></Image>
            <Text color="blackAlpha.900" fontSize="25px" mt="15px" style={{fontWeight:"800",marginTop:"-20px"}}>
            Track up to 84 nutrients and other compounds
            </Text>
            <Text color="blackAlpha.900" fontSize="17px" mt="15px">
              Log your meals and track all your macro and micronutrients.
            </Text>
          </Box>
          <Box width="28%" h="100%">
            {" "}
            <Image
              src="https://cdn1.cronometer.com/webflow/cronometer-features-14.svg"
              maxW="60%"
              h="60%"
              alt="icon"
              margin="auto"
            />{" "}
            <Text color="blackAlpha.900" fontSize="25px" mt="15px" style={{fontWeight:"800",marginTop:"-20px"}}>
            Log meals, exercise and health metrics
            </Text>
            <Text color="blackAlpha.900" fontSize="17px" mt="15px">
              Plus, you can create custom foods, recipes, exercises and
              metrics.
            </Text>{" "}
          </Box>
          <Box width="28%" h="100%">
            {" "}
            <Image
              src="https://cdn1.cronometer.com/webflow/cronometer-features-13.svg"
              maxW="60%"
              h="60%"
              alt="icon"
              margin="auto"
            />{" "}
            <Text color="blackAlpha.900" fontSize="25px" mt="15px" style={{fontWeight:"800",marginTop:"-20px"}}>
            Get valuable health reports and charts
            </Text>
            <Text color="blackAlpha.900" fontSize="17px" mt="15px">
              Learn how nutrients and metrics correlate over time.
            </Text>
          </Box>
        </Center>
        <Center maxW="1200px" h="300px" margin="auto" mt="50px" gap={66}>
          <Box width="28%" h="100%">
            <Image
              src="https://cdn1.cronometer.com/webflow/cronometer-features-16.svg"
              maxW="60%"
              h="60%"
              alt="icon"
              margin="auto"
            ></Image>
            <Text color="blackAlpha.900" fontSize="25px" mt="15px" style={{fontWeight:"800",marginTop:"-20px"}}>
              Custom diet settings
            </Text>
            <Text color="blackAlpha.900" fontSize="17px" mt="15px">
              Set weight, macro & nutrient targets to meet your goals.
            </Text>
          </Box>
          <Box width="28%" h="100%">
            {" "}
            <Image
              src="https://cdn1.cronometer.com/webflow/cronometer-features-15.svg"
              maxW="60%"
              h="60%"
              alt="icon"
              margin="auto"
            />{" "}
            <Text color="blackAlpha.900" fontSize="25px" mt="15px" style={{fontWeight:"800",marginTop:"-20px"}}>
              Fasting timer
            </Text>
            <Text color="blackAlpha.900" fontSize="17px" mt="15px">
              Track your intermittent fasts and see their effect over time.
            </Text>{" "}
          </Box>
          <Box width="28%" h="100%">
            {" "}
            <Image
              src="https://cdn1.cronometer.com/webflow/cronometer-features-12.svg"
              maxW="60%"
              h="60%"
              alt="icon"
              margin="auto"
            />{" "}
            <Text color="blackAlpha.900" fontSize="25px" mt="15px" style={{fontWeight:"800",marginTop:"-20px"}}>
              Diet support
            </Text>
            <Text color="blackAlpha.900" fontSize="17px" mt="15px">
              Whether you’re Keto, Vegan, or on one recommended by your doctor.
            </Text>
          </Box>
        </Center>
      </Container>
      <Container
        bg="whiteAlpha.900"
        maxW="100%"
        h="600px"
        textAlign="center"
        pt="30px"
        paddingTop="140px"
      >
        <Text color="#262a3b" fontSize="46px" fontWeight="750" as="b">
          Discover your nutrition
        </Text>

        <Text
          width="600px"
          color="black"
          textAlign="center"
          m="auto"
          fontSize="20px"
          
        >
          Calomate encourages you to not just count your calories but to focus
          on your nutrition as a whole.
        </Text>
        <div style={{display:"flex"}}>
        <Center  maxW="500px" h="500px" margin="auto" mt="50px" gap={66}>
            <Image
              src="https://cdn1.cronometer.com/webflow/crono-hero-img-22x-1.png"
              // maxW="100%"
              // h="100%"
              alt="icon"
              margin="auto"
            ></Image>
        </Center >
        <Center maxW="500px" h="500px" margin="auto" mt="50px" gap={66} display="grid" gridTemplateColumns="repeat(1, 200)">
          <Box width="100%" h="100%" alignItems="center" gap="26px" display="flex">
            <Image
              src="https://cdn1.cronometer.com/webflow/checkmark.svg"
              maxW="35px"
              h="35px"
              alt="icon"
              marginLeft="20px"
            ></Image>
            <div display="flex" PaddingRight="20">
            <Text color="blackAlpha.900" maxW="500" textAlign="left" fontSize="20px" mt="15px" fontWeight={660}>
              Over 5 million users
            </Text>
            <Text color="blackAlpha.900" fontSize="16px" mt="15px" textAlign="left" marginTop="-0.5">
              Join the community to get tips and inspiration from other users on
              our forums and Facebook group.
            </Text>
            </div>
          </Box>
          <Box width="100%" h="100%" alignItems="center" gap="26px" display="flex" marginTop="-100">
            {" "}
            <Image
              src="https://cdn1.cronometer.com/webflow/checkmark.svg"
              maxW="35px"
              h="35px"
              alt="icon"
              marginLeft="20px"
            />{" "}
            <div display="flex">
            <Text color="blackAlpha.900" maxW="500" textAlign="left" fontSize="20px" mt="15px" fontWeight={660}>
              Accurate nutrition data
            </Text>
            <Text color="blackAlpha.900" fontSize="16px" mt="15px" textAlign="left" marginTop="-0.5">
              Be confident that the food you log has the correct nutrition data.
              We verify every food submission for accuracy.
            </Text>{" "}
            </div>
          </Box>
          <Box width="100%" h="100%" display="flex" gap="26px" alignItems="center" marginTop="-100">
            {" "}
            <Image
              src="https://cdn1.cronometer.com/webflow/checkmark.svg"
              maxW="35px"
              h="35px"
              alt="icon"
              marginLeft="20px"
              
            />{" "}
            <div display='flex'>
            <Text color="blackAlpha.900" maxW="500" textAlign="left" fontSize="20px" mt="15px" fontWeight={660}>
              Data privacy & security
            </Text>
            <Text  color="blackAlpha.900" fontSize="16px" mt="15px" textAlign="left" marginTop="-0.5">
              We take the security of our users' accounts seriously - we will
              never sell your account data to third parties.
            </Text>
            </div>
          </Box>
        </Center>
        </div>
      </Container>
      <Container
        maxW="100%"
        h="260px"
        marginTop="60"
        bg="whiteAlpha.900"
        textAlign="center"
        pt="50px"
        backgroundColor="#262a3b"
      >
        <Text
          color="white"
          fontSize="24px"
          maxW="600px"
          m="auto"
          fontWeight="400"
        >
          Find out if you're getting the vitamins and minerals you need with our
          food diary app.
        </Text>
        <Center
          h="50px"
          maxW="350px"
          bg="#44d07bff"
          m="auto"
          mt="30px"
          fontSize="22.5px"
          fontWeight="600"
          // boxShadow="dark-lg"
          p="6"
          rounded="md"
        >
          <Link to="/signup">Sign Up-It's Free</Link>
        </Center>
      </Container>

      <Container maxW="100%" h="400px" bg="white" textAlign="center" pt="50px">
        <Text
          color="blackAlpha.800"
          fontSize="34px"
          maxW="750px"
          m="auto"
          fontWeight="800"
        >
          Sync with Apps and Devices
        </Text>
        <Image
          src="https://cdn1.cronometer.com/webflow/cronometer-devices-3-p-1600.png"
          maxW="1000px"
          margin="auto"
          mt="30px"
        />
      </Container>
      <Container
        maxW="100%"
        bg="#fafbff"
        h="auto"
        textAlign="center"
        pt="50px"
        pb="50px"
        marginBottom="50px"
      >
        <Text color="blackAlpha.800" fontSize="42px" as="b">
          Calomate Review
        </Text>

        
        <Flex
          maxW="1100px"
          boxShadow="lightGrey 4px 4px 6px 6px"
          p="8"
          rounded="md"
          bg="white"
          h="auto"
          m="auto"
          mt="50px"
          justifyContent="space-between"
          
        >
          <Center maxW="50%" h="100%" display="block" margin="auto" >
            {" "}
            <Text fontSize="20px" color="#005c5c"  mt="50px" fontWeight="500">
            A great all-in-one health app!
            </Text>
            <Image
              src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"
              w="150px"
              m="auto"
              mt="25px"
            />
          </Center>
          <Box maxW="50%" h="100%">
            <Text color="blackAlpha.900" fontSize="18px"  textAlign="left">
              After leaving SparkPeople, I came here. I love that it is Canadian, includes fasting,
              can import recipes, gives me macro details, and more. This is my daily tracking app.
            </Text>
            <Text color="blackAlpha.900" fontWeight="650" textAlign="left" mt="25px">
              iOS Review
            </Text>
          </Box>
        </Flex>
        <Flex
          maxW="1100px"
          boxShadow="lightGrey 4px 4px 6px 6px"
          p="8"
          rounded="md"
          bg="white"
          h="auto"
          m="auto"
          mt="50px"
          justifyContent="space-between"
          marginBottom="50px"
        >
          <Box maxW="50%" h="100%">
            <Text color="blackAlpha.900" fontSize="18px" textAlign="left">
            Awesome. Getting direct feedback when you track your food really opens your eyes to what you're putting in your body.
            The modularity and ability to track macros, micros, and calories in -calories out makes this an invaluable tool for any nutritional goal.
            </Text>
            <Text color="blackAlpha.900" fontWeight="650" textAlign="left" mt="25px">
              Android Review
            </Text>
          </Box>
          <Center maxW="50%" h="100%" display="block">
            {" "}
            <Text
              fontSize="20px" maxW="90%" color="#005c5c"  mt="50px" fontWeight="500" marginRight="-30px">
              Whether that's bodybuilding, weight loss, endurance training, or just maintenance – everyone should be using Calomate.
            </Text>
            <Image
              src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"
              w="150px"
              m="auto"
              mt="25px"
            />
          </Center>
        </Flex>
      </Container>

      <Container
        maxW="100%"
        h="500px"
        marginBottom="52"
        textAlign="center"
        pt="50px"
      >
        <Flex m="auto" maxW="1050px" justifyContent="space-between">
          <Box m="auto" maxW="50%" marginRight="28">
            <Image
              src="https://cdn1.cronometer.com/webflow/Cronometer-Pro-Logo.svg"
              w="340px"
              m="auto"
              mt="25px"
            />
            <Text
              color="blackAlpha.800"
              fontSize="25px"
              fontWeight="400"
              mt="25px"
            >
              For Health Professional?
            </Text>
            <Text
              color="blackAlpha.900"
              textAlign="center"
              fontSize="17.5px"
              mt="15px"
            >
              Client diet management for nutritionists, dietitians, research teams, schools, and hospitals.
            </Text>
            <Center
              maxW="200px"
              m="auto"
              style={{border:"1px solid black"}}
              p="2"
              rounded="md"
              bg="white"
              color="black"
              mt="25px"
              fontSize="20px"
            >
              Learn About Pro
            </Center>
          </Box>
          <Box m="auto" maxW="55%" marginRight="-28" >
            <Image
              src="https://cdn1.cronometer.com/webflow/pro-hero-1-1.png"
              w="120%"
              m="auto"
              mt="25px"
            />
          </Box>
          <Box maxW="90%">
            <hr></hr>
          </Box>
        </Flex>
      </Container>
      <Fotter/>
    </div>
  );
}
export default Home;
