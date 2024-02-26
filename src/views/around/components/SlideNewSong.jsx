import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SlideNewSong = () => {
  const slideStyle = {
    padding: "10px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  const albumStyle = {
    boxShadow: "0 0 10px #dbdbdb",
  };
  const slides = [
    {
      imageUrl:
        "https://lh3.googleusercontent.com/89xPezmXewFmylozb5WRk460451cQ0d795TyFGVpdjy-e4b7k70y5ORFH4D-dnyGf_EQ2vK4DVl-r8NaLg=w544-h544-l90-rj",
      title: "With YOU-th",
      album: "EP",
      artist: "TWICE (트와이스)",
      date: "2024",
      count: "6곡",
      time: "17분",
      song1: "I GOT YOU",
      song2: "ONE SPARK",
      song3: "RUSH",
      song4: "NEW NEW",
      song5: "BLOOM",
      song6: "YOU GET ME",
      song7: null,
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/WNAqF7agFYXR9rkV8MRrvIjNus8mxPULUoYS5tJYmvIB1mKYgA5Nbq166p-J7BmhEH3rrh-vALOrGwyt=w544-h544-l90-rj",
      title: "EASY",
      album: "EP",
      artist: "LE SSERAFIM (르세라핌)",
      date: "2024",
      count: "7곡",
      time: "19분",
      song1: "Good Bones",
      song2: "EASY",
      song3: "Swan Song",
      song4: "Smart",
      song5: "We got so much",
      song6: "EASY (Sped up ver.)",
      song7: "EASY (Slowed + Reverb ver.)",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/llKodqnVQxkheXBLs1Aonmbm9bncWVUqB6lCCN_p6TJX6fHOcN0lGriB0llfdYtf6cr_wl9v6-1iqW96=w544-h544-l90-rj",
      title: "세작, 매혹된 자들 OST 제 4수",
      album: "싱글",
      artist: "로이킴",
      date: "2024",
      count: "2곡",
      time: "7분 30초",
      song1: "그대라는 꽃잎",
      song2: "그대라는 꽃잎 (Inst.)",
      song3: null,
      song4: null,
      song5: null,
      song6: null,
      song7: null,
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/nak3D0ilEni-9ZTI7H7_7zEOGxFd39IyVX2wCn30GLfSSlIxcvoclQ_8v72b3zcYQReFoh7AVIOO6WF5dA=w544-h544-l90-rj",
      title: "손오공 (Workout Remix)",
      album: "싱글",
      artist: "세븐틴",
      date: "2024",
      count: "1곡",
      time: "3분 14초",
      song1: "손오공 (Workout Remix)",
      song2: null,
      song3: null,
      song4: null,
      song5: null,
      song6: null,
      song7: null,
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/rbYcYKXDOtM6t_V25mJgBFDr_8ptHMSQPsdDnMaxVfAIPJu_MyaEG_4O96ZxGbehc5Ok8hrgrNz46IA=w544-h544-l90-rj",
      title: "Highlights",
      album: "싱글",
      artist: "Sasha Alex Sloan",
      date: "2024",
      count: "1곡",
      time: "2분 33초",
      song1: "Highlights",
      song2: null,
      song3: null,
      song4: null,
      song5: null,
      song6: null,
      song7: null,
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/snFCvIASmExR-2J6lZB85AOsCT2WcM6zh74qoFa5zo0pp1TFeabTplyntaIf1yGJ5iwCRIHKhmxNf3Pv=w544-h544-l90-rj",
      title: "The Winning",
      album: "EP",
      artist: "아이유",
      date: "2024",
      count: "5곡",
      time: "18분",
      song1: "Shopper",
      song2: "홀씨",
      song3: "Shh.. (feat. 혜인(HYEIN), 조원선, Special Narr. 패티김)",
      song4: "Love wins all",
      song5: "관객이 될게 (I stan U)",
      song6: null,
      song7: null,
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/RQr5yrxJ0LpVGgwNilMpn7TfH-wvSmshWfgqs50KbXuSNxW-FIeDfq3EBOQrb1603rYgljNtXeuwvgw=w544-h544-l90-rj",
      title: "over",
      album: "싱글",
      artist: "SOLOMON",
      date: "2024",
      count: "1곡",
      time: "2분 14초",
      song1: "over",
      song2: null,
      song3: null,
      song4: null,
      song5: null,
      song6: null,
      song7: null,
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/TT0G0G1XV83JvblznenE1ZKdOtJYbt7dG7NjOaDVcOMYeLkmQxOrmcjz144izWv-bwyDUiO3S_-5xDg=w544-h544-l90-rj",
      title: "A lot of stars",
      album: "싱글",
      artist: "DBO",
      date: "2024",
      count: "1곡",
      time: "1분 39초",
      song1: "A lot of stars",
      song2: null,
      song3: null,
      song4: null,
      song5: null,
      song6: null,
      song7: null,
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/nLxEYRyP7xSbNaycGB7nnbT9jiLBZLiofPcHNgcrQe4v7vYPbFEUZ1kKNZEJLEs4esPUObd0xsOnghTd=w544-h544-l90-rj",
      title: "너도 해방",
      album: "싱글",
      artist: "스카이민혁",
      date: "2024",
      count: "1곡",
      time: "3분 12초",
      song1: "over",
      song2: "너도 해방",
      song3: null,
      song4: null,
      song5: null,
      song6: null,
      song7: null,
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/dxifT9_kH_0zO7vUTrnX1ne9uIimRbqIDwVpcQ-gF-45rklFZS6zStMMNpQ3Kj9_EcG4PA470fd57hqYsQ=w544-h544-l90-rj",
      title: "Natural I",
      album: "EP",
      artist: "알레프",
      date: "2024",
      count: "4곡",
      time: "13분 3초",
      song1: "우리 이렇게만 있자",
      song2: "영영 안녕",
      song3: "사랑의 언어",
      song4: "환상의 나라",
      song5: null,
      song6: null,
      song7: null,
    },
  ];

  return (
    <>
      <Heading
        fontFamily={"Pretendard"}
        padding={"25px 0 20px 0"}
        fontSize={"25px"}
      >
        새 앨범 및 싱글
      </Heading>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 6.5,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={slideStyle}>
            <Link to={`/album/${index}`}>
              <img src={slide.imageUrl} alt="" width={220} style={albumStyle} />
              <Text padding={"15px 0"}>
                <strong>{slide.title}</strong>
                <p>
                  {slide.album} {"·"} {slide.artist}
                </p>
              </Text>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SlideNewSong;
