import { FC, Fragment, useState } from "react";
import { Flex, Grid, IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import useCalendar from "./hooks";
import DateCell from "./date-cell";

const Calendar: FC<CalendarProps> = ({ tasks }) => {
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
      flexDir="column"
      border="1px solid black"
      align="center"
      userSelect="none"
    >
      <Flex w="100%" justify="space-between" align="center">
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

      <Grid templateColumns="repeat(7, 1fr)" templateRows="repeat(7, 1fr)">
        {weekDays.map((day) => (
          <Flex key={day} m="0.5rem" justify="center" align="center">
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
