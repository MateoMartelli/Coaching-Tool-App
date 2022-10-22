import type { NextPage } from "next";
import { useState } from "react";
import { Formik, Field, Form, FieldProps } from "formik";
import Image from "next/image";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import Header from "../components/header";
import ExpButton from "../components/exp-button";
import HomeLayout from "../layouts/home-layout";
import ArrowButton from "../components/arrow-button";
import ContactsSection from "../components/contacts-section";
import { CalendarIcon } from "@chakra-ui/icons";
import UsersIcon from "../components/users-icon";
import useMock from "../utilis/mocks";

const Home: NextPage = () => {
  const [isActiveSch, setIsActiveSch] = useState(false);

  const handleToggleSch = () => {
    setIsActiveSch((prev) => !prev);
  };

  const [isActiveCont, setIsActiveCont] = useState(false);

  const { userClip } = useMock();

  const handleToggleCont = () => {
    setIsActiveCont((prev) => !prev);
  };
  return (
    <HomeLayout>
      <Flex h="90%" gap="10px">
        <Flex
          h="87%"
          // bgColor="black"
          color="white"
          flexDir="column"
          paddingLeft="0.8rem"
          // position="absolute"
        >
          <ExpButton>Workplace</ExpButton>
          <ExpButton>Library</ExpButton>
          <ExpButton>Meeting</ExpButton>
          <ExpButton>Data</ExpButton>
          <ExpButton>Manager</ExpButton>
          <ExpButton>Support</ExpButton>
        </Flex>
        <Flex
          justify="center"
          maxH="90%"
          w="100%"
          bgColor="transparent"
          color="white"
          marginRight="4.8rem"
          // marginLeft="4.8rem"
          marginBottom="0.5rem"
          marginTop="0.5rem"
        >
          <Flex
            h="100%"
            w="100%"
            bgColor="transparent"
            // borderColor="lightMode.trueIce1"
            // borderWidth="3px"
            // borderRadius="8px"
            marginRight="5px"
            flexDir="column"
            align="center"
          >
            <Flex
              color="lightMode.snowBG3"
              bgColor="lightMode.trueIce1"
              borderColor="lightMode.trueIce1"
              borderWidth="2px"
              borderRadius="0.5rem"
              w="40%"
              h="6%"
              marginTop="0.3rem"
              marginBottom="0.5rem"
              justify="center"
              align="center"
              fontSize="2.45rem"
              fontWeight="bold"
            >
              TEAM CONTENT
            </Flex>
            <Grid
              h="100%"
              w="95%"
              bgColor="lightMode.snowBG2"
              marginRight="5px"
              gap="1px"
              gridTemplateColumns="1fr 1fr 1fr"
              gridTemplateRows="1fr 1fr 1fr"
              overflowY={userClip.length > 9 ? "scroll" : undefined}
              borderRadius="0.8rem"
              borderWidth="2px"
              borderColor="lightMode.trueIce1"
              p="1rem"
            >
              {userClip.map(({ user, clip }) => (
                <Flex
                  h="235px"
                  marginInline="6px"
                  marginBlock="5px"
                  flexDir="column"
                  bgColor="lightMode.snowBG3"
                  borderRadius="1rem"
                  cursor="pointer"
                  overflow="clip"
                  boxShadow="1px 1px 4px gray"
                >
                  <Flex h="63%" w="100%">
                    <Image src={`${clip.url}`} height="100%" width="1000%" />
                  </Flex>
                  <Flex
                    flexDir="column"
                    color="lightMode.trueIce1"
                    fontWeight="bold"
                    paddingInline="1rem"
                  >
                    <Text fontSize="1.3rem" marginTop="15px" lineHeight="0px">
                      {clip.teamBlue} vs {clip.teamRed} - {clip.league}
                    </Text>
                    <Text fontSize="1rem" marginTop="20px" lineHeight="0">
                      {clip.side}: {clip.tag.name}
                    </Text>
                    <Flex fontSize="0.8rem" marginTop="25px" lineHeight="0">
                      <Text>{user.username}</Text>

                      <Text>- {user.role.name}</Text>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </Grid>
          </Flex>

          <Flex
            h="100%"
            w="100%"
            bgColor="transparent"
            // borderColor="lightMode.trueIce1"
            // borderWidth="3px"
            // borderRadius="8px"
            marginRight="5px"
            flexDir="column"
            align="center"
          >
            <Flex
              color="lightMode.snowBG3"
              bgColor="lightMode.trueIce1"
              borderColor="lightMode.trueIce1"
              borderWidth="2px"
              borderRadius="0.5rem"
              w="40%"
              h="6%"
              marginTop="0.3rem"
              marginBottom="0.5rem"
              justify="center"
              align="center"
              fontSize="2.45rem"
              fontWeight="bold"
            >
              LANE CONTENT
            </Flex>
            <Grid
              h="100%"
              w="95%"
              bgColor="lightMode.snowBG2"
              marginRight="5px"
              gap="1px"
              gridTemplateColumns="1fr 1fr 1fr"
              gridTemplateRows="1fr 1fr 1fr"
              overflowY={userClip.length > 9 ? "scroll" : undefined}
              borderRadius="0.8rem"
              borderWidth="2px"
              borderColor="lightMode.trueIce1"
              p="1rem"
            >
              {userClip.map(({ user, clip }) => (
                <Flex
                  h="235px"
                  marginInline="6px"
                  marginBlock="5px"
                  flexDir="column"
                  bgColor="lightMode.snowBG3"
                  borderRadius="1rem"
                  cursor="pointer"
                  overflow="clip"
                  boxShadow="1px 1px 4px gray"
                >
                  <Flex h="63%" w="100%">
                    <Image src={`${clip.url}`} height="100%" width="1000%" />
                  </Flex>
                  <Flex
                    flexDir="column"
                    color="lightMode.trueIce1"
                    fontWeight="bold"
                    paddingInline="1rem"
                  >
                    <Text fontSize="1.3rem" marginTop="15px" lineHeight="0px">
                      {clip.teamBlue} vs {clip.teamRed} - {clip.league}
                    </Text>
                    <Text fontSize="1rem" marginTop="20px" lineHeight="0">
                      {clip.side}: {clip.tag.name}
                    </Text>
                    <Flex fontSize="0.8rem" marginTop="25px" lineHeight="0">
                      <Text>{user.username}</Text>

                      <Text>- {user.role.name}</Text>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </Grid>
          </Flex>
        </Flex>

        <Flex flexDir="column" position="absolute" right="0" h="85%" w="296px">
          <Flex
            justify="flex-end"
            flexDir="row"
            h="20%"
            marginTop="1.5rem"
            overflow="hidden"
          >
            <Flex>
              <ArrowButton
                Icon={CalendarIcon}
                handleClick={handleToggleSch}
                isActive={isActiveSch}
              />
            </Flex>
            <Flex
              w={isActiveSch ? "16rem" : "0"}
              // h={isActiveSch ? "100%" : "0"}
              bgColor={isActiveSch ? "lightMode.lightBlue1" : "transparent"}
              borderColor="lightMode.trueIce1"
              borderWidth={isActiveSch ? "3px" : "0"}
              p={isActiveSch ? "20px" : "0"}
              borderRight="none"
              borderBottomLeftRadius="md"
              overflow="hidden"
              transition="all 0.5s"
            >
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </Flex>
          </Flex>

          <Flex
            flexDir="row"
            // h="600px"
            h="80%"
            marginTop="1.5rem"
            w="100%"
            justify="flex-end"
          >
            <Flex>
              <ArrowButton
                Icon={UsersIcon}
                handleClick={handleToggleCont}
                isActive={isActiveCont}
              />
            </Flex>
            <Flex
              w={isActiveCont ? "16rem" : 0}
              borderBottomLeftRadius="md"
              transition="all 0.5s"
              overflow="hidden"
            >
              <ContactsSection isActive={isActiveCont} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </HomeLayout>
  );
};

export default Home;
