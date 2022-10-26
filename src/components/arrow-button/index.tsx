import { FC } from "react";
import { IconButton, Flex, Icon } from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

const ArrowButton: FC<ArrowButtonProps> = ({ isActive, handleClick, Icon }) => {
  const iconDisplay = Icon ? (
    <Icon />
  ) : isActive ? (
    <ArrowRightIcon />
  ) : (
    <ArrowLeftIcon />
  );

  return (
    <IconButton
      // w="100%"
      onClick={handleClick}
      color="lightMode.snowBG1"
      bgColor="lightMode.trueIce1"
      aria-label="Collapse Section"
      transition="all 0.24s"
      icon={iconDisplay}
      borderRadius="0px"
      borderBottomLeftRadius="8px"
      borderTopLeftRadius="8px"
      _hover={{
        bgColor: "lightMode.trueIce2",
      }}
      _active={{
        bgColor: "lightMode.trueIce3",
      }}
    />
  );
};

export default ArrowButton;
