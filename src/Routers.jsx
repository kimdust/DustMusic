import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import MusicPlayer from "./views/musicplayer/MusicPlayer";
import Layout from "./components/layout/Layout";
import Chart from "./views/chart/Chart";

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

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route
            path="/music/:index"
            element={<MusicPlayer slides={slides} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
