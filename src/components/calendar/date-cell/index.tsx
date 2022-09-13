import { FC, useState } from "react";
import {
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  Text,
} from "@chakra-ui/react";
import useDateCell from "./hooks";

const DateCell: FC<DateCellProps> = ({
  day,
  month,
  year,
  currentDate,
  monthOffsetBeging,
  monthOffsetEnding,
  index,
  tasks,
}) => {
  const [isHover, setIsHover] = useState(false);

  const {
    firstTask,
    isToday,
    outOfBounds,
    cellColor,
    tooltipLabel,
    todayTasks,
    tooltipBody,
  } = useDateCell(
    currentDate,
    day,
    month,
    year,
    index,
    monthOffsetBeging,
    monthOffsetEnding,
    tasks
  );

  return (
    <Popover isOpen={isHover && firstTask !== undefined}>
      <PopoverTrigger>
        <Flex
          w="100%"
          h="100%"
          border={isToday ? "2px solid blue" : undefined}
          justify="center"
          align="center"
          color={outOfBounds ? "gray.300" : "black"}
          bg={cellColor}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          cursor={firstTask ? "pointer" : undefined}
        >
          {day}
        </Flex>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>
          <Flex justify="space-between">
            <Text>{tooltipLabel}</Text>
            {todayTasks.length > 1 && (
              <Flex
                w="32px"
                h="32px"
                justify="center"
                align="center"
                border="1px solid black"
                borderRadius="50%"
              >
                {`+${todayTasks.length - 1}`}
              </Flex>
            )}
          </Flex>
        </PopoverHeader>
        <PopoverBody>{tooltipBody}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default DateCell;
