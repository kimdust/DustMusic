import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Box, Heading, Text } from "@chakra-ui/react";

const SlideNewVideo = () => {
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
      imageUrl: "https://i.ytimg.com/vi/O_B-0iPCbaU/maxresdefault.jpg",
      title: "Sugar Rush MV",
      artist: "비비 (BIBI)",
      youtubeLink: "https://www.youtube.com/watch?v=O_B-0iPCbaU",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/jzQ8YrQxvrU/maxresdefault.jpg",
      title: "FAERIE SOIRÉE MV",
      artist: "Melanie Martinez",
      youtubeLink: "https://www.youtube.com/watch?v=jzQ8YrQxvrU",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/mFbILexYSQg/maxresdefault.jpg",
      title: "홀씨 MV",
      artist: "아이유",
      youtubeLink: "https://www.youtube.com/watch?v=mFbILexYSQg",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/srH63CP-7ZA/maxresdefault.jpg",
      title: "STAY MV",
      artist: "차은우",
      youtubeLink: "https://www.youtube.com/watch?v=srH63CP-7ZA",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/ZjBZ8MUnB0E/maxresdefault.jpg",
      title: "Training Season MV",
      artist: "Dua Lipa",
      youtubeLink: "https://www.youtube.com/watch?v=ZjBZ8MUnB0E",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/bNKXxwOQYB8/maxresdefault.jpg",
      title: "EASY MV",
      artist: "LE SSERAFIM (르세라핌)",
      youtubeLink: "https://www.youtube.com/watch?v=bNKXxwOQYB8",
    },
  ];
  const handleSlideClick = (youtubeLink) => {
    window.open(youtubeLink, "_blank"); // Open the YouTube link in a new tab
  };

  return (
    <>
      <Heading
        fontFamily={"Pretendard"}
        padding={"30px 0 20px 0"}
        fontSize={"25px"}
      >
        새 뮤직비디오
      </Heading>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }}
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

export default SlideNewVideo;
