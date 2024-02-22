import { VStack, Grid, GridItem, Heading, Box, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { TweenMax, Power0 } from "gsap";
import { RxTrackNext, RxTrackPrevious, RxPause, RxPlay } from "react-icons/rx";

const MusicPlayer = ({ slides }) => {
  const { index } = useParams();
  const selectedIndex = parseInt(index, 10);
  const selectedSlide = slides && slides[selectedIndex];
  const albumRef = useRef(null);
  const albumAnimation = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    setIsPlaying((prevState) => !prevState);
  };

  useEffect(() => {
    albumAnimation.current = TweenMax.to(albumRef.current, 5, {
      rotation: 360,
      ease: Power0.easeNone,
      repeat: -1,
      paused: true, // 애니메이션을 일시정지 상태로 시작
    });
  }, []);

  useEffect(() => {
    if (isPlaying) {
      albumAnimation.current.resume(); // 애니메이션 재개
    } else {
      albumAnimation.current.pause(); // 애니메이션 일시정지
    }
  }, [isPlaying]);

  const albumStyle = {
    boxShadow: "0 0 5px #dbdbdb",
    position: "absolute",
    borderRadius: "300px",
  };
  const gridStyle = {
    w: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
  };

  return (
    <>
      <VStack>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          //   display={{ base: "block", md: "flex" }}
          gap={6}
          w={"100%"}
          h={"75vh"}
          px={"150px"}
          justifyContent={"center"}
        >
          <GridItem style={gridStyle} position={"relative"}>
            <img
              ref={albumRef}
              src={selectedSlide.imageUrl}
              alt=""
              width={"70%"}
              style={albumStyle}
            />
            <img
              src="https://i.pinimg.com/originals/d3/03/96/d303960c44b99e5b86d361890a53cb9c.png"
              alt=""
            />
          </GridItem>

          <GridItem key={index} style={gridStyle}>
            <Heading
              fontFamily={"Pretendard"}
              paddingTop={"10px"}
              fontSize={"50px"}
            >
              {selectedSlide.title}
            </Heading>
            <Text fontSize={"25px"}>{selectedSlide.artist}</Text>

            <Box display={"flex"} p={"30px"} gap={20}>
              <RxTrackPrevious size={80} />
              {isPlaying ? (
                <RxPause size={80} onClick={handleToggle} />
              ) : (
                <RxPlay size={80} onClick={handleToggle} />
              )}
              <RxTrackNext size={80} />
            </Box>
          </GridItem>
        </Grid>
      </VStack>
    </>
  );
};

export default MusicPlayer;
