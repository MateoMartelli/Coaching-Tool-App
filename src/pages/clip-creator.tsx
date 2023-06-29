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
  Select,
  Checkbox,
  CheckboxGroup,
  Stack,
  Radio,
  RadioGroup,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  StackDivider,
} from "@chakra-ui/react";
import { Formik, Field, Form, FieldProps } from "formik";
import LoginForm from "../components/login-form";
import LoginRegLayout from "../layouts/login-register-layouts";
import HomeLayout from "../layouts/home-layout";
import ArrowButtonVertical from "../components/arrow-button-vertical";
import { number } from "yup";
// import ReactPlayer from "react-player";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const ClipCreator: NextPage = () => {
  const maxValue = 1000;
  const defaultValue = [0, maxValue];
  const [sliderValue, setSliderValue] = useState(defaultValue);
  const [isShownLeft, setIsShownLeft] = useState(false);
  const [isShownRight, setIsShownRight] = useState(false);
  const [isActiveTop, setIsActiveTop] = useState(true);
  const [displayedURL, setDisplayedURL] = useState("");
  const [duration, setDuration] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(duration);
  const [isBounce, setIsBounce] = useState(false);
  const [side, setSide] = useState("");
  const handleToggleTop = () => {
    setIsActiveTop((prev) => !prev);
  };

  const getHours = (time: number) => {
    const aux = time / 3600;
    const hours = Math.floor(aux);
    return hours;
  };

  const getMinutes = (time: number) => {
    const aux = time / 60;
    const minutes = Math.floor(aux - getHours(time) * 60);
    return minutes;
  };

  const getSeconds = (time: number) => {
    const seconds = Math.floor(
      time - getMinutes(time) * 60 - getHours(time) * 3600
    );
    return seconds;
  };

  const formatTime = (time: number) => {
    const hours = getHours(time);
    const minutes = getMinutes(time);
    const seconds = getSeconds(time);
    const hasHours = hours > 0;
    const isMinLessThan10 = minutes < 10;
    const isSecLessThan10 = seconds < 10;

    const hrsDisplayed = hasHours ? `${hours}:` : "";

    const minDisplayed =
      hasHours && isMinLessThan10
        ? `0${minutes}:`
        : hours > 0 && !isMinLessThan10
        ? `${minutes}:`
        : `${minutes}:`;

    const secDisplayed = isSecLessThan10 ? `0${seconds}` : `${seconds}`;

    return `${hrsDisplayed}${minDisplayed}${secDisplayed}`;
  };

  const handleHrs = (prev: number, hrs: number) => {
    const prevHrs = getHours(prev);
    return prev - 3600 * prevHrs + 3600 * hrs;
  };

  const handleMins = (prev: number, min: number) => {
    const prevMins = getMinutes(prev);
    return prev - 60 * prevMins + 60 * min;
  };

  const handleSecs = (prev: number, sec: number) => {
    const prevSecs = getSeconds(prev);
    return prev - prevSecs + sec;
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
                  marginTop="0.35rem"
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
                  marginTop="0.35rem"
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
                  marginTop="0.35rem"
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
              <ReactPlayer
                url={`${displayedURL}#t=${startTime}&end=${endTime}`}
                height="100%"
                width="100%"
                playing
                onPlay={() => {
                  if (isBounce) {
                    setTimeout(() => {
                      setIsBounce(false);
                      if (sliderValue[0] !== 0)
                        setStartTime(duration * (sliderValue[0] / maxValue));
                      else setStartTime(0);
                    }, 2000);
                  }
                }}
                onDuration={(d) => setDuration(d)}
              />
              <RangeSlider
                min={0}
                max={maxValue}
                step={1}
                marginTop="8px"
                w="98%"
                aria-label={["min", "max"]}
                defaultValue={defaultValue}
                onChange={(val) => {
                  if (val[0] !== 0)
                    setStartTime(duration * (val[0] / maxValue));
                  else setStartTime(0);
                  if (val[1] !== 0)
                    setEndTime((prev) => {
                      if (prev !== duration * (val[1] / maxValue)) {
                        setStartTime(duration * (val[1] / maxValue));
                        setIsBounce(true);
                        return duration * (val[1] / maxValue);
                      }
                      return prev;
                    });
                  else setEndTime(0);
                  setSliderValue(val);
                }}
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
                  onClick={() => {
                    setStartTime(endTime);
                    setIsBounce(true);
                  }}
                />
                {isShownLeft && (
                  <RangeSliderMark
                    value={sliderValue[0]}
                    textAlign="center"
                    bg="blue.500"
                    color="white"
                    mt="-9"
                    ml="-6"
                    w="4rem"
                  >
                    {formatTime(startTime)}
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
                    w="4rem"
                  >
                    {formatTime(endTime)}
                  </RangeSliderMark>
                )}
              </RangeSlider>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w="100%"
          gridColumn="2 / 3"
          bgColor="lightMode.trueIce2"
          color="white"
          marginBlock="3px"
          borderLeftRadius="8px"
          borderWidth="3px"
          borderColor="lightMode.trueIce1"
          flexDir="column"
          align="center"
        >
          <Text fontSize="2rem" fontWeight="bold" marginTop="2rem">
            CLIP SETTINGS
          </Text>
          <Flex flexDir="row" w="95%" justify="center" marginTop="4rem">
            <Text fontSize="1.2rem" marginRight="0.5rem">
              Tag
            </Text>
            <Select h="1.8rem"></Select>
          </Flex>
          <Flex
            flexDir="row"
            w="100%"
            justify="space-evenly"
            marginTop="2rem"
            align="baseline"
          >
            <Flex flexDir="column" marginRight="2.5rem" align="center">
              <Text
                fontSize="1.25rem"
                fontWeight="bold"
                marginRight="0.5rem"
                marginBottom="0.5rem"
              >
                SIDE
              </Text>

              <RadioGroup onChange={setSide} value={side}>
                <Stack direction="row" spacing={3}>
                  <Radio value="blue" colorScheme="blue">
                    Blue
                  </Radio>
                  <Radio value="red" colorScheme="red">
                    Red
                  </Radio>
                </Stack>
              </RadioGroup>
            </Flex>
            <Flex
              flexDir="column"
              marginRight="1rem"
              marginTop="1.5rem"
              align="center"
            >
              <Text
                fontSize="1.25rem"
                marginRight="0.5rem"
                fontWeight="bold"
                marginBottom="0.5rem"
              >
                ERROR
              </Text>
              <Checkbox></Checkbox>
            </Flex>
          </Flex>
          <Flex flexDir="column" w="100%" align="center" marginTop="1.5rem">
            <Flex flexDir="column" w="100%" align="center">
              <Text
                fontSize="1.25rem"
                marginRight="0.5rem"
                fontWeight="bold"
                marginBottom="0.5rem"
              >
                LANE
              </Text>
              <Flex flexDir="column" align="center">
                <CheckboxGroup>
                  <Stack spacing={[1, 10]} direction={["column", "row"]}>
                    <Checkbox value="top">TOP</Checkbox>
                    <Checkbox value="jg">JG</Checkbox>
                    <Checkbox value="mid">MID</Checkbox>
                  </Stack>
                  <Stack spacing={[1, 10]} direction={["column", "row"]}>
                    <Checkbox value="adc">ADC</Checkbox>
                    <Checkbox value="supp">SUPP</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir="row" w="100%" justify="space-around" marginTop="1rem">
            <Flex flexDir="column" align="center">
              <Text marginBottom="0.5rem">Start Time</Text>
              <Stack
                direction="row"
                spacing="0"
                border="1px solid white"
                borderRadius="8px"
                h="2.37rem"
                divider={
                  <StackDivider
                    borderColor="transparent"
                    alignSelf="center"
                    fontSize="1.2rem"
                    position="relative"
                  >
                    :
                  </StackDivider>
                }
              >
                <Input
                  w="2.2rem"
                  border="none"
                  p="3px"
                  textAlign="center"
                  verticalAlign="middle"
                  _focusVisible={{
                    border: "none",
                  }}
                  type="number"
                  onChange={({ target }) => {
                    setStartTime((prev) =>
                      handleHrs(prev, +target.value)
                    ); /* casteo tranfuga parse int implicito + adelante */
                  }}
                  value={getHours(startTime)}
                />
                <Input
                  w="2.2rem"
                  border="none"
                  p="3px"
                  textAlign="center"
                  _focusVisible={{
                    border: "none",
                  }}
                  type="number"
                  onChange={({ target }) => {
                    setStartTime((prev) => {
                      const newTime = handleMins(prev, +target.value);
                      setSliderValue((prev) => [(prev[0] = newTime), prev[1]]);
                      return newTime;
                    }); /* casteo tranfuga parse int implicito + adelante */
                  }}
                  value={getMinutes(startTime)}
                />
                <Input
                  w="2.2rem"
                  border="none"
                  p="3px"
                  textAlign="center"
                  _focusVisible={{
                    border: "none",
                  }}
                  type="number"
                  onChange={({ target }) => {
                    setStartTime((prev) =>
                      handleSecs(prev, +target.value)
                    ); /* casteo tranfuga parse int implicito + adelante */
                  }}
                  value={getSeconds(startTime)}
                />
              </Stack>
            </Flex>
            <Flex flexDir="column" align="center">
              <Text marginBottom="0.5rem">End Time</Text>
              <Stack
                direction="row"
                spacing="0"
                border="1px solid white"
                borderRadius="8px"
                h="2.37rem"
                divider={
                  <StackDivider
                    borderColor="transparent"
                    alignSelf="center"
                    fontSize="1.2rem"
                    position="relative"
                  >
                    :
                  </StackDivider>
                }
              >
                <Input
                  w="2.2rem"
                  border="none"
                  p="3px"
                  textAlign="center"
                  verticalAlign="middle"
                  _focusVisible={{
                    border: "none",
                  }}
                  type="number"
                  onChange={({ target }) => {
                    setEndTime((prev) =>
                      handleHrs(prev, +target.value)
                    ); /* casteo tranfuga parse int implicito + adelante */
                  }}
                  value={getHours(endTime)}
                />
                <Input
                  w="2.2rem"
                  border="none"
                  p="3px"
                  textAlign="center"
                  _focusVisible={{
                    border: "none",
                  }}
                  type="number"
                  onChange={({ target }) => {
                    setEndTime((prev) =>
                      handleMins(prev, +target.value)
                    ); /* casteo tranfuga parse int implicito + adelante */
                  }}
                  value={getMinutes(endTime)}
                />
                <Input
                  w="2.2rem"
                  border="none"
                  p="3px"
                  textAlign="center"
                  _focusVisible={{
                    border: "none",
                  }}
                  type="number"
                  onChange={({ target }) => {
                    setEndTime((prev) =>
                      handleSecs(prev, +target.value)
                    ); /* casteo tranfuga parse int implicito + adelante */
                  }}
                  value={getSeconds(endTime)}
                />
              </Stack>
            </Flex>
          </Flex>
        </Flex>
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
