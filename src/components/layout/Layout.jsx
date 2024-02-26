import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Box, Card, Stack } from "@chakra-ui/react";
import Util from "./Util";

const Layout = () => {
  return (
    <Box display={"flex"} flexDir={"column"} minH={"100vh"}>
      <Header />
      <Box
        as="main"
        id="main"
        flexGrow={1}
        pl={{ base: "30px", xl: 180 }}
        pr={{ base: "30px", xl: "30px" }}
        pt={{ base: "30px" }}
        pb={{ base: 50 }}
        transition={"all 0.2s"}
      >
        <Card
          direction={{ base: "column", md: "row" }}
          justifyContent={"flex-end"}
          spacing={0}
          mb={"20px"}
          alignItems={"flex-end"}
        >
          <Util />
        </Card>

        {/* {props.showTitle && <h2>{props.title}</h2>}
                {props.children} */}
        <Outlet />
      </Box>
    </Box>
  );
};

export const LayoutNone = () => {
  return (
    <Box display={"flex"} flexDir={"column"} minH={"100vh"}>
      <Box as="main" id="main" flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
