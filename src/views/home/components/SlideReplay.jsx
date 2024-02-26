import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SlideReplay = () => {
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
        "https://lh3.googleusercontent.com/EqT8HM3CnJFhcMPJfvs287zDyZJUrhxwaFfxGY6Nzxr8S9uwa2oXSfvfy1x2TaUwOkWu8xNUeUFpEzr2pQ=w544-h544-l90-rj",
      title: "Memories",
      artist: "RIIZE",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/O4Rptgi07KYY-ErCwvJ2k_JEeipXX8bfcvtCrfSlpuhBFRJZKgHdiMd3nP-QrAeYUEQg0Dx6n6aLqtz6YA=w544-h544-l90-rj",
      title: "자니 (feat. 다이나믹 듀오)",
      artist: "프라이머리",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/cizq9uWlcIXukhMyfbyhB1j9HABtLOMrsg5SSMZXa5xmgzEd2iEC0I4CLYWIrEAegbW6Vq9akiVUFRHXtw=w544-h544-l90-rj",
      title: "밤양갱",
      artist: "비비 (BIBI)",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/GF7zSdJi3LX5B2FC8OSdERoW5UPb5CuF_hOjzokCF5dG_ktzyacDfHB5HF08HI7lQdzcWMD_LLZGHEI=w544-h544-l90-rj",
      title: "위잉위잉",
      artist: "혁오",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/ytbkUaJaduL4gE07iKmg1LwZPMqRh-9vX7vHksmZ4VklMJLh3eU5maCsQgEv0En42cyXu0oPU6n07ZwH=w544-h544-l90-rj",
      title: "Love wins all",
      artist: "아이유",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/uXUcQwZ7-V4CzLtCK2HwbEOy589iKlfsH5FN5MhvCBr8xkAH1LP8rc49rVIKyFohrkTj53pdeOMKdFxPIQ=w544-h544-l90-rj",
      title: "Thirsty",
      artist: "aespa",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/x87vTXqhZYY2VGMTmXkbCJG-3l58O37sFVsA9pluP6nxXanJrNs-uFYezP9W3CDg152MYmyOZQEYTG2V=w544-h544-l90-rj",
      title: "와르르 ♥",
      artist: "Colde (콜드)",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/OhxDTHQOQzSrcdgH9hzqzp1v22GYDE-QKnkryvCeq4ddx-3K3_c8oDXN0E6NvHlMn1q4XV59aHr0oL4f=w544-h544-l90-rj",
      title: "Lover",
      artist: "Taylor Swift",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/1pbPgmI3FYrTQetJ8hTdVlq-ysS0AcHK6_UHUYG0_ug2aulSWgEST-gs9WYsWK9EnvuJMh-zay1z4U6a=w544-h544-l90-rj",
      title: "deja vu",
      artist: "Olivia Rodrigo",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/MtrhVmcX2DlZZW3uT6kk9AxrpMzx_RXwIm1NwRavSpq8mElJ65gszR04OztD1iaBLo_e9AEDr-xIpwg=w544-h544-l90-rj",
      title: "시간이 들겠지 (feat. Colde)",
      artist: "로꼬",
    },
  ];

  return (
    <>
      <Heading fontFamily={"Pretendard"} paddingBottom={"20px"}>
        다시 듣기
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
            <Link to={`/music/${index}`}>
              <img src={slide.imageUrl} alt="" width={220} style={albumStyle} />
              <Text padding={"15px 0"}>
                <strong>{slide.title}</strong>
                <p>{slide.artist}</p>
              </Text>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SlideReplay;
