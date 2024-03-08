import { Button, useColorMode, Text } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function Mode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button
        size="sm"
        onClick={toggleColorMode}
        m={{ base: " 25px 45px", xl: "25px" }}
        position={"absolute"}
        bottom={"0"}
        left={"0"}
        bg={"Transparent"}
      >
        {colorMode === "light" ? <FaMoon /> : <FaSun />}
        <Text ml={"5px"}>모드 변경</Text>
      </Button>
    </>
  );
}

export default Mode;
