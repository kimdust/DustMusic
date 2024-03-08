import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      h={20}
      bg={useColorModeValue("#fbfbfb", "#202020")}
      ml={{ base: "0", xl: "150px" }}
      display={"flex"}
    >
      <Flex
        px={"30px"}
        alignItems={"center"}
        color={useColorModeValue("gray.400", "#525252")}
      >
        © DUST MUSIC. All Rights Reserved.
      </Flex>
    </Box>
  );
};
export default Footer;
