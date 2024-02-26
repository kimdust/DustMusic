import "swiper/css";
import "swiper/css/pagination";
import { Grid, Heading, GridItem, VStack, Text } from "@chakra-ui/react";
import { FaLeaf, FaClock, FaMusic } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Mood = () => {
  const albumStyle = {
    boxShadow: "0 0 5px #dbdbdb",
  };
  const gridStyle = {
    w: "100%",
    h: "100px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    p: "5px",
    gap: "10px",
  };
  const heeling = [
    {
      imageUrl:
        "https://lh3.googleusercontent.com/KcmNm2i_MSTELpoZ0rGUpqL-EkYNbnZQ-m6OOCYPPonQU6jweGltpCZ8FcKw-bPchz_HcwcyaQPnWfcQ=w544-h544-l90-rj",
      title: "서랍",
      artist: "10CM",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/NzUjssQrOYYpMk-RZHGS7oS1jQuEBUiPo1HGJVhJ4uTwgrjE9p1FUOMTaOIMUWzPE3wWFDp_byRQTQ2g_A=w544-h544-l90-rj",
      title: "고백",
      artist: "멜로망스",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/4rMXhBF_R14WJuySr-lnNmkTrUvIqTclFr0sjdAxWM_91cF0Wgx07Jzd_IqB8ZdHIVPn-kBhDJuWnTU=w544-h544-l90-rj",
      title: "산책",
      artist: "백예린",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/ZXtF0jtEAEh5Fl38OSSYqWqMYDF32As2uas2iNnV-XYIkqiX8guaoGFt-okAPe_-g9eiAqiMwhtNe_Ny=w544-h544-l90-rj",
      title: "한숨(Breathe)",
      artist: "이하이",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/SdxYM7cJfB3M9oCyqFOxkfcCtL5yqZ04WjFDYBlLAKLye2odJy9UiOnsOUTp4VL-ZG1N95tjn4IkFNnykA=w544-h544-l90-rj",
      title: "가까운 듯 먼 그대여",
      artist: "카더가든",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/-tdq58fAgaawQcx744mZUP67379plUJcWvzPSyfRy305ZmNcYii54WboN9OBa4I-cEdzu7u5yW4nSFlBQA=w544-h544-l90-rj",
      title: "아이와 나의 바다",
      artist: "아이유",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/kWu915T6oqnxN4A_jsq6ubEV4qMq5yuEtbIe9fX9oF8aGaSmaDSZgmIn2QrmPJzXW_K0XuS99lzdAYjr=w544-h544-l90-rj",
      title: "너에게 난, 나에게 넌",
      artist: "미도와 파라솔",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/ZY_a469TS5l5A6hlGs-Hp4ItdDhh6_OuwGEIJmo9ymnsg4zvXzSpL06IUSHA15MRBwTL490WkUVbgcGm=w544-h544-l90-rj",
      title: "언제라도 어디에서라도",
      artist: "정승환",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/dl0JBGrwWbswBIIN1Dj1FY4niIU5BE7FjIb--nH8eZxsimvhOcRlrxzGBq8xpMzBM2xwEYluIIeutBLN0A=w544-h544-l90-rj",
      title: "Rain",
      artist: "태연",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/zQJWwihFcwBPSjmAox6K3fFJ-qE82FDgGSVs2d7WGSG1DoTrjfaVV-aKJE8rNQTEWFG-wO4IGajokDw=w544-h544-l90-rj",
      title: "Je T’aime",
      artist: "조이 (JOY)",
    },
  ];
  const lovely = [
    {
      imageUrl:
        "https://lh3.googleusercontent.com/PoQHooQRFwVme3cPog2dX454cfKZrYJv_DPoD9eM-awuxYdrK51Eyz164Enjwkz6X3XxM2b8kGQEYcs9=w544-h544-l90-rj",
      title: "언제나 사랑해",
      artist: "케이시 (Kassy)",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/9QDp6gHp7Of_b0Yyo_ASkN4N4246NzYn_9mewcAy73AqcSaRnfAzkJiIlMV3P-UJCuTa3fYx9ZVMUo07=w544-h544-l90-rj",
      title: "Kiss",
      artist: "NMIXX",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/N1Vk6R5KTZ7jLp4foDiaHLLYzogrxCmqYt7Tz0N7FbSjlzUzVn10pK1hl8InfwTEJm-omBn9CeFAjwi2rw=w544-h544-l90-rj",
      title: "손을 잡는다거나, 같이 걷는다거나",
      artist: "적재",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/m0J572dI6UeLa4L0qRXW9IQSLFNyWiA3iYMRj9P66GUIac9kwAToS2AAeGDOM0NIE-3sSXCSj9TNtjPPpw=w544-h544-l90-rj",
      title: "Day 1",
      artist: "Red Velvet",
    },

    {
      imageUrl:
        "https://lh3.googleusercontent.com/derLD0BBbBA7r24YnT3m03JWmr6558qQheq3G7KvmsWUQ5xqCEALIU6uAiLXf-8z6iulvWxEdoxFDWqw=w544-h544-l90-rj",
      title: "Dream",
      artist: "수지, 백현",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/_msVo7mRrFCpwk70NUlj9p3WYACc-KodRFiAjChcv_Hw1snrIgkp5miKtRR-XjzOIoQoQIPpsNHGEt-9Sg=w544-h544-l90-rj",
      title: "이렇게 좋아해 본 적이 없어요",
      artist: "CHEEZE",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/-aB03JZvL8GfZ9gKAbMl6GvMKK43f6-ICu8EX2Pi7gB6s3L73SVzrAjeu3p0iEzmt6Lzi9jKo3NDa3P_=w544-h544-l90-rj",
      title: "D (Half Moon) (feat. 개코)",
      artist: "DEAN",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/PyefhtHQjwvrVtupDB0vtr5D0Ja5ktfl7OW8gzhymwVZ6p96GmbfBo85r6XNt67wQTELgo0wTX-vE1uP2Q=w544-h544-l90-rj",
      title: "누가 봐도 우린 (Be My Love)",
      artist: "EXO-CBX (첸백시)",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/nEGp3GBQ5BXKv6ZDjHHFp1rWZSFSaz26Jrf73hNskGsyBc58VTubUmVuhXWEMsTkKgge3Cgukq3Wx5o=w544-h544-l90-rj",
      title: "지금, 좋아해 (Love & Live)",
      artist: "이달의 소녀 1/3",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/4CeHSsPq4BmR8twa-XovYT4Txvhs5ONI8UbiiKS5ryRkiiZqML7Wk_LjHuuCnU_HvaBhdEoX53cb93c_ww=w544-h544-l90-rj",
      title: "예쁘다",
      artist: "세븐틴",
    },
  ];
  const memory = [
    {
      imageUrl:
        "https://lh3.googleusercontent.com/QaCAcL6FtHNYwAXa8TQW37UR-ihcepdoI98d9NjzBnNI2Lt67KV8fVsp6FeRxqyCnK3Rc_2eHUjlmZAZ=w544-h544-s-l90-rj",
      title: "칵테일 사랑",
      artist: "마로니에",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/A8e9Fge0S0Y0y6VqEOYDIJSt2PC2Ctu2a5i5uKkGBJPT-oidHVMhvRg8AXosOBDFsTMr5tjKDZ185fw=w480-h480-l90-rj",
      title: "기억을 걷는 시간",
      artist: "넬 (NELL)",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/LmfNDWlowh6I-aCPEDCNEcQqjBLangw3lzqFzcJf_UqTZJdSkdcMqA4nq2K52YGpwX1pntkbG86tmm4n=w480-h480-l90-rj",
      title: "너에게 쓰는 편지 (feat. 린)",
      artist: "MC몽",
    },

    {
      imageUrl:
        "https://lh3.googleusercontent.com/N8U4W5yQG7e-mmdzskZ343UOXuohU376THqZyZisZakyd_PtBPmklFWCV-G5OhvHCBggDIYd0yoJHiFD=w544-h544-l90-rj",
      title: "비행기",
      artist: "거북이",
    },

    {
      imageUrl:
        "https://lh3.googleusercontent.com/Rf-BNrKwVW_VBdOiq6NbJwEasR4WRlsnFoLfq-MaLbSECamA0W7XaLiOBG5B76z1v_rOqM4YuG3FfjbU=w544-h544-l90-rj",
      title: "거짓말",
      artist: "BIGBANG",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/eiY7f_b9XOu0tMUBIKBU26gHPVCC6bz71qOmc5Uq58ANGqCdIzWog7ZEOxWbxPTYweO4lCWPVjL-8rmZ=w544-h544-s-l90-rj",
      title: "니가 있어야 할 곳",
      artist: "지오디 (god)",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/pgHiJxGGVyLBZiSdLtvRyEQ-pIY0UbVTdSp9e2GG0jBBn0s966QSCvuco8QOpClkh6cUh4g1E5ffO2U=w544-h544-s-l90-rj",
      title: "Perfect Man",
      artist: "신화",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/LaXs5DeWrgOO1HoawbodGilzvOFndpXV0BCgRNq9xhgoYsokcL6D1BTyprByF5p60GAyKLvbXjUZZck8=w544-h544-l90-rj",
      title: "사랑의 인사",
      artist: "씨야",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/sUQGQc7SFSlsiTqkHtNqqB0DmITJGc-gLNyXITVOa7LG0jXp6PZB_TvGeW6ROwUD2izQ9-4q3Kz0s1KZ=w544-h544-l90-rj",
      title: "사랑인걸",
      artist: "모세",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/C79NsC-uh42l7kAH9wnIa_v071Chqa1asgI4ckIEqeBrt_4ZexsjdrvrvSIIhPii2Pk4qWfNB0EFO48_BQ=w544-h544-s-l90-rj",
      title: "여름아!부탁해",
      artist: "인디고 (INDIGO)",
    },
  ];
  const hiphop = [
    {
      imageUrl:
        "https://lh3.googleusercontent.com/mCbzMERsAqu_Z0B2HkTKuAQ5-lnfpMBMJdq2XFZxGMCaF5371bpQTbZq_QL1xcWczVWyIVLw4E73Bbmf=w544-h544-l90-rj",
      title: "낮 밤 (feat. 박재범)",
      artist: "이영지",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/qZVXLaP2xgTxhXDtTmKqWO0PYh-KYGt_r7HWovCh6QpEK2wsiesnGRcjKNxYVkHaG8kUEf1ouGxK6fn7KQ=w544-h544-l90-rj",
      title: "Smoke",
      artist: "다이나믹듀오, 이영지",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/F0x0sjzJgXJEj6DUGBGIe2KDBYVbubC0ceQUX4Se9VrsPFDOENXYWK_vJ-Hqp3ENQ03g1_EL9hKQKpsF=w544-h544-l90-rj",
      title: "미쳐버리겠다",
      artist: "BE'O (비오)",
    },

    {
      imageUrl:
        "https://lh3.googleusercontent.com/A07dMxxHK8t9_gckI5xF3W7zKScQWEABme3nseilHmDRt5UvBDxVvvR32w-xuk0CM4paCsOMzPQgAfs=w544-h544-l90-rj",
      title: "NOT OK (feat. MINNIE)",
      artist: "로꼬",
    },

    {
      imageUrl:
        "https://lh3.googleusercontent.com/SyWYeuKqrrG2YGqBda4R0Fic1F5NFBdmlvG_nhLpFstkKaOqoUV_2zsiLa595NsWF4c_D-S4r_p4nloy=w544-h544-l90-rj",
      title: "ZOOM",
      artist: "제시 (Jessi)",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/2VsBLtYduh22RL-G1Wm2KIpKu47Bhv1953nwk5BpnpYbv0P2FVzUU4guGIBLWjvxiSUGGYvXDVJgnEeuuw=w544-h544-l90-rj",
      title: "낭만교향곡",
      artist: "BIG Naughty (서동현)",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/FMW1QNe6eHdpmOf0el2CbiKDN3OdG_qcz_lh4SK2lXvgjABuUwUuN0Kz4jhUstkLnI3ZzXjFo6Y-Ei6E=w544-h544-l90-rj",
      title: "Nerdy Love (feat. 백예린)",
      artist: "pH-1",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/To3dwz_wLTXkYcHWgc5DW2xld-j6MSvvg06F9JbFKKcAVEqdZZ-TUKFl2Gjd55u4ASkDvphZunLUOoEEYQ=w544-h544-l90-rj",
      title: "Ticket",
      artist: "MEENOI",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/txNIs2m_WE0Roc9u0kp3ROXsfifGdn1EGa3Yntxgy-U7PevcsQZjJJF_uebdtyYp0Q-XrYMt42qZZS4=w544-h544-l90-rj",
      title: "괴짜 (Freak)",
      artist: "ZICO",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/JZF4Y9aEX6m4FptTS_japPrAoM0IshfJISJwI57cuWLs3Ii4Whyo-LU7O9ExENJN4ee7E_RBvsGn_lI=w544-h544-l90-rj",
      title: "우리서로사랑하지는말자",
      artist: "기리보이",
    },
  ];

  return (
    <>
      <Heading fontFamily={"Pretendard"} padding={"30px 0 20px 0"}>
        무드에 따라 골라 듣는 추천음악
      </Heading>
      <VStack>
        <Grid
          templateColumns="repeat(2, 1fr)"
          display={{ base: "block", xl: "grid" }}
          gap={6}
          w={"100%"}
        >
          <GridItem w="100%" h="auto">
            <Heading
              fontSize={"20px"}
              fontFamily={"Pretendard"}
              padding={"0 0 20px 0"}
              display={"flex"}
              gap={"10px"}
            >
              힐링이 필요할 때 <FaLeaf />
            </Heading>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              {heeling.map((heeling, index) => (
                <GridItem key={index} style={gridStyle}>
                  <Link
                    to={`/music/${index + 10}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <img
                      src={heeling.imageUrl}
                      alt=""
                      width={50}
                      style={albumStyle}
                    />
                    <Text>
                      <strong>{heeling.title}</strong>
                      <p>{heeling.artist}</p>
                    </Text>
                  </Link>
                </GridItem>
              ))}
            </Grid>
          </GridItem>

          <GridItem w="100%" h="auto">
            <Heading
              fontSize={"20px"}
              fontFamily={"Pretendard"}
              padding={{ base: "40px 0 20px 0", xl: "0 0 20px 0" }}
              display={"flex"}
              gap={"10px"}
            >
              달달한 사랑노래 <FaHeart />
            </Heading>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              {lovely.map((lovely, index) => (
                <GridItem key={index} style={gridStyle}>
                  <Link
                    to={`/music/${index + 20}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <img
                      src={lovely.imageUrl}
                      alt=""
                      width={50}
                      style={albumStyle}
                    />
                    <Text>
                      <strong>{lovely.title}</strong>
                      <p>{lovely.artist}</p>
                    </Text>
                  </Link>
                </GridItem>
              ))}
            </Grid>
          </GridItem>

          <GridItem w="100%" h="auto">
            <Heading
              fontSize={"20px"}
              fontFamily={"Pretendard"}
              padding={{ base: "40px 0 20px 0", xl: "20px 0 20px 0" }}
              display={"flex"}
              gap={"10px"}
            >
              추억 속으로 떠나요 <FaClock />
            </Heading>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              {memory.map((memory, index) => (
                <GridItem key={index} style={gridStyle}>
                  <Link
                    to={`/music/${index + 30}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <img
                      src={memory.imageUrl}
                      alt=""
                      width={50}
                      style={albumStyle}
                    />
                    <Text>
                      <strong>{memory.title}</strong>
                      <p>{memory.artist}</p>
                    </Text>
                  </Link>
                </GridItem>
              ))}
            </Grid>
          </GridItem>

          <GridItem w="100%" h="auto">
            <Heading
              fontSize={"20px"}
              fontFamily={"Pretendard"}
              padding={{ base: "40px 0 20px 0", xl: "20px 0 20px 0" }}
              display={"flex"}
              gap={"10px"}
            >
              트렌디 국내 힙합 <FaMusic />
            </Heading>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              {hiphop.map((hiphop, index) => (
                <GridItem key={index} style={gridStyle}>
                  <Link
                    to={`/music/${index + 40}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <img
                      src={hiphop.imageUrl}
                      alt=""
                      width={50}
                      style={albumStyle}
                    />
                    <Text>
                      <strong>{hiphop.title}</strong>
                      <p>{hiphop.artist}</p>
                    </Text>
                  </Link>
                </GridItem>
              ))}
            </Grid>
          </GridItem>
        </Grid>
      </VStack>
    </>
  );
};

export default Mood;
