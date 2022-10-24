import type { NextPage } from "next";
import { Flex } from "@chakra-ui/react";
import Calendar from "../components/calendar";

const tasks = [
  {
    title: "Meeting",
    date: new Date(2022, 7, 28, 20),
  },
  {
    title: "Meeting",
    date: new Date(2022, 8, 15, 20),
  },
  {
    title: "Meeting",
    date: new Date(2022, 8, 1, 20),
  },
  {
    title: "Meeting",
    date: new Date(2022, 8, 29, 17),
  },
  {
    title: "Meeting",
    date: new Date(2022, 9, 2, 20, 30),
  },
  {
    title: "Meeting",
    date: new Date(2022, 9, 2, 21, 30),
  },
];

const Home: NextPage = () => {
  return (
    <Flex justify="center" align="center" h="100vh">
      <Calendar tasks={tasks} />
    </Flex>
  );
};

export default Home;
