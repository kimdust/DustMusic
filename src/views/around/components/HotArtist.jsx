import "swiper/css";
import "swiper/css/pagination";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import iuImg from "../../../assets/images/iu.png";
import idleImg from "../../../assets/images/idle.png";
import iveImg from "../../../assets/images/ive.png";
import newjeansImg from "../../../assets/images/newjeans.png";
import teayeonImg from "../../../assets/images/teayeon.png";
import aespaImg from "../../../assets/images/aespa.png";
import lesserafimImg from "../../../assets/images/lesserafim.png";
import imyounwoongImg from "../../../assets/images/imyounwoong.png";
import seventeengImg from "../../../assets/images/seventeen.png";
import akmuImg from "../../../assets/images/akmu.png";
import bolImg from "../../../assets/images/bol4.png";
import leellamarzImg from "../../../assets/images/leellamarz.png";
import yoonhaImg from "../../../assets/images/yoonha.png";
import btsImg from "../../../assets/images/bts.png";
import jkImg from "../../../assets/images/jk.png";
import bigbangImg from "../../../assets/images/bigbang.png";

const HotArtist = () => {
  const albumStyle = {
    boxShadow: "0 0 5px #dbdbdb",
    borderRadius: "50px",
  };
  const upIcon = {
    color: "#22C55F",
    fontSize: "25px",
  };
  const downIcon = {
    color: "#E31A1A",
    fontSize: "25px",
  };
  const noneIcon = {
    color: "#D1D5DB",
    fontSize: "25px",
  };
  const chart = [
    {
      imageUrl: iuImg,
      name: "아이유",
      icon: <BsDot style={noneIcon} />,
      ranking: "1",
      followers: "구독자 945만명",
    },
    {
      imageUrl: idleImg,
      name: "(여자)아이들",
      icon: <BsDot style={noneIcon} />,
      ranking: "2",
      followers: "구독자 786만명",
    },
    {
      imageUrl: iveImg,
      name: "IVE (아이브)",
      icon: <BsDot style={noneIcon} />,
      ranking: "3",
      followers: "구독자 336만명",
    },
    {
      imageUrl: newjeansImg,
      name: "NewJeans (뉴진스)",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "4",
      followers: "구독자 663만명",
    },
    {
      imageUrl: teayeonImg,
      name: "태연",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "5",
      followers: "구독자 76만명",
    },
    {
      imageUrl: aespaImg,
      name: "aespa",
      icon: <BsDot style={noneIcon} />,
      ranking: "6",
      followers: "구독자 537만명",
    },
    {
      imageUrl: lesserafimImg,
      name: "LE SSERAFIM (르세라핌)",
      icon: <BsDot style={noneIcon} />,
      ranking: "7",
      followers: "구독자 465만명",
    },
    {
      imageUrl: imyounwoongImg,
      name: "임영웅",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "8",
      followers: "구독자 159만명",
    },
    {
      imageUrl: seventeengImg,
      name: "세븐틴",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "9",
      followers: "구독자 1080만명",
    },
    {
      imageUrl: akmuImg,
      name: "AKMU",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "10",
      followers: "구독자 324만명",
    },
    {
      imageUrl: bolImg,
      name: "볼빨간사춘기",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "11",
      followers: "구독자 54만명",
    },
    {
      imageUrl: leellamarzImg,
      name: "릴러말즈",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "12",
      followers: "구독자 4.13만명",
    },
    {
      imageUrl: yoonhaImg,
      name: "윤하",
      icon: <BsDot style={noneIcon} />,
      ranking: "13",
      followers: "구독자 23.4만명",
    },
    {
      imageUrl: btsImg,
      name: "방탄소년단 (BTS)",
      icon: <BsDot style={noneIcon} />,
      ranking: "14",
      followers: "구독자 7750만명",
    },
    {
      imageUrl: jkImg,
      name: "정국",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "15",
      followers: "구독자 287만명",
    },
    {
      imageUrl: bigbangImg,
      name: "BIGBANG",
      icon: <BsDot style={noneIcon} />,
      ranking: "16",
      followers: "구독자 1510만명",
    },
  ];
  const rearrangedChart = [];
  for (let i = 0; i < Math.ceil(chart.length / 4); i++) {
    rearrangedChart.push(chart.slice(i * 4, i * 4 + 4));
  }

  return (
    <>
      <Heading
        fontFamily={"Pretendard"}
        padding={"30px 0 20px 0"}
        fontSize={"25px"}
      >
        인기 아티스트
      </Heading>
      <Box display={{ base: "block", lg: "flex" }} gap={"10px"}>
        {rearrangedChart.map((row, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
            }}
          >
            {row.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  paddingBottom: "10px",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt=""
                    width={50}
                    style={albumStyle}
                  />
                  {item.icon}
                  <span style={{ marginLeft: "-10px" }}>{item.ranking}</span>
                  <Text marginLeft="10px">
                    <strong>{item.name}</strong>
                    <p>{item.followers}</p>
                  </Text>
                </Box>
              </div>
            ))}
          </div>
        ))}
      </Box>
    </>
  );
};

export default HotArtist;
