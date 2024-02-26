import { Flex, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import SlideNewSong from "./components/SlideNewSong";
import SlideNewVideo from "./components/SlideNewVideo";
import MiniChart from "./components/MiniChart";
import SlideHotVideo from "./components/SlideHotVideo";
import HotArtist from "./components/HotArtist";
import BannerNew from "./components/BannerNew";
import Magazine from "./components/Magazine";

const Around = () => {
  const [selectedButton, setSelectedButton] = useState("최신 음악");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  const activeBtnStyle = {
    width: "50%",
    height: "70px",
    fontSize: "25px",
    boxShadow: "none",
    background: "white",
    fontWeight: "700",
    color: "#422AFB",
    borderBottom: "2px solid #422AFB",
  };
  const inactiveBtnStyle = {
    width: "50%",
    height: "70px",
    fontSize: "25px",
    boxShadow: "none",
    background: "white",
    fontWeight: "700",
    borderBottom: "2px solid #E5E7EB",
  };

  return (
    <>
      <Flex width={"100%"}>
        <Button
          onClick={() => handleButtonClick("최신 음악")}
          active={selectedButton === "최신 음악"}
          style={
            selectedButton === "최신 음악" ? activeBtnStyle : inactiveBtnStyle
          }
        >
          최신 음악
        </Button>
        <Button
          onClick={() => handleButtonClick("차트")}
          active={selectedButton === "차트"}
          style={selectedButton === "차트" ? activeBtnStyle : inactiveBtnStyle}
        >
          차트
        </Button>
        <Button
          onClick={() => handleButtonClick("매거진")}
          active={selectedButton === "매거진"}
          style={
            selectedButton === "매거진" ? activeBtnStyle : inactiveBtnStyle
          }
        >
          매거진
        </Button>
      </Flex>

      {selectedButton === "최신 음악" && (
        <div>
          {<BannerNew />}
          {<SlideNewSong />}
          {<SlideNewVideo />}
        </div>
      )}
      {selectedButton === "차트" && (
        <div>
          {<MiniChart />}
          {<SlideHotVideo />}
          {<HotArtist />}
        </div>
      )}
      {selectedButton === "매거진" && <div>{<Magazine />}</div>}
    </>
  );
};

export default Around;
