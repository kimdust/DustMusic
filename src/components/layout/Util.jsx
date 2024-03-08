import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Mode from "./Mode";

const Util = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const storedMenu = localStorage.getItem("selectedMenu");
    if (storedMenu) {
      setSelectedMenu(storedMenu);
    }
  }, [location]);

  const toggleMenu = () => {
    if (window.innerWidth < 1200) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    localStorage.setItem("selectedMenu", menu);
  };

  const textColor = useColorModeValue("black", "white");

  return (
    <Flex
      alignItems={"flex-end"}
      justifyContent={"flex-end"}
      borderRadius={61}
      w={"100%"}
    >
      <InputGroup
        w={{ base: "80%", xl: "30%" }}
        display={{ base: "none", xl: "block" }}
      >
        <InputLeftElement pointerEvents="none">
          <FiSearch color={useColorModeValue("#374151", "white")} />
        </InputLeftElement>
        <Input
          placeholder="Search"
          borderRadius={"50px"}
          color={useColorModeValue("#374151", "white")}
          _placeholder={{ color: useColorModeValue("#374151", "#e9e9e9ff") }}
          border={useColorModeValue("1px solid #374151", "1px solid white")}
        />
      </InputGroup>
      <ButtonGroup
        alignItems={"center"}
        w={"100%"}
        display={"flex"}
        justifyContent={{ base: "space-between", xl: "flex-end" }}
      >
        <Box>
          <Box
            variant="icon"
            onClick={toggleMenu}
            w={{ base: "100%", xl: "45px" }}
            p={{ base: "0", xl: "0 16px" }}
            cursor={"pointer"}
          >
            <FaBars color={useColorModeValue("#374151", "white")} />
            <span className="blind">전체메뉴 보기</span>
          </Box>
          <Flex
            flexDir="column"
            className="slide-menu"
            position={"absolute"}
            w={"50%"}
            h={"calc(100vh - 60px)"}
            p={"30px"}
            left={"0"}
            top={"60px"}
            zIndex={10000}
            gap={"20px"}
            bg={useColorModeValue("#F9F9F9", "#262626")}
            transition={"transform 0.3s ease-in-out"}
            transform={isMenuOpen ? "translateX(0%)" : "translateX(-100%)"}
            onClick={closeMenu}
          >
            <Link
              to={`/`}
              style={{
                width: "80px",
                color: selectedMenu === "home" ? "#FC7327" : textColor,
                fontWeight: selectedMenu === "home" ? "bold" : "normal",
              }}
              onClick={() => handleMenuClick("home")}
            >
              HOME
            </Link>
            <Link
              to={`/around`}
              style={{
                width: "80px",
                color: selectedMenu === "around" ? "#FC7327" : textColor,
                fontWeight: selectedMenu === "around" ? "bold" : "normal",
              }}
              onClick={() => handleMenuClick("around")}
            >
              둘러보기
            </Link>
            <Text cursor={"pointer"} onClick={() => handleMenuClick("search")}>
              검색
            </Text>
            <Mode />
          </Flex>
        </Box>

        <Box>
          <Button variant="icon" p={{ base: "0", xl: "0 16px" }}>
            <FaRegBell color={useColorModeValue("#374151", "white")} />
            <span className="blind">알림</span>
          </Button>
          <Button variant="ghost" p={"0"} pl={"15px"}>
            <Avatar
              w={"40px"}
              h={"40px"}
              name="Prosper Otemuyiwa"
              src="https://i.pinimg.com/564x/b7/a5/fb/b7a5fbb9334b24511a5b2c68477031db.jpg"
            />
          </Button>
        </Box>
      </ButtonGroup>
    </Flex>
  );
};

export default Util;
