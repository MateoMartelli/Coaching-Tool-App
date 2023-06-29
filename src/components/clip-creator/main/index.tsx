import { FC } from "react";
import { Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";

const ClipCreatorMain: FC<ClipCreatorMainProps> = () => {
  return (
    <Grid
      // bgColor="red"
      w="100%"
      h="100%"
      gridTemplateColumns="15fr 5fr"
      // gridTemplateRows="3fr 7fr"
      // gridTemplateRows={isActiveTop ? "3fr 7fr" : "25px 1fr"}
      transition="all 0.7s"
    ></Grid>
  );
};

export default ClipCreatorMain;
