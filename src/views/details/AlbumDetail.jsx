import { Heading, Box, Text, Flex } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";

const MusicPlayer = ({ slides }) => {
  const { index } = useParams();
  const selectedIndex = parseInt(index, 10);
  const selectedSlide = slides && slides[selectedIndex];
  const albumRef = useRef(null);

  const albumStyle = {
    boxShadow: "0 0 5px #dbdbdb",
  };
  const textStyle = {
    display: "flex",
    gap: "50px",
    fontSize: "18px",
    padding: "20px 0",
    borderBottom: "1px solid #E5E7EB",
  };

  return (
    <>
      <Box width={"100%"} padding={{ base: "0 20px", lg: "0 200px" }} m>
        <Flex
          gap={"50px"}
          alignItems={"flex-end"}
          mb={"30px"}
          display={{ base: "block", lg: "flex" }}
        >
          <Box w={{ base: "100%", md: "20%" }}>
            <img
              ref={albumRef}
              src={selectedSlide.imageUrl}
              alt=""
              style={albumStyle}
            />
          </Box>

          <Text>
            <Heading
              fontFamily={"Pretendard"}
              paddingTop={"10px"}
              fontSize={{ base: "20px", lg: "50px" }}
            >
              {selectedSlide.title}
            </Heading>
            <Text fontSize={{ base: "16px", lg: "20px" }} py={"10px"}>
              {selectedSlide.album} {"·"} {selectedSlide.artist} {"·"}{" "}
              {selectedSlide.date}
            </Text>
            <Text fontSize={{ base: "16px", lg: "20px" }} pb={"5px"}>
              {selectedSlide.count} {"·"} {selectedSlide.time}
            </Text>
          </Text>
        </Flex>
        <Box>
          {[...Array(7).keys()].map((index) => {
            const songNumber = index + 1;
            const songKey = `song${songNumber}`;
            const song = selectedSlide[songKey];

            if (song !== null) {
              return (
                <Text style={textStyle} key={songKey}>
                  <Text
                    color={"#9CA3AF"}
                    fontSize={{ base: "15px", lg: "18px" }}
                  >
                    {songNumber}
                  </Text>
                  <Text
                    fontWeight={"700"}
                    fontSize={{ base: "15px", lg: "18px" }}
                  >
                    {song}
                  </Text>
                </Text>
              );
            } else {
              return null;
            }
          })}
        </Box>
      </Box>
    </>
  );
};

export default MusicPlayer;
