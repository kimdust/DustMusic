import { Box, Card, SimpleGrid, VStack } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import MiniSt from "../../components/card/MiniSt";
import IconBox from "../../components/icons/IconBox";
import { MdBarChart } from "react-icons/md";
import {
  FcAreaChart,
  FcDoughnutChart,
  FcFlowChart,
  FcComboChart,
} from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Heading, Text } from "@chakra-ui/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import SlideReplay from "./components/SlideReplay";
import SlideVideo from "./components/SlideVideo";
import Mood from "./components/Mood";

const Home = () => {
  return (
    <>
      <SlideReplay />
      <SlideVideo />
      <Mood />
    </>
  );
};

export default Home;
