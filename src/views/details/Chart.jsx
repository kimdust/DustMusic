import { Heading, Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { BsDot } from "react-icons/bs";

const Chart = () => {
  const boxShadow = useColorModeValue("0 0 5px #dbdbdb", "none");
  const borderColor = useColorModeValue("#E5E7EB", "#383838");
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
      album: "Love wins all",
      time: "4:32",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/-d5I1nv7x56NNuD3nbMZDRG874qNwua2usmDnVM35VGwHbLlLw8ozDMUrClz7f0lnSbG40L_dAF75EU8=w544-h544-l90-rj",
      title: "Wife",
      icon: <BsDot style={noneIcon} />,
      ranking: "2",
      artist: "(여자)아이들",
      album: "2",
      time: "2:02",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/JOy8WgN2RdyG0rfiMlqEXsK8IDNUHMsxtuqI5EjcIPnquJ_C4X2xdOETW3bqquYq6mqZJbLjZdQfHhPVtg=w544-h544-l90-rj",
      title: "첫 만남은 계획대로 되지 않아",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "3",
      artist: "TWS (투어스)",
      album: "Sparkling Blue",
      time: "2:33",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/lOHDJdhlasRXh3svE14DtWAZMSsiYpIMwEdLCXujcg0pPUHWvi0KpBh_459RNuODWj4s4n9lKCeHkwtP=w544-h544-l90-rj",
      title: "To. X",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "4",
      artist: "태연",
      album: "To. X",
      time: "2:51",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/-d5I1nv7x56NNuD3nbMZDRG874qNwua2usmDnVM35VGwHbLlLw8ozDMUrClz7f0lnSbG40L_dAF75EU8=w544-h544-l90-rj",
      title: "Super Lady",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "5",
      artist: "(여자)아이들",
      album: "2",
      time: "2:33",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/vR3E6SvzUMgt9HwcSys34sHQQhtj62oXDbR7VYup1LM6D0unlayZOWmZnswWUZGEPUsxjpRESNHuPA0_NQ=w544-h544-l90-rj",
      title: "Drama",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "6",
      artist: "aespa",
      album: "Drama",
      time: "3:35",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/nkO-Bnt3OO4hl4wxmy66iC2EX9X7dIBAyuDzNJ7pVvdjg2r5LIVw2T7omHaAUYho1ULmu8ox1YxxkGU=w544-h544-l90-rj",
      title: "MANIAC",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "7",
      artist: "VIVIZ (비비지)",
      album: "VERSUS",
      time: "3:16",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/0DgY-1Bl10lB8E2d7Ddo1C4-lPV4wfGrwc01aAhn3kAfYikpd2uopv__p4skqINan_DOw44Ev8PZQE0VoA=w544-h544-l90-rj",
      title: "Perfect Night",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "8",
      artist: "LE SSERAFIM (르세라핌)",
      album: "Perfect Night",
      time: "2:40",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/XsPoLNWP9H4eO3xuqDRba8j495lo9wtB_V5ZemS2_fg3jqBMeaYSsk5_PhL1gTkZHAJeE-z1FRSyHbdH=w544-h544-l90-rj",
      title: "Bling-Bang-Bang-Born",
      icon: <BsDot style={noneIcon} />,
      ranking: "9",
      artist: "Creepy Nuts",
      album: "Bling-Bang-Bang-Born",
      time: "2:49",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/GmO9IS4cHNtH3aA6xikEtUYiZ-ZGoSCZb81VI0AbblkMb8_Y0FIL5Psd3iJwK5Nq2yc3_OmLWWk32GjH=w544-h544-l90-rj",
      title: "Yes or No (feat. 허윤진, Crush)",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "10",
      artist: "그루비룸 (GroovyRoom)",
      album: "Yes or No",
      time: "3:00",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/IJxBCzG0ie3izEBNaTSikPtEaudDxWTTy5nX1fTiOYnMmk3kVLFS4P8QJk-ePJ_7DZi1j_H4ddHyGuc=w544-h544-l90-rj",
      title: "I AM",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "11",
      artist: "IVE (아이브)",
      album: "I've IVE",
      time: "3:04",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/pABwFdKA8QVdq_b3hUft-3hDpjSXO5iqPga5YQ3Md-GUQcUFAIXTvmbZp2hwKQqgRsnPPVkH8lqmX7EW8g=w544-h544-l90-rj",
      title: "비의 랩소디",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "12",
      artist: "임재현",
      album: "비의 랩소디",
      time: "3:56",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/SSorroIBWlUYL9GPtSfIiKm94b-IJdUUawDaS1sL4IIuI82jt3b7wyGxcVie1aQnKnH5MG6f2l0G2q7j=w544-h544-l90-rj",
      title: "Discord",
      icon: <BsDot style={noneIcon} />,
      ranking: "13",
      artist: "QWER",
      album: "Harmony from Discord",
      time: "2:48",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/8WX8Sku2VQnrH-QasdneYtYdfrR2TN42rlR4ElGsUILCa4FYEW_5ukW8hxC5IoKnMUMG4nO1njMSXHHD=w544-h544-l90-rj",
      title: "DASH",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "14",
      artist: "NMIXX",
      album: "Fe3O4: BREAK",
      time: "2:47",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/0rVhke8mYtdDO3OEtopvHmzYlMqCHSIh-kWt5xHxZaMIc5ZcmQkxN5UI_4UtMty89DyzBfTZrHoJdgI=w544-h544-l90-rj",
      title: "Love 119",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "15",
      artist: "RIIZE",
      album: "Love 119",
      time: "2:54",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/AjWNrfzz6BqjRL5diZ-bPxFqGOsNk20xS6jcqoQWpNGWdch404mDWKVBkl4s9n74aLjXJWgldqm3Dc8=w544-h544-l90-rj",
      title: "アイドル",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "16",
      artist: "YOASOBI",
      album: "アイドル",
      time: "3:34",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/GlGpbb_WcFXRlvKysFd3UJ8ZRWtSwATuPG0bPRrHeaEOfALxVUdKozGnN9g382eiSfl98P4Xlbdvswl4-g=w544-h544-l90-rj",
      title: "에피소드",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "17",
      artist: "이무진",
      album: "에피소드",
      time: "3:26",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/6HM8d1d7o2RDgf17Qi-T_XWgOAE8eOxYRWTVmAMxjdKjQ0vzq5rn4zQt1QkGW4fCNEGJifJ50Kboozkj=w544-h544-l90-rj",
      title: "Seven - Explicit Ver. (feat. Latto)",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "18",
      artist: "정국",
      album: "Seven",
      time: "3:05",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/XSto4YM3BT1tiNpZc4dTLoyzA8iL7RY_2XFkrFWLl-XfdrQ-rgQzb0Sq0WsnFF2vIXAGPQyxbY8Jnrf_=w544-h544-l90-rj",
      title: "후라이의 꿈",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "19",
      artist: "AKMU",
      album: "Love Lee",
      time: "3:25",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/FzLKj6zFEJna0gRNDeZRH4nuQwEyN-YbCaC-bIGLoia6EhirHUachdvdEdR3VdB7pArgFCW8mtpLPL0=w544-h544-l90-rj",
      title: "Super Shy",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "20",
      artist: "NewJeans (뉴진스)",
      album: "Get Up",
      time: "2:35",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/l4oPO01pueXLrhrBmp4CGhhnbsyrqWVChaHTaoSVcsd38kbunpeAsxGBdwfbW5tm4wSsEURG7xklp-uZlg=w544-h544-l90-rj",
      title: "헤어지자 말해요",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "21",
      artist: "박재정",
      album: "Alone",
      time: "4:04",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/w8CZ67PzmWBLQwMMLWc6o5zJ5yjexAQUMzeEw9y1JygYsSKDShhqtaIcYKCTfE0yKVbVLqXhOxoRk-M=w544-h544-l90-rj",
      title: "Get A Guitar",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "22",
      artist: "RIIZE",
      album: "iScreaM Vol.28 : Get A Guitar Remixes",
      time: "2:41",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/ByRU7QoW11SylOEoPhybFwZ4opjcSNoEGe0WcrskC4hhSRBtighRhjbZhd_bzwwTWdkkXWTwc8rOKU8=w544-h544-l90-rj",
      title: "그대만 있다면 (여름날 우리 X 너드커넥션)",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "23",
      artist: "너드커넥션",
      album: "그대만 있다면",
      time: "4:11",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/cizq9uWlcIXukhMyfbyhB1j9HABtLOMrsg5SSMZXa5xmgzEd2iEC0I4CLYWIrEAegbW6Vq9akiVUFRHXtw=w544-h544-l90-rj",
      title: "밤양갱",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "24",
      artist: "비비 (BIBI)",
      album: "밤양갱",
      time: "2:27",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/eVDdfPxhtcPPVcYHI-ynRm6yL6549K0wp8SZ-weu3__x09y495LWWmBcTw1XLe8DIC70kaUycGH96mcAkA=w544-h544-l90-rj",
      title: "You & Me",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "25",
      artist: "JENNIE",
      album: "You & Me",
      time: "3:00",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/FzLKj6zFEJna0gRNDeZRH4nuQwEyN-YbCaC-bIGLoia6EhirHUachdvdEdR3VdB7pArgFCW8mtpLPL0=w544-h544-l90-rj",
      title: "ETA",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "26",
      artist: "NewJeans (뉴진스)",
      album: "Get up",
      time: "2:32",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/15wkXs1Mndc-2cplMMNKNdJHHG6hg4Ui1nYBgcdXcpSZVUvHe1uvQxnLrSnSmTLGS_wjcR7rdxHqjnQ=w544-h544-l90-rj",
      title: "인사",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "27",
      artist: "범진",
      album: "인사",
      time: "3:36",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/XSto4YM3BT1tiNpZc4dTLoyzA8iL7RY_2XFkrFWLl-XfdrQ-rgQzb0Sq0WsnFF2vIXAGPQyxbY8Jnrf_=w544-h544-l90-rj",
      title: "Love Lee",
      icon: <BsDot style={noneIcon} />,
      ranking: "28",
      artist: "AKMU",
      album: "Love Lee",
      time: "3:00",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/jdEmyQN3yqjq5M0QOSQ29dg7q0Ply5-lXjrW6l5QudxPPNqdT9qHdNkNE8cafiA_kpAeYzFNOrwZ6t5LAA=w544-h544-l90-rj",
      title: "Standing Next to You",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "29",
      artist: "정국",
      album: "GOLDEN",
      time: "3:27",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/eIR62ypK5TVj3K3lLp_cN6FcCUJiiyULwsdhPx1j5OOl4Iq6C3jGHX-pFAfx_4T7CLwalsfPAAiIPqWh=w544-h544-l90-rj",
      title: "심 (心)",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "30",
      artist: "DK (디셈버)",
      album: "심 (心)",
      time: "4:18",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/Wv2stMD4szjwVvdle5LlQw6DSFkVsIIn2m_lHRgW-ARdxZnsSqoh2KvyUCorsW6Q4Zv-9jlvA-vaObw=w544-h544-l90-rj",
      title: "퀸카 (Queencard)",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "31",
      artist: "(여자)아이들",
      album: "I feel",
      time: "2:42",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/uTnwWMEklLK41t4igGqauucTGHrpIOj4JFKZodf7wcIee6EVuoDgG1EGLQQSbJsUa3wPGMnap9TQB5c=w544-h544-l90-rj",
      title: "Do or Die",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "32",
      artist: "임영웅",
      album: "Do or Die",
      time: "3:26",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/uXUcQwZ7-V4CzLtCK2HwbEOy589iKlfsH5FN5MhvCBr8xkAH1LP8rc49rVIKyFohrkTj53pdeOMKdFxPIQ=w544-h544-l90-rj",
      title: "Spicy",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "33",
      artist: "aespa",
      album: "MY WORLD",
      time: "3:18",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/M1wO9OhnG_tmmhuxNaKXdvKqUJdkjD8xKZpshXpSjogNGU7nA0_OI5roPpQbQ6JOBQz8mK_oxk3BavHDQA=w544-h544-l90-rj",
      title: "손오공",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "34",
      artist: "세븐틴",
      album: "FML",
      time: "3:21",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/IJxBCzG0ie3izEBNaTSikPtEaudDxWTTy5nX1fTiOYnMmk3kVLFS4P8QJk-ePJ_7DZi1j_H4ddHyGuc=w544-h544-l90-rj",
      title: "Kitsch",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "35",
      artist: "IVE (아이브)",
      album: "I've IVE",
      time: "3:16",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/MlXLwWTtRo5BZ15Hac-bcLSTXYGdXYCRJqQ-T1nDuxqLLAy2s3rQbtR74OKGDtx4fia8hTt2eU-SLWAG=w544-h544-l90-rj",
      title: "Off The Record",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "36",
      artist: "IVE (아이브)",
      album: "Off The Record",
      time: "3:09",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/lXx4CywhwGWvaD20erWYYztDrj49n-Xv1hC4wgpkVkBUPEFj7GLWSLf-YIgnP_otdziof_jP0SVU-UU=w544-h544-l90-rj",
      title: "Baddie",
      icon: <BsDot style={noneIcon} />,
      ranking: "37",
      artist: "IVE (아이브)",
      album: "I'VE MINE",
      time: "2:35",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/T7zV1U9DY4QyX1-LRMh82bdLy4vzWszPdjassPk-gCJ5WaUFekhqCvOllR2txyn-LKyuUEj8t607PeI=w544-h544-l90-rj",
      title: "GODS",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "38",
      artist: "League of Legends, NewJeans (뉴진스)",
      album: "GODS",
      time: "3:41",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/H-Zd0IC85VkJXOlDXiuuaiYNLKPtQuWdwgE2c2Mg3309UrxnfAcWIqSBLXyfmf8uviS6q4Y7VdI2574=w544-h544-l90-rj",
      title: "Steal The Show",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "39",
      artist: "Lauv",
      album: "Steal The Show (From 'Elemental')",
      time: "3:12",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/pJhEmBsCBmf7kR1wc50TcCiS1GhEnNaxu8rHkKWIRSipJofEo8PTNr8pONWl4kRKsnPWblWTK--mu1u43w=w544-h544-l90-rj",
      title: "그대가 내 안에 박혔다 (그내박)",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "40",
      artist: "순순희 (기태)",
      album: "그대가 내 안에 박혔다 (그내박)",
      time: "3:38",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/kiU4wpUCReZaSxlujjo8Ye-wN37aYR3gjkNoNEriU1G-sbV4Y1dmS9a5HWRD8JP0yv08lfSvWHe3ykZP=w544-h544-l90-rj",
      title: "숲",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "41",
      artist: "최유리",
      album: "유영",
      time: "3:49",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/LbC4cFatDGDjBBR4W39ERjdw5eEOR3laSD-2rK4tPeaMImeVjZEkygiX8qdP6opp3Z0CK98GSVbrYgk=w544-h544-l90-rj",
      title: "꿈",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "42",
      artist: "태연",
      album: "웰컴투 삼달리 OST Part.3",
      time: "3:59",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/EjuB2PuG_IrW2lphUbqbfiRa7hxh9jMOGSELjPSWP7ys2RSDN0JPPCUc5WgWu3kxIPgvp-mcSjWeIwmxjg=w544-h544-l90-rj",
      title: "이브, 프시케 그리고 푸른 수염의 아내",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "43",
      artist: "LE SSERAFIM (르세라핌)",
      album: "UNFORGIVEN",
      time: "3:06",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/YPg5JKIxUIFsW2UrUQf8xo_rvHdCUrr7b-4dVkNnws9dNtohdhhD6jjt7t20fqQ21CuzGIEg3EqGm8QU=w544-h544-l90-rj",
      title: "안 아름답고도 안 아프구나",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "44",
      artist: "원슈타인",
      album: "안 아름답고도 안 아프구나",
      time: "2:45",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/znKSFoitaDBvrR4xKIo4y_vGdHfnUX2AX9X_jXNulm3H0sHaNbGYkIF_5nqhz7buTZSkLocDQyoDf_o=w544-h544-l90-rj",
      title: "새벽 통화",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "45",
      artist: "적재",
      album: "새벽 통화",
      time: "3:05",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/XNEmm81IV32mGxlJKcXaz10bSkF0ehKGpYWk2kzh2QzGioFIUHVr9rZh0ktPybBzok9CNAKL3fWGjYWt=w544-h544-l90-rj",
      title: "High Hopes",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "46",
      artist: "Panic! At The Disco",
      album: "Pray for the Wicked",
      time: "3:11",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/Jxzn-OXfXs8FWtYGJIEY5XSiVR0NoSf02OLvAz4oogfhIhbhGgc1luVfWHWa8eRa9q6Tvc7UIWp3WYGXIw=w544-h544-l90-rj",
      title: "기억해줘요 내 모든 날과 그때를",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "47",
      artist: "화곡동 청개구리",
      album: "기억해줘요 내 모든 날과 그때를",
      time: "3:37",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/EjuB2PuG_IrW2lphUbqbfiRa7hxh9jMOGSELjPSWP7ys2RSDN0JPPCUc5WgWu3kxIPgvp-mcSjWeIwmxjg=w544-h544-l90-rj",
      title: "UNFORGIVEN (feat. Nile Rodgers)",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "48",
      artist: "LE SSERAFIM (르세라핌)",
      album: "UNFORGIVEN",
      time: "3:03",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/5wNZC748YgB6SfijWG75b5AliV-BnFFNu9iTKFfo6nnbiwlETLacLKnoaNAfarKMKppZrG4lOWM7kfzr=w544-h544-l90-rj",
      title: "Beautiful Things",
      icon: <MdArrowDropUp style={upIcon} />,
      ranking: "49",
      artist: "Benson Boone",
      album: "Beautiful Things",
      time: "3:01",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/0kmYhL9aDL3mA-QfSe_i6zMiP0-tic4O1mPYKGxKSsWIbTM5nZlXDVSZjDBLeD6kelGlnRoPaaXEemQ=w544-h544-l90-rj",
      title: "Bad News",
      icon: <MdArrowDropDown style={downIcon} />,
      ranking: "50",
      artist: "KISS OF LIFE",
      album: "Born to be XX",
      time: "2:41",
    },
  ];

  return (
    <>
      <Box width={"100%"} padding={{ base: "0", lg: "0 200px" }} m>
        <Heading fontFamily={"Pretendard"} paddingBottom={"20px"}>
          인기차트 Top 50
        </Heading>
        {chart.map((item, index) => (
          <Box
            display={{ base: "block", md: "flex" }}
            alignItems={"center"}
            gap={"15px"}
            p={"10px 0"}
            borderBottom={`1px solid ${borderColor}`}
            justifyContent={"space-between"}
          >
            <Flex alignItems={"center"} w={{ base: "100%", md: "75%" }}>
              <img
                src={item.imageUrl}
                alt=""
                width={50}
                style={{ boxShadow }}
              />
              <Box marginLeft={"10px"}>{item.icon}</Box>
              <Text
                marginRight={{ base: "0", md: "-10px" }}
                width={{ base: "5%", md: "40%" }}
              >
                {item.ranking}
              </Text>
              <Text width={{ base: "80%", md: "100%" }}>{item.title}</Text>
              <Text
                width={{ base: "40%", md: "80%" }}
                textAlign={{ base: "right", md: "left" }}
              >
                {item.artist}
              </Text>
            </Flex>
            <Flex
              pt={{ base: "10px", md: "0" }}
              alignItems={"center"}
              w={{ base: "100%", md: "25%" }}
            >
              <Text width={{ base: "50%", md: "100%" }} color={"#9CA3AF"}>
                {item.album}
              </Text>
              <Text
                width={{ base: "50%", md: "100%" }}
                color={"#9CA3AF"}
                textAlign={"right"}
              >
                {item.time}
              </Text>
            </Flex>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Chart;
