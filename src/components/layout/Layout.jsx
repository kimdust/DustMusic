import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Box, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Util from "./Util";

const Layout = () => {
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    let requestRunning = false;

    const handleScroll = () => {
      if (!requestRunning) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 0;
          setShowBorder(isScrolled);
          requestRunning = false;
        });
        requestRunning = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const borderColor = useColorModeValue("#E5E7EB", "#383838");

  return (
    <Box display={"flex"} flexDir={"column"} minH={"100vh"}>
      <Header />
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={"center"}
        spacing={0}
        mb={"20px"}
        w={{ base: "100%", xl: "calc(100% - 150px)" }}
        h={{ base: "60px", xl: "100px" }}
        p={{ base: "0 30px", xl: "30px" }}
        alignItems={"center"}
        position={"fixed"}
        zIndex={100}
        right={0}
        bg={useColorModeValue(
          "rgba(255, 255, 255, 0.8)",
          "rgba(19, 19, 19, 0.8)"
        )}
        backdropFilter={"blur(10px)"}
        transition={"all 0.2s"}
        borderBottom={showBorder ? `1px solid ${borderColor}` : "none"}
      >
        <Util />
      </Flex>
      <Box
        as="main"
        id="main"
        flexGrow={1}
        pl={{ base: "30px", xl: 180 }}
        pr={{ base: "30px", xl: "30px" }}
        pt={{ base: "70px", xl: "100px" }}
        pb={{ base: 50 }}
        transition={"all 0.2s"}
      >
        {/* {props.showTitle && <h2>{props.title}</h2>}
                {props.children} */}
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
