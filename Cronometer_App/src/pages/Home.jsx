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
            <Text fontSize="50px " as="b" color="blackAlpha.800">
              Eat smarte,
            </Text>
            <br />
            <Text fontSize="50px" as="b" color="blackAlpha.800">
              Live better
            </Text>
            <Text color="black" fontSize="30px">
              Track your calories, exercise,
            </Text>
            <Text color="black" fontSize="30px">
              biometrics and health data.
            </Text>
            <Button
              bgColor="tomato"
              fontSize="20px"
              mt="50px"
              w="300px"
              h="50px"
            >
              <Link to="/signup">Sign UP-It's Free!</Link>
            </Button>
            <Text color="black" mt="30px">
              Already have an account?
              <span>
                <Link to="/login">Log in.</Link>
              </span>
            </Text>
          </Box>

          <Box w="50%">
            <Image
              src="https://cdn1.cronometer.com/2021/landing/cronometer-hero-graphic.svg"
              height="500px"
              maxW="600px"
              alt="Dan Abramov"
            />
          </Box>
        </Flex>
      </Container>
      <Container bg="white" maxW="100%" h="400px" textAlign="center" pt="30px">
        <Text color="blackAlpha.900" fontSize="25px">
          As Seen On
        </Text>
        <Center h="70px" gap={4} mt="30px">
          <GridItem w="300px" h="100%">
            <Image
              w="80%"
              src="https://cdn1.cronometer.com/2021/landing/media-mention-2.svg"
            />
          </GridItem>
          <GridItem w="300px" h="100%">
            <Image
              w="80%"
              src="https://cdn1.cronometer.com/2021/landing/media-mention-1.svg"
            />
          </GridItem>
          <GridItem w="300px" h="100%">
            <Image
              w="80%"
              src="https://cdn1.cronometer.com/2021/landing/media-mention-3.svg"
            />{" "}
          </GridItem>
        </Center>
        <Text color="blackAlpha.900" fontSize="25px" mt="45px">
          Available on Web, iOS and Android
        </Text>
        <Center h="70px" w="100%" mt="30px" gap="20px">
          <GridItem w="160px" h="100%">
            <Image
              w="100%"
              src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"
            />
          </GridItem>
          <GridItem w="160px" h="100%">
            <Image
              w="100%"
              src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"
            />
          </GridItem>
        </Center>
      </Container>
      <Container
        bg="whiteAlpha.900"
        maxW="100%"
        h="500px"
        textAlign="center"
        pt="30px"
      >
        <Text color="blackAlpha.800" fontSize="30px" as="b">
          Discover your nutrition
        </Text>

        <Text
          width="500px"
          color="black"
          textAlign="center"
          m="auto"
          fontSize="20px"
        >
          Cronometer encourages you to not just count your calories but to focus
          on your nutrition as a whole.
        </Text>
        <Center maxW="1100px" h="300px" margin="auto" mt="50px">
          <Box width="33.33%" h="100%">
            <Image
              src="https://cdn1.cronometer.com/2021/landing/community-icon.svg"
              maxW="80px"
              h="80px"
              alt="icon"
              margin="auto"
            ></Image>
            <Text color="blackAlpha.900" fontSize="25px" mt="15px">
              Over 5 million users
            </Text>
            <Text color="blackAlpha.900" fontSize="20px" mt="15px">
              Join the community to get tips and inspiration from other users on
              our forums and Facebook group.
            </Text>
          </Box>
          <Box width="33.33%" h="100%">
            {" "}
            <Image
              src="https://cdn1.cronometer.com/2021/landing/nutrition-icon.svg"
              maxW="75px"
              h="75px"
              alt="icon"
              margin="auto"
            />{" "}
            <Text color="blackAlpha.900" fontSize="25px" mt="15px">
              Accurate nutrition data
            </Text>
            <Text color="blackAlpha.900" fontSize="20px" mt="15px">
              Be confident that the food you log has the correct nutrition data.
              We verify every food submission for accuracy.
            </Text>{" "}
          </Box>
          <Box width="33.33%" h="100%">
            {" "}
            <Image
              src="https://cdn1.cronometer.com/2021/landing/security-icon.svg"
              maxW="75px"
              h="75px"
              alt="icon"
              margin="auto"
            />{" "}
            <Text color="blackAlpha.900" fontSize="25px" mt="15px">
              Data privacy & security
            </Text>
            <Text color="blackAlpha.900" fontSize="20px" mt="15px">
              We take the security of our users' accounts seriously - we will
              never sell your account data to third parties.
            </Text>
          </Box>
        </Center>
      </Container>

      <Container bg="white" maxW="100%" h="800px" textAlign="center" pt="30px">
        <Text color="blackAlpha.800" fontSize="30px" as="b">
          Develop healthy habits
        </Text>

        <Text
          width="500px"
          color="black"
          textAlign="center"
          m="auto"
          fontSize="20px"
        >
          Count your calories, ensure you're meeting nutrient targets, and see
          your progress over time.
        </Text>
        <Center maxW="1100px" h="300px" margin="auto" mt="50px">
          <Box width="33.33%" h="100%">
            <Image
              src="https://cdn1.cronometer.com/2021/landing/micronutrients-icon.svg"
              maxW="80px"
              h="80px"
              alt="icon"
              margin="auto"
            ></Image>
            <Text color="blackAlpha.900" fontSize="25px" mt="15px">
              Track up to 82 micronutrients
            </Text>
            <Text color="blackAlpha.900" fontSize="20px" mt="15px">
              Log your meals and track all your macro and micronutrients.
            </Text>
          </Box>
          <Box width="33.33%" h="100%">
            {" "}
            <Image
              src="https://cdn1.cronometer.com/2021/landing/diary-icon.svg"
              maxW="75px"
              h="75px"
              alt="icon"
              margin="auto"
            />{" "}
            <Text color="blackAlpha.900" fontSize="25px" mt="15px">
              Log meals, exercise and biometrics
            </Text>
            <Text color="blackAlpha.900" fontSize="20px" mt="15px">
              Plus, you can create custom foods, recipes, exercises and
              biometrics!
            </Text>{" "}
          </Box>
          <Box width="33.33%" h="100%">
            {" "}
            <Image
              src="https://cdn1.cronometer.com/2021/landing/reports-icon.svg"
              maxW="75px"
              h="75px"
              alt="icon"
              margin="auto"
            />{" "}
            <Text color="blackAlpha.900" fontSize="25px" mt="15px">
              Valuable reports and charts
            </Text>
            <Text color="blackAlpha.900" fontSize="20px" mt="15px">
              Learn how nutrients and biometrics correlate over time.
            </Text>
          </Box>
        </Center>
        <Center maxW="1100px" h="300px" margin="auto" mt="50px">
          <Box width="33.33%" h="100%">
            <Image
              src="https://cdn1.cronometer.com/2021/landing/scale-icon.svg"
              maxW="80px"
              h="80px"
              alt="icon"
              margin="auto"
            ></Image>
            <Text color="blackAlpha.900" fontSize="25px" mt="15px">
              Custom diet settings
            </Text>
            <Text color="blackAlpha.900" fontSize="20px" mt="15px">
              Set weight, macro & nutrient targets to meet your goals.
            </Text>
          </Box>
          <Box width="33.33%" h="100%">
            {" "}
            <Image
              src="https://cdn1.cronometer.com/2021/landing/fasting-icon.svg"
              maxW="75px"
              h="75px"
              alt="icon"
              margin="auto"
            />{" "}
            <Text color="blackAlpha.900" fontSize="25px" mt="15px">
              Fasting timer
            </Text>
            <Text color="blackAlpha.900" fontSize="20px" mt="15px">
              Track your intermittent fasts and see their effect over time.
            </Text>{" "}
          </Box>
          <Box width="33.33%" h="100%">
            {" "}
            <Image
              src="https://cdn1.cronometer.com/2021/landing/food-icon.svg"
              maxW="75px"
              h="75px"
              alt="icon"
              margin="auto"
            />{" "}
            <Text color="blackAlpha.900" fontSize="25px" mt="15px">
              Diet support
            </Text>
            <Text color="blackAlpha.900" fontSize="20px" mt="15px">
              Whether you’re Keto, Vegan, or on one recommended by your doctor.
            </Text>
          </Box>
        </Center>
      </Container>
      <Container
        maxW="100%"
        h="350px"
        bg="whiteAlpha.900"
        textAlign="center"
        pt="50px"
      >
        <Text
          color="blackAlpha.800"
          fontSize="30px"
          maxW="650px"
          m="auto"
          fontWeight="600"
        >
          Find out if you're getting the vitamins and minerals you need with our
          food diary app.
        </Text>
        <Center
          h="50px"
          maxW="500px"
          bg="tomato"
          m="auto"
          mt="30px"
          fontSize="24px"
          fontWeight="600"
          boxShadow="dark-lg"
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
          fontWeight="600"
        >
          Sync with Apps and Devices
        </Text>
        <Text color="blackAlpha.800" fontSize="22px" mt="25px">
          Sync Cronometer with these activity trackers, Apple Health, Google Fit
          and Samsung Health.
        </Text>
        <Image
          src="https://cdn1.cronometer.com/2021/landing/devices-p-1600.png"
          maxW="900px"
          margin="auto"
          mt="30px"
        />
        <Box
          maxW="1000px"
          m="auto"
          borderBottom="1px solid black"
          h="50px"
        ></Box>
      </Container>
      <Container
        maxW="100%"
        bg="white"
        h="auto"
        textAlign="center"
        pt="50px"
        pb="50px"
      >
        <Text color="blackAlpha.800" fontSize="30px" as="b">
          Develop healthy habits
        </Text>

        <Text
          width="500px"
          color="black"
          textAlign="center"
          m="auto"
          fontSize="20px"
        >
          Count your calories, ensure you're meeting nutrient targets, and see
          your progress over time.
        </Text>
        <Flex
          maxW="1100px"
          boxShadow="2xl"
          p="8"
          rounded="md"
          bg="white"
          h="auto"
          m="auto"
          mt="50px"
        >
          <Center maxW="50%" h="100%" display="block">
            {" "}
            <Text fontSize="32px" color="tomato" textAlign="left" mt="50px">
              I wasn't the only one concerned about the unreliability of the
              macros in both MyFitnessPal and Carb Manager.
            </Text>
            <Image
              src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"
              w="150px"
              m="auto"
              mt="25px"
            />
          </Center>
          <Box maxW="50%" h="100%">
            <Text color="blackAlpha.900" fontSize="19px" textAlign="left">
              I started Keto in July. MyFitnessPal seemed pretty cool. Spent
              hours setting it up and entering recipes only to discover the
              macros were not reliable due to all the contributions by the
              community. I was so frustrated. Then I found a review of several
              apps (on the Keto Mojo website) and discovered I wasn't the only
              one concerned about unreliability of the macros on both MFP and
              CarbManager (tried that too). Behold Cronometer! I love this app.
              It draws from nutrition databases with minimal community
              contributions so much, much more reliability. There are many more
              free features. The user interface is easy to navigate. I'm very
              happy with Cronometer.
            </Text>
            <Text color="blackAlpha.900" textAlign="left" mt="25px">
              iOS Review
            </Text>
            <Text color="blackAlpha.900" textAlign="left">
              September 23, 2019
            </Text>
          </Box>
        </Flex>
        <Flex
          maxW="1100px"
          boxShadow="2xl"
          p="8"
          rounded="md"
          bg="white"
          h="auto"
          m="auto"
          mt="50px"
        >
          <Box maxW="50%" h="100%">
            <Text color="blackAlpha.900" fontSize="19px" textAlign="left">
              This app is my dream! I've been on the hunt for something that can
              track my daily nutritional needs and the majority of apps seem to
              think that only means macros. This tracks EVERYTHING! Getting my
              daily vitamins through food is so important to me and this has
              taken a HUGE load off of my plate. I bought gold within minutes.
              This is set up great, easy to use, links with my FitBit. I could
              go on and on.
            </Text>
            <Text color="blackAlpha.900" textAlign="left" mt="25px">
              Android Review
            </Text>
            <Text color="blackAlpha.900" textAlign="left">
              November 23, 2020
            </Text>
          </Box>
          <Center maxW="50%" h="100%" display="block">
            {" "}
            <Text
              fontSize="32px"
              color="tomato"
              textAlign="left"
              mt="50px"
              ml="25px"
            >
              Cronometer tracks EVERYTHING! ... It's easy to use and links with
              my FitBit.
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
        h="400px"
        bg="#f8f8f8"
        textAlign="center"
        pt="50px"
      >
        <Flex m="auto" maxW="900px">
          <Box m="auto" maxW="50%">
            <Image
              src="https://cdn1.cronometer.com/2021/landing/crono-pro-graphic.svg"
              w="300px"
              m="auto"
              mt="25px"
            />
          </Box>
          <Box m="auto" maxW="50%">
            <Image
              src="https://cdn1.cronometer.com/2021/landing/cronometer-pro-logo.svg"
              w="250px"
              m="auto"
              mt="25px"
            />
            <Text
              color="blackAlpha.900"
              fontSize="25px"
              fontWeight="bold"
              mt="25px"
            >
              Are you a healthcare professional?
            </Text>
            <Text
              color="blackAlpha.900"
              textAlign="center"
              fontSize="20px"
              mt="15px"
            >
              Check out our software designed for nutritionists, dietitians,
              research teams, schools, and hospitals.
            </Text>
            <Center
              maxW="200px"
              m="auto"
              boxShadow="dark-lg"
              p="2"
              rounded="md"
              bg="white"
              color="tomato"
              mt="25px"
              fontWeight="bold"
              fontSize="20px"
            >
              Learn About Pro
            </Center>
          </Box>
        </Flex>
      </Container>

      <Container maxW="100%" bg="white" h="auto" pt="50px" pb="50px">
        <Text
          color="blackAlpha.900"
          textAlign="center"
          fontSize="28px"
          fontWeight="bold"
        >
          We are Canadian
        </Text>
        <Text
          width="600px"
          color="black"
          textAlign="center"
          m="auto"
          fontSize="26px"
        >
          Independently owned and operated by people who care about their users'
          nutrition.
        </Text>
        <Image
          src="https://cdn1.cronometer.com/2021/landing/cronometer-staff-2-p-1600.jpeg"
          maxW="1000px"
          m="auto"
          mt="50px"
        />
        <Text
          width="1000px"
          color="black"
          textAlign="center"
         
          m="auto"
          mt="50px"
          fontSize="18px"
        >
          Our headquarters are based in the idyllic mountain town of Revelstoke,
          BC, Canada. We are a team of over 25 professionals brought together by
          a love of nutrition, skiing, biking and the great outdoors.
        </Text>
        <Center
              maxW="200px"
              m="auto"
              boxShadow="dark-lg"
              p="2"
              rounded="md"
              bg="white"
              color="tomato"
              mt="25px"
              fontWeight="bold"
              fontSize="20px"
            >
              About Us
            </Center>
            <Box
                maxW="1000px"
                m="auto"
                borderBottom="1px solid black"
                h="50px"
            ></Box>
            <Text
                width="1000px"
                color="black"
                textAlign="center"
                m="auto"
                mt="50px"
                fontSize="22px"
            >
            Help us spread the good word about nutrition and become an affiliate.
            </Text>
                <Center
                    maxW="400px"
                    m="auto"
                    boxShadow="dark-lg"
                    p="2"
                    rounded="md"
                    bg="white"
                    color="tomato"
                    mt="25px"
                    fontWeight="bold"
                    fontSize="20px"
                >
                Become an Affiliate

            </Center>
        </Container>
      <Fotter/>
    </div>
  );
}
export default Home;
