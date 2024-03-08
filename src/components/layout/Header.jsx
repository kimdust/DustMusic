import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import Gnb from "./Gnb";
import Mode from "./Mode";

const Header = () => {
  return (
    <Box
      as="header"
      id="header"
      position={"fixed"}
      top={0}
      left={{ base: "-100%", xl: 0 }}
      bottom={0}
      zIndex={10000}
      transition={"left 0.3s"}
      w={150}
      bg={useColorModeValue("#F9F9F9", "#262626")}
      borderRight={useColorModeValue("1px solid #E5E7EB", "1px solid #383838")}
    >
      <Heading
        as={"h1"}
        fontSize={25}
        fontWeight={400}
        pt={6}
        pb={6}
        textAlign={"center"}
        lineHeight={1.02}
      >
        <Link as={ReactRouterLink} to="/">
          <strong>DUST</strong>
          <p>MUSIC</p>
        </Link>
      </Heading>

      <Gnb />
      <Mode />
    </Box>
  );
};

export default Header;
