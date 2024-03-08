import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/react";

const MiniChart = () => {
  const boxShadow = useColorModeValue("0 0 5px #dbdbdb", "none");

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
      imageUrl:
        "https://lh3.googleusercontent.com/ytbkUaJaduL4gE07iKmg1LwZPMqRh-9vX7vHksmZ4VklMJLh3eU5maCsQgEv0En42cyXu0oPU6n07ZwH=w544-h544-l90-rj",
      title: "Love wins all",
      icon: <BsDot style={noneIcon} />,
      ranking: "1",
      artist: "아이유",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/-d5I1nv7x56NNuD3nbMZDRG874qNwua2usmDnVM35VGwHbLlLw8ozDMUrClz7f0lnSbG40L_dAF75EU8=w544-h544-l90-rj",
      title: "Wife",
      icon: <BsDot style={noneIcon} />,
      ranking: "2",
      artist: "(여자)아이들",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/JOy8WgN2RdyG0rfiMlqEXsK8IDNUHMsxtuqI5EjcIPnquJ_C4X2xdOETW3bqquYq6mqZJbLjZdQfHhPVtg=w544-h544-l90-rj",
      title: "첫 만남은 계획대로 되지 않아",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "3",
      artist: "TWS (투어스)",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/lOHDJdhlasRXh3svE14DtWAZMSsiYpIMwEdLCXujcg0pPUHWvi0KpBh_459RNuODWj4s4n9lKCeHkwtP=w544-h544-l90-rj",
      title: "To. X",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "4",
      artist: "태연",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/-d5I1nv7x56NNuD3nbMZDRG874qNwua2usmDnVM35VGwHbLlLw8ozDMUrClz7f0lnSbG40L_dAF75EU8=w544-h544-l90-rj",
      title: "Super Lady",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "5",
      artist: "(여자)아이들",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/vR3E6SvzUMgt9HwcSys34sHQQhtj62oXDbR7VYup1LM6D0unlayZOWmZnswWUZGEPUsxjpRESNHuPA0_NQ=w544-h544-l90-rj",
      title: "Drama",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "6",
      artist: "aespa",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/nkO-Bnt3OO4hl4wxmy66iC2EX9X7dIBAyuDzNJ7pVvdjg2r5LIVw2T7omHaAUYho1ULmu8ox1YxxkGU=w544-h544-l90-rj",
      title: "MANIAC",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "7",
      artist: "VIVIZ (비비지)",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/0DgY-1Bl10lB8E2d7Ddo1C4-lPV4wfGrwc01aAhn3kAfYikpd2uopv__p4skqINan_DOw44Ev8PZQE0VoA=w544-h544-l90-rj",
      title: "Perfect Night",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "8",
      artist: "LE SSERAFIM (르세라핌)",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/XsPoLNWP9H4eO3xuqDRba8j495lo9wtB_V5ZemS2_fg3jqBMeaYSsk5_PhL1gTkZHAJeE-z1FRSyHbdH=w544-h544-l90-rj",
      title: "Bling-Bang-Bang-Born",
      icon: <BsDot style={noneIcon} />,
      ranking: "9",
      artist: "Creepy Nuts",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/GmO9IS4cHNtH3aA6xikEtUYiZ-ZGoSCZb81VI0AbblkMb8_Y0FIL5Psd3iJwK5Nq2yc3_OmLWWk32GjH=w544-h544-l90-rj",
      title: "Yes or No (feat. 허윤진, Crush)",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "10",
      artist: "그루비룸 (GroovyRoom)",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/IJxBCzG0ie3izEBNaTSikPtEaudDxWTTy5nX1fTiOYnMmk3kVLFS4P8QJk-ePJ_7DZi1j_H4ddHyGuc=w544-h544-l90-rj",
      title: "I AM",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "11",
      artist: "IVE (아이브)",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/pABwFdKA8QVdq_b3hUft-3hDpjSXO5iqPga5YQ3Md-GUQcUFAIXTvmbZp2hwKQqgRsnPPVkH8lqmX7EW8g=w544-h544-l90-rj",
      title: "비의 랩소디",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "12",
      artist: "임재현",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/SSorroIBWlUYL9GPtSfIiKm94b-IJdUUawDaS1sL4IIuI82jt3b7wyGxcVie1aQnKnH5MG6f2l0G2q7j=w544-h544-l90-rj",
      title: "Discord",
      icon: <BsDot style={noneIcon} />,
      ranking: "13",
      artist: "QWER",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/8WX8Sku2VQnrH-QasdneYtYdfrR2TN42rlR4ElGsUILCa4FYEW_5ukW8hxC5IoKnMUMG4nO1njMSXHHD=w544-h544-l90-rj",
      title: "DASH",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "14",
      artist: "NMIXX",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/0rVhke8mYtdDO3OEtopvHmzYlMqCHSIh-kWt5xHxZaMIc5ZcmQkxN5UI_4UtMty89DyzBfTZrHoJdgI=w544-h544-l90-rj",
      title: "Love 119",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "15",
      artist: "RIIZE",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/AjWNrfzz6BqjRL5diZ-bPxFqGOsNk20xS6jcqoQWpNGWdch404mDWKVBkl4s9n74aLjXJWgldqm3Dc8=w544-h544-l90-rj",
      title: "アイドル",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "16",
      artist: "YOASOBI",
    },
  ];
  const rearrangedChart = [];
  for (let i = 0; i < Math.ceil(chart.length / 4); i++) {
    rearrangedChart.push(chart.slice(i * 4, i * 4 + 4));
  }

  return (
    <>
      <Flex alignItems={"center"} gap={"20px"}>
        <Heading
          fontFamily={"Pretendard"}
          padding={"25px 0 20px 0"}
          fontSize={"25px"}
        >
          인기 차트
        </Heading>
        <Link to={`/chart`}>
          <Box
            border={"1px solid #9CA3AF"}
            borderRadius={"30px"}
            fontSize={"14px"}
            p={"3px 10px"}
          >
            더보기
          </Box>
        </Link>
      </Flex>

      <Box display={{ base: "block", lg: "flex" }} gap={"10px"} pb={"10px"}>
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
                    style={{ boxShadow }}
                  />
                  {item.icon}
                  <span style={{ marginLeft: "-10px" }}>{item.ranking}</span>
                  <Text marginLeft="10px">
                    <strong>{item.title}</strong>
                    <p>{item.artist}</p>
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

export default MiniChart;
