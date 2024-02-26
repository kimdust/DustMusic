import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Util = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    if (window.innerWidth < 1200) {
      setIsMenuOpen(!isMenuOpen);
    }
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Flex
      alignItems={"flex-end"}
      justifyContent={"flex-end"}
      borderRadius={61}
      boxShadow={
        "0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color)"
      }
    >
      <ButtonGroup
        alignItems={"center"}
        w={"100%"}
        display={"flex"}
        justifyContent={"flex-end"}
      >
        <Box>
          <Button variant="icon" onClick={toggleMenu}>
            <FaBars />
            <span className="blind">전체메뉴 보기</span>
          </Button>
          {isMenuOpen && (
            <Box
              className="slide-menu"
              position={"absolute"}
              w={"100vw"}
              h={"70px"}
              bg={"white"}
              left={"-30px"}
              top={"70px"}
              zIndex={10000}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"40px"}
              onClick={closeMenu}
            >
              <Link to={`/`}>Home</Link>
              <Link to={`/around`}>둘러보기</Link>
            </Box>
          )}
        </Box>
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
