import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Box, Heading, Text } from "@chakra-ui/react";

const SlideVideo = () => {
  const slideStyle = {
    padding: "10px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  const albumStyle = {
    boxShadow: "0 0 10px #dbdbdb",
    cursor: "pointer",
  };
  const slides = [
    {
      imageUrl: "https://i.ytimg.com/vi/JleoAppaxi0/maxresdefault.jpg",
      title: "Love wins all MV",
      artist: "아이유",
      youtubeLink: "https://www.youtube.com/watch?v=JleoAppaxi0",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/hVAc1Vf2ITU/maxresdefault.jpg",
      title: "첫 만남은 계획대로 되지 않아 MV",
      artist: "TWS (투어스)",
      youtubeLink: "https://www.youtube.com/watch?v=hVAc1Vf2ITU",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/3kGAlp_PNUg/maxresdefault.jpg",
      title: "후라이의 꿈 LYRIC VIDEO",
      artist: "AKMU",
      youtubeLink: "https://www.youtube.com/watch?v=3kGAlp_PNUg",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/yd8_KD4rZio/maxresdefault.jpg",
      title: "모르는 사람 MV",
      artist: "자이언티 (Zion.T)",
      youtubeLink: "https://www.youtube.com/watch?v=yd8_KD4rZio",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/xU8mQMLx0tk/maxresdefault.jpg",
      title: "All Night (Feat. Saweetie) MV",
      artist: "IVE (아이브)",
      youtubeLink: "https://www.youtube.com/watch?v=xU8mQMLx0tk",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/jOTfBlKSQYY/maxresdefault.jpg",
      title: "ETA MV",
      artist: "NewJeans (뉴진스)",
      youtubeLink: "https://www.youtube.com/watch?v=jOTfBlKSQYY",
    },
  ];
  const handleSlideClick = (youtubeLink) => {
    window.open(youtubeLink, "_blank"); // Open the YouTube link in a new tab
  };

  return (
    <>
      <Heading fontFamily={"Pretendard"} padding={"25px 0 20px 0"}>
        추천 뮤직비디오
      </Heading>
      <Swiper
        spaceBetween={20}
        slidesPerView={3.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={slideStyle}>
            <img
              src={slide.imageUrl}
              alt=""
              width={450}
              style={albumStyle}
              onClick={() => handleSlideClick(slide.youtubeLink)}
            />
            <Text padding={"15px 0"}>
              <strong>{slide.title}</strong>
              <p>{slide.artist}</p>
            </Text>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SlideVideo;
