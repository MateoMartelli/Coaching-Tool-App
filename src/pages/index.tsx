import type { NextPage } from "next";
import { useState, useRef, useLayoutEffect } from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import ExpButton from "../components/exp-button";
import HomeLayout from "../layouts/home-layout";
import ContactsSection from "../components/contacts-section";
import { CalendarIcon } from "@chakra-ui/icons";
import UsersIcon from "../components/users-icon";
import useMock from "../utilis/mocks";
import Calendar from "../components/calendar";
import ArrowButtonHorizontal from "../components/arrow-button-horizontal";

const Home: NextPage = () => {
  const [isActiveSch, setIsActiveSch] = useState(false);

  const [height, setHeight] = useState(0);

  const ref = useRef<HTMLHeadingElement>(null);

  const columns = 3;
  const rows = 3;

  const handleToggleSch = () => {
    setIsActiveSch((prev) => !prev);
  };

  const [isActiveCont, setIsActiveCont] = useState(false);

  const { userClip } = useMock();

  const handleToggleCont = () => {
    setIsActiveCont((prev) => !prev);
  };

  useLayoutEffect(() => {
    const h = ref.current ? ref.current.offsetHeight : 0;
    setHeight(h);
  });

  console.log(ref);

  return (
    <HomeLayout>
      <Flex
        justify="center"
        maxH="600px"
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
            marginTop="0.5rem"
            marginBottom="0.8rem"
            justify="center"
            align="center"
            fontSize="1.5rem"
            fontWeight="bold"
          >
            TEAM CONTENT
          </Flex>
          <Grid
            h="90%"
            w="95%"
            bgColor="lightMode.snowBG2"
            marginRight="5px"
            gap="1px"
            gridTemplateColumns={`repeat(${columns}, 1fr)`}
            gridTemplateRows={`repeat(${rows}, 1fr)`}
            overflowY={userClip.length > columns * rows ? "scroll" : undefined}
            borderRadius="0.8rem"
            borderWidth="2px"
            borderColor="lightMode.trueIce1"
            p="1rem"
            sx={{
              "::-webkit-scrollbar": {
                width: "11.5px",
              },
              "::-webkit-scrollbar-track": {},
              "::-webkit-scrollbar-thumb": {
                background: "lightMode.trueIce1",
                "border-radius": "8px 8px 8px 8px",
              },
            }}
            ref={ref}
          >
            {userClip.map(({ user, clip }) => (
              <Flex
                h={`${height / 3.2}px`}
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
                  <Text fontSize="1rem" lineHeight="0" marginTop="15px">
                    {clip.teamBlue} vs {clip.teamRed} - {clip.league}
                  </Text>
                  <Text fontSize=".8rem" lineHeight="0" marginTop="15px">
                    {clip.side}: {clip.tag.name}
                  </Text>
                  <Flex fontSize="0.6rem" lineHeight="0" marginTop="15px">
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
            marginTop="0.5rem"
            marginBottom="0.8rem"
            justify="center"
            align="center"
            fontSize="1.5rem"
            fontWeight="bold"
          >
            LANE CONTENT
          </Flex>
          <Grid
            h="90%"
            w="95%"
            bgColor="lightMode.snowBG2"
            marginRight="5px"
            gap="1px"
            gridTemplateColumns={`repeat(${columns}, 1fr)`}
            gridTemplateRows={`repeat(${rows}, 1fr)`}
            overflowY={userClip.length > columns * rows ? "scroll" : undefined}
            borderRadius="0.8rem"
            borderWidth="2px"
            borderColor="lightMode.trueIce1"
            p="1rem"
            sx={{
              "::-webkit-scrollbar": {
                width: "11.5px",
              },
              "::-webkit-scrollbar-track": {},
              "::-webkit-scrollbar-thumb": {
                background: "lightMode.trueIce1",
                "border-radius": "9px",
              },
            }}
          >
            {userClip.map(({ user, clip }) => (
              <Flex
                h={`${height / 3.2}px`}
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
                  <Text fontSize="1rem" lineHeight="0" marginTop="15px">
                    {clip.teamBlue} vs {clip.teamRed} - {clip.league}
                  </Text>
                  <Text fontSize=".8rem" lineHeight="0" marginTop="15px">
                    {clip.side}: {clip.tag.name}
                  </Text>
                  <Flex fontSize="0.6rem" lineHeight="0" marginTop="15px">
                    <Text>{user.username}</Text>

                    <Text>- {user.role.name}</Text>
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </Grid>
        </Flex>
      </Flex>

      <Flex
        flexDir="column"
        position="absolute"
        right="0"
        h="85%"
        w={isActiveSch || isActiveCont ? "325px" : "40px"}
        // bgColor="red"
      >
        <Flex
          justify="flex-end"
          flexDir="row"
          h="42%"
          minH="247px"
          marginTop="1.5rem"
          overflow="hidden"
        >
          <Flex>
            <ArrowButtonHorizontal
              Icon={CalendarIcon}
              handleClick={handleToggleSch}
              isActive={isActiveSch}
            />
          </Flex>
          <Calendar isActive={isActiveSch} />
        </Flex>

        <Flex
          flexDir="row"
          h="100%"
          w="100%"
          marginTop="1.5rem"
          justify="flex-end"
        >
          <Flex>
            <ArrowButtonHorizontal
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
      {/* </Flex> */}
    </HomeLayout>
  );
};

export default Home;
