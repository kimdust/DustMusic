import {
  Avatar,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";

const Util = () => {
  return (
    <Flex
      alignItems={"center"}
      h={61}
      mt={{ base: 2, md: 0 }}
      borderRadius={61}
      boxShadow={
        "0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color)"
      }
    >
      <InputGroup w={"50%"}>
        <Input
          variant="outline"
          placeholder="Search"
          bg={"bgDefault"}
          h={45}
          borderRadius={45}
        />
        <InputLeftElement
          top={"50%"}
          transform={"translateY(-50%)"}
          fontSize={20}
        >
          <FiSearch />
        </InputLeftElement>
      </InputGroup>
      <Spacer />
      <ButtonGroup
        alignItems={"center"}
        w={"42%"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Button variant="icon">
          <FaBars />
          <span className="blind">전체메뉴 보기</span>
        </Button>
        <Button variant="icon">
          <FaRegBell />
          <span className="blind">알림</span>
        </Button>
        <Button variant="ghost" p={"0"} pl={"8px"}>
          <Avatar
            w={"40px"}
            h={"40px"}
            name="Prosper Otemuyiwa"
            src="https://i.pinimg.com/564x/b7/a5/fb/b7a5fbb9334b24511a5b2c68477031db.jpg"
          />
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Util;
