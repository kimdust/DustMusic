import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import styled from "styled-components";
import { Box, Heading, Text } from "@chakra-ui/react";
import "swiper/css";
import bannerBaseImg01 from "../../../assets/images/banner01_base.png";
import bannerSmImg01 from "../../../assets/images/banner01_sm.png";
import bannerMdImg01 from "../../../assets/images/banner01_md.png";
import bannerLgImg01 from "../../../assets/images/banner01_lg.png";
import bannerXlImg01 from "../../../assets/images/banner01_xl.png";
import bannerBaseImg02 from "../../../assets/images/banner02_base.png";
import bannerSmImg02 from "../../../assets/images/banner02_sm.png";
import bannerMdImg02 from "../../../assets/images/banner02_md.png";
import bannerLgImg02 from "../../../assets/images/banner02_lg.png";
import bannerXlImg02 from "../../../assets/images/banner02_xl.png";
import bannerBaseImg03 from "../../../assets/images/banner03_base.png";
import bannerSmImg03 from "../../../assets/images/banner03_sm.png";
import bannerMdImg03 from "../../../assets/images/banner03_md.png";
import bannerLgImg03 from "../../../assets/images/banner03_lg.png";
import bannerXlImg03 from "../../../assets/images/banner03_xl.png";
import bannerImg03 from "../../../assets/images/banner03.png";
import { Link } from "react-router-dom";

const BannerNew = () => {
  return (
    <SwiperStyle
      pagination={true}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <Link to={`/album/0`}>
          <Box
            bgImage={{
              base: bannerBaseImg01,
              sm: bannerSmImg01,
              md: bannerMdImg01,
              lg: bannerLgImg01,
              xl: bannerXlImg01,
            }}
            w={"100%"}
            h={"100%"}
            p={{ base: "20px", lg: "30px 60px" }}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
          >
            <Text color={"white"} fontSize={{ base: "16px", lg: "25px" }}>
              트와이스의 영원히 눈부실 청춘 기록
            </Text>
            <Heading
              color={"white"}
              pb={"10px"}
              fontFamily={"Pretendard"}
              fontSize={{ base: "20px", lg: "30px" }}
            >
              미니 13집, With YOU-th
            </Heading>
          </Box>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/album/1`}>
          <Box
            bgImage={{
              base: bannerBaseImg02,
              sm: bannerSmImg02,
              md: bannerMdImg02,
              lg: bannerLgImg02,
              xl: bannerXlImg02,
            }}
            w={"100%"}
            h={"100%"}
            p={{ base: "20px", lg: "30px 60px" }}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
          >
            <Text color={"white"} fontSize={{ base: "16px", lg: "25px" }}>
              당당한 르세라핌, 그 이면의 불안과 고민
            </Text>
            <Heading
              color={"white"}
              pb={"10px"}
              fontFamily={"Pretendard"}
              fontSize={{ base: "20px", lg: "30px" }}
            >
              미니 3집, EASY
            </Heading>
          </Box>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to={`/album/5`}>
          <Box
            bgImage={{
              base: bannerBaseImg03,
              sm: bannerSmImg03,
              md: bannerMdImg03,
              lg: bannerLgImg03,
              xl: bannerXlImg03,
            }}
            w={"100%"}
            h={"100%"}
            p={{ base: "20px", lg: "30px 60px" }}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
          >
            <Text color={"white"} fontSize={{ base: "16px", lg: "25px" }}>
              아이유의 30대 첫 앨범
            </Text>
            <Heading
              color={"white"}
              pb={"10px"}
              fontFamily={"Pretendard"}
              fontSize={{ base: "20px", lg: "30px" }}
            >
              미니 6집, The Winning
            </Heading>
          </Box>
        </Link>
      </SwiperSlide>
    </SwiperStyle>
  );
};

const SwiperStyle = styled(Swiper)`
  width: 100%;
  height: 200px;
  border-radius: 30px;
  margin: 25px 0 20px 0;
  box-shadow: 0 0 5px #dbdbdb;
  .swiper-pagination {
    bottom: 0;
  }
  .swiper-pagination-bullet {
    background-color: #fff;
  }
  .swiper-pagination-bullet-active {
    background-color: #1b3bbb;
  }
`;

export default BannerNew;
