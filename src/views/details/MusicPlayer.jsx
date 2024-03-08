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
  const [iconSize, setIconSize] = useState(80);

  const handleToggle = () => {
    setIsPlaying((prevState) => !prevState);
  };

  useEffect(() => {
    albumAnimation.current = TweenMax.to(albumRef.current, 5, {
      rotation: 360,
      ease: Power0.easeNone,
      repeat: -1,
      paused: true,
    });
  }, []);

  useEffect(() => {
    if (isPlaying) {
      albumAnimation.current.resume();
    } else {
      albumAnimation.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIconSize(30);
      } else {
        setIconSize(80);
      }
    };

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          gap={6}
          w={"100%"}
          h={"75vh"}
          px={"150px"}
          justifyContent={"center"}
        >
          <GridItem
            style={gridStyle}
            position={"relative"}
            w={{ base: "80%", lg: "100%" }}
            m={"0 auto"}
          >
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
              paddingTop={{ base: "0", xl: "10px" }}
              mt={"0"}
              fontSize={{ base: "30px", xl: "50px" }}
            >
              {selectedSlide.title}
            </Heading>
            <Text fontSize={{ base: "18px", xl: "25px" }}>
              {selectedSlide.artist}
            </Text>

            <Box display={"flex"} p={"30px"} gap={20}>
              <RxTrackPrevious size={iconSize} />
              {isPlaying ? (
                <RxPause size={iconSize} onClick={handleToggle} />
              ) : (
                <RxPlay size={iconSize} onClick={handleToggle} />
              )}
              <RxTrackNext size={iconSize} />
            </Box>
          </GridItem>
        </Grid>
      </VStack>
    </>
  );
};

export default MusicPlayer;
