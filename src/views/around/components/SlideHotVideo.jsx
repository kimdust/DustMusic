import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { styled } from "styled-components";

const SlideHotVideo = () => {
  const slideStyle = {
    padding: "10px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
  const StyledImage = styled.div`
    position: relative;
    img {
      transition: all 0.3s ease;
      cursor: pointer;
    }
    .playIcon {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    &:hover {
      img {
        filter: brightness(80%);
      }
      .playIcon {
        display: block;
      }
    }
  `;
  const slides = [
    {
      imageUrl: "https://i.ytimg.com/vi/6f3RzjXPQwA/maxresdefault.jpg",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "1",
      title: "Super Lady MV",
      artist: "(여자)아이들",
      views: "조회수 5552만회",
      youtubeLink: "https://www.youtube.com/watch?v=6f3RzjXPQwA",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/baaNwRAhHBo/maxresdefault.jpg",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "2",
      title: "Wife MV",
      artist: "(여자)아이들",
      views: "조회수 3863만회",
      youtubeLink: "https://www.youtube.com/watch?v=baaNwRAhHBo",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/JleoAppaxi0/maxresdefault.jpg",
      icon: <BsDot style={noneIcon} />,
      ranking: "3",
      title: "Love wins all MV",
      artist: "아이유",
      views: "조회수 5003만회",
      youtubeLink: "https://www.youtube.com/watch?v=JleoAppaxi0",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/6ZUIwj3FgUY/maxresdefault.jpg",
      icon: <BsDot style={noneIcon} />,
      ranking: "4",
      title: "I AM MV",
      artist: "IVE (아이브)",
      views: "조회수 2.1억회",
      youtubeLink: "https://www.youtube.com/watch?v=6ZUIwj3FgUY",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/tJut2wIsC1w/maxresdefault.jpg",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "5",
      title: "Do or Die MV",
      artist: "임영웅",
      views: "조회수 960만회",
      youtubeLink: "https://www.youtube.com/watch?v=tJut2wIsC1w",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/D8VEhcPeSlc/maxresdefault.jpg",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "6",
      title: "Drama MV",
      artist: "aespa",
      views: "조회수 1억회",
      youtubeLink: "https://www.youtube.com/watch?v=D8VEhcPeSlc",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/efxCxTJY2ZE/maxresdefault.jpg",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "7",
      title: "ULT MV",
      artist: "림킴",
      views: "조회수 167만회",
      youtubeLink: "https://www.youtube.com/watch?v=D8VEhcPeSlc",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/C3GouGa0noM/maxresdefault.jpg",
      icon: <BsDot style={noneIcon} />,
      ranking: "8",
      title: "GODS (feat. NewJeans) MV",
      artist: "League of Legends",
      views: "조회수 1억회",
      youtubeLink: "https://www.youtube.com/watch?v=C3GouGa0noM",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/rDFUl2mHIW4/maxresdefault.jpg",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "9",
      title: "Kidding MV",
      artist: "이세계아이돌",
      views: "조회수 1385만회",
      youtubeLink: "https://www.youtube.com/watch?v=rDFUl2mHIW4",
    },
    {
      imageUrl: "https://i.ytimg.com/vi/GsV1i0QHi-o/maxresdefault.jpg",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "10",
      title: "Stuck in The Middle MV",
      artist: "BABYMONSTER",
      views: "조회수 1억회",
      youtubeLink: "https://www.youtube.com/watch?v=GsV1i0QHi-o",
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
        인기 뮤직비디오
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
            <StyledImage onClick={() => handleSlideClick(slide.youtubeLink)}>
              <img src={slide.imageUrl} alt="" />
              <div className="playIcon">
                <AiOutlinePlayCircle size={30} />
              </div>
            </StyledImage>
            <Text
              padding={"15px 0"}
              cursor={"pointer"}
              onClick={() => handleSlideClick(slide.youtubeLink)}
            >
              <Flex>
                {slide.icon}
                <Text m={"0 20px 0 5px"}>{slide.ranking}</Text>
                <strong>{slide.title}</strong>
              </Flex>

              <p>
                {slide.artist} {"·"} {slide.views}
              </p>
            </Text>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SlideHotVideo;
