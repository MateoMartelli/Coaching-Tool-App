import { FC, Fragment, useState } from "react";
import { Flex, Grid, IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import useCalendar from "./hooks";
import DateCell from "./date-cell";

const Calendar: FC<CalendarProps> = ({ tasks, isActive }) => {
  const [offset, setOffset] = useState(0);

  const gridSize = 7 * 6;

  const {
    month,
    today,
    thisMonth,
    thisYear,
    weekDays,
    monthForCalendar,
    monthOffsetBeging,
    monthOffsetEnding,
  } = useCalendar(gridSize, offset);

  return (
    <Flex
      w={isActive ? "16rem" : "0"}
      bgColor={isActive ? "lightMode.lightBlue1" : "transparent"}
      borderColor="lightMode.trueIce1"
      borderWidth={isActive ? "3px" : "0"}
      p={isActive ? "0 0.5rem" : "0"}
      borderRight="none"
      borderBottomLeftRadius="md"
      overflow="hidden"
      opacity={isActive ? "1" : "0"}
      transition="all 0.5s"
      flexDir="column"
      userSelect="none"
    >
      <Flex
        w="100%"
        justify="space-between"
        align="center"
        transform={isActive ? "translate(0)" : "translate(500px)"}
        transition="all 1s"
      >
        <IconButton
          icon={<ArrowLeftIcon />}
          aria-label="Prev month"
          onClick={() => setOffset((prev) => prev - 1)}
          bg="transparent"
          _hover={{
            bg: "transparent",
          }}
          _active={{
            bg: "transparent",
          }}
        />
        {`${month} ${thisYear}`}
        <IconButton
          icon={<ArrowRightIcon />}
          aria-label="Next month"
          onClick={() => setOffset((prev) => prev + 1)}
          bg="transparent"
          _hover={{
            bg: "transparent",
          }}
          _active={{
            bg: "transparent",
          }}
        />
      </Flex>

      <Grid
        templateColumns="repeat(7, 1fr)"
        templateRows="repeat(7, 1fr)"
        transform={isActive ? "translate(0)" : "translate(500px)"}
        transition="all 1s"
      >
        {weekDays.map((day) => (
          <Flex key={day} justify="center" align="center">
            {day}
          </Flex>
        ))}
        {monthForCalendar.map((day, index) => (
          <Fragment key={`month day: ${index}`}>
            <DateCell
              day={day}
              month={thisMonth}
              year={thisYear}
              currentDate={today}
              monthOffsetBeging={monthOffsetBeging}
              monthOffsetEnding={monthOffsetEnding}
              index={index}
              tasks={tasks}
            />
          </Fragment>
        ))}
      </Grid>
    </Flex>
  );
};

export default Calendar;
