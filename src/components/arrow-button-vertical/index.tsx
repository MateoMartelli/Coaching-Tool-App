import { FC } from "react";
import { IconButton, Flex, Icon } from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

const ArrowButtonVertical: FC<ArrowButtonVerticalProps> = ({
  isActive,
  handleClick,
  Icon,
}) => {
  const iconDisplay = Icon ? (
    <Icon />
  ) : isActive ? (
    <ArrowUpIcon />
  ) : (
    <ArrowDownIcon />
  );

  return (
    <IconButton
      w="200px"
      h="25px"
      onClick={handleClick}
      color="lightMode.snowBG1"
      bgColor="lightMode.trueIce1"
      aria-label="Collapse Section"
      transition="all 0.24s"
      icon={iconDisplay}
      borderRadius="0px"
      borderBottomRadius="8px"
      _hover={{
        bgColor: "lightMode.trueIce2",
      }}
      _active={{
        bgColor: "lightMode.trueIce3",
      }}
    />
  );
};

export default ArrowButtonVertical;
