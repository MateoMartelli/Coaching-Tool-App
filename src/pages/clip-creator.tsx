import { NextPage } from "next";
import dynamic from "next/dynamic";
import { FC, useState } from "react";
import {
  Flex,
  Input,
  FormControl,
  Button,
  Spinner,
  FormErrorMessage,
  Text,
  Link,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
  Grid,
  Box,
} from "@chakra-ui/react";
import { Formik, Field, Form, FieldProps } from "formik";
import LoginForm from "../components/login-form";
import LoginRegLayout from "../layouts/login-register-layouts";
import HomeLayout from "../layouts/home-layout";
import ArrowButtonVertical from "../components/arrow-button-vertical";
// import ReactPlayer from "react-player";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const ClipCreator: NextPage = () => {
  const defaultValue = [10, 30];
  const [sliderValue, setSliderValue] = useState(defaultValue);
  const [isShownLeft, setIsShownLeft] = useState(false);
  const [isShownRight, setIsShownRight] = useState(false);
  const [isActiveTop, setIsActiveTop] = useState(true);
  const [displayedURL, setDisplayedURL] = useState("");
  const handleToggleTop = () => {
    setIsActiveTop((prev) => !prev);
  };

  return (
    <HomeLayout>
      <Grid
        // bgColor="red"
        w="100%"
        h="100%"
        gridTemplateColumns="15fr 5fr"
        // gridTemplateRows="3fr 7fr"
        // gridTemplateRows={isActiveTop ? "3fr 7fr" : "25px 1fr"}
        transition="all 0.7s"
      >
        <Flex gridColumn="1 / 2" flexDir="column">
          <Flex
            w="100%"
            h={isActiveTop ? "30%" : "25px"}
            // bgColor="green"
            flexDir="column"
            alignItems="center"
            paddingInline="2px"
            transition="all 1s"
          >
            <Flex
              w="100%"
              h={isActiveTop ? "100%" : "0"}
              bgColor="lightMode.trueIce2"
              borderWidth={isActiveTop ? "3px" : "0"}
              borderTop="none"
              borderBottomRadius="8px"
              borderColor="lightMode.trueIce1"
              transition="all 1s"
            >
              <Flex
                w="100%"
                color="white"
                flexDir="column"
                overflow="hidden"
                transform={
                  isActiveTop ? "translate(0)" : "translate(0, -500px )"
                }
              >
                <Flex
                  marginTop="0.5rem"
                  flexDir="row"
                  w="100%"
                  alignItems="center"
                >
                  <Text marginLeft="1.5rem" fontWeight="bold">
                    URL
                  </Text>
                  <Input
                    h="2rem"
                    marginInline="1.5rem"
                    onBlur={({ target }) => setDisplayedURL(target.value)}
                  ></Input>
                </Flex>
                <Flex
                  marginTop="0.5rem"
                  flexDir="row"
                  w="100%"
                  alignItems="center"
                  justify="center"
                >
                  <Text fontSize="1.2rem" fontWeight="bold">
                    BLUE
                  </Text>
                  <Input
                    h="2rem"
                    w="9rem"
                    marginLeft="1rem"
                    textAlign="center"
                  ></Input>
                  <Text marginLeft="1rem" fontWeight="bold">
                    vs
                  </Text>
                  <Text marginLeft="1rem" fontSize="1.2rem" fontWeight="bold">
                    RED
                  </Text>
                  <Input
                    h="2rem"
                    w="9rem"
                    marginLeft="1rem"
                    textAlign="center"
                  ></Input>
                </Flex>
                <Flex
                  marginTop="0.5rem"
                  flexDir="row"
                  w="100%"
                  justify="space-between"
                >
                  <Flex alignItems="center">
                    <Text marginLeft="1.5rem" fontWeight="bold">
                      League
                    </Text>
                    <Input
                      textAlign="center"
                      h="2rem"
                      w="4rem"
                      marginLeft="1rem"
                    ></Input>
                    <Text marginLeft="1.5rem" fontWeight="bold">
                      -
                    </Text>
                    <Text marginLeft="1.5rem" fontWeight="bold">
                      Week
                    </Text>
                    <Input
                      textAlign="center"
                      h="2rem"
                      w="4rem"
                      marginLeft="1rem"
                    ></Input>
                    <Text marginLeft="1.5rem" fontWeight="bold">
                      -
                    </Text>
                    <Text marginLeft="1.5rem" fontWeight="bold">
                      Game
                    </Text>
                    <Input
                      textAlign="center"
                      h="2rem"
                      w="4rem"
                      marginLeft="1rem"
                    ></Input>
                    <Text marginLeft="1.5rem" fontWeight="bold">
                      -
                    </Text>
                    <Text marginLeft="1.5rem" fontWeight="bold">
                      Patch
                    </Text>
                    <Input
                      textAlign="center"
                      h="2rem"
                      w="4rem"
                      marginLeft="1rem"
                    ></Input>
                  </Flex>
                  <Flex>
                    <Button
                      fontWeight="bold"
                      w="3.8rem"
                      h="2rem"
                      bgColor="lightMode.lightBlue2"
                      marginRight="1.5rem"
                      borderRadius="8px"
                    >
                      Save
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex>
              <ArrowButtonVertical
                isActive={isActiveTop}
                handleClick={handleToggleTop}
              />
            </Flex>
          </Flex>

          <Flex
            w="100%"
            h="100%"
            gridColumn="1 / 2"
            // bgColor="yellow"
            flexDir="column"
            paddingInline="2px"
            transition="all 1s"
          >
            <Flex
              visibility={displayedURL ? "visible" : "hidden"}
              height="99%"
              width={isActiveTop ? "83%" : "100%"}
              transition="all 1s"
              bgColor="lightMode.trueIce3"
              padding="4px"
              borderWidth="3px"
              borderRadius="8px"
              borderColor="lightMode.trueIce1"
              flexDir="column"
              alignItems="center"
              marginTop="4px"
            >
              <ReactPlayer url={displayedURL} height="100%" width="100%" />
              <RangeSlider
                marginTop="8px"
                w="98%"
                aria-label={["min", "max"]}
                defaultValue={defaultValue}
                onChange={(val) => setSliderValue(val)}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb
                  index={0}
                  onMouseEnter={() => setIsShownLeft(true)}
                  onMouseLeave={() => setIsShownLeft(false)}
                />
                <RangeSliderThumb
                  index={1}
                  onMouseEnter={() => setIsShownRight(true)}
                  onMouseLeave={() => setIsShownRight(false)}
                />
                {isShownLeft && (
                  <RangeSliderMark
                    value={sliderValue[0]}
                    textAlign="center"
                    bg="blue.500"
                    color="white"
                    mt="-9"
                    ml="-6"
                    w="12"
                  >
                    {sliderValue[0]}%
                  </RangeSliderMark>
                )}
                {isShownRight && (
                  <RangeSliderMark
                    value={sliderValue[1]}
                    textAlign="center"
                    bg="blue.500"
                    color="white"
                    mt="-9"
                    ml="-6"
                    w="12"
                  >
                    {sliderValue[1]}%
                  </RangeSliderMark>
                )}
              </RangeSlider>
            </Flex>
          </Flex>
        </Flex>
        <Flex w="100%" gridColumn="2 / 3" bgColor="blue"></Flex>
      </Grid>
      {/* <Flex w="100%" h="100%" flexDir="row">
        <Flex h="100%" flexDir="column" w="1000px" paddingLeft="5px">
          <Flex w="100%" h="20%" bgColor="pink"></Flex>
          <Flex w="100%" flexDir="column">
            <ReactPlayer url="https://www.youtube.com/embed/gQYdf4h9wMw" />

            <RangeSlider
              w="998px"
              aria-label={["min", "max"]}
              defaultValue={defaultValue}
              onChange={(val) => setSliderValue(val)}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb
                index={0}
                onMouseEnter={() => setIsShownLeft(true)}
                onMouseLeave={() => setIsShownLeft(false)}
              />
              <RangeSliderThumb
                index={1}
                onMouseEnter={() => setIsShownRight(true)}
                onMouseLeave={() => setIsShownRight(false)}
              />
              {isShownLeft && (
                <RangeSliderMark
                  value={sliderValue[0]}
                  textAlign="center"
                  bg="blue.500"
                  color="white"
                  mt="3"
                  ml="-6"
                  w="12"
                >
                  {sliderValue[0]}%
                </RangeSliderMark>
              )}
              {isShownRight && (
                <RangeSliderMark
                  value={sliderValue[1]}
                  textAlign="center"
                  bg="blue.500"
                  color="white"
                  mt="3"
                  ml="-6"
                  w="12"
                >
                  {sliderValue[1]}%
                </RangeSliderMark>
              )}
            </RangeSlider>
          </Flex>
        </Flex>
        <Flex w="100%" h="100%" bgColor="red"></Flex>
      </Flex> */}
    </HomeLayout>
  );
};

export default ClipCreator;
