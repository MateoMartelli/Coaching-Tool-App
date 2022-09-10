import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import Header from "../../components/header";

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <Flex flexDir="column" h="100vh">
      <Header />
      {children}
    </Flex>
  );
};

export default HomeLayout;
