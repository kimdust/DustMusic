import { Flex, Text } from "@chakra-ui/react";
import magazineBaseImg01 from "../../../assets/images/magazine01_base.png";
import magazineSmImg01 from "../../../assets/images/magazine01_sm.png";
import magazineMdImg01 from "../../../assets/images/magazine01_md.png";
import magazineLgImg01 from "../../../assets/images/magazine01_lg.png";
import magazineXlImg01 from "../../../assets/images/magazine01_xl.png";
import magazineBaseImg02 from "../../../assets/images/magazine02_base.png";
import magazineSmImg02 from "../../../assets/images/magazine02_sm.png";
import magazineMdImg02 from "../../../assets/images/magazine02_md.png";
import magazineLgImg02 from "../../../assets/images/magazine02_lg.png";
import magazineXlImg02 from "../../../assets/images/magazine02_xl.png";
import magazineBaseImg03 from "../../../assets/images/magazine03_base.png";
import magazineSmImg03 from "../../../assets/images/magazine03_sm.png";
import magazineMdImg03 from "../../../assets/images/magazine03_md.png";
import magazineLgImg03 from "../../../assets/images/magazine03_lg.png";
import magazineXlImg03 from "../../../assets/images/magazine03_xl.png";
import magazineBaseImg04 from "../../../assets/images/magazine04_base.png";
import magazineSmImg04 from "../../../assets/images/magazine04_sm.png";
import magazineMdImg04 from "../../../assets/images/magazine04_md.png";
import magazineLgImg04 from "../../../assets/images/magazine04_lg.png";
import magazineXlImg04 from "../../../assets/images/magazine04_xl.png";
import magazineBaseImg05 from "../../../assets/images/magazine05_base.png";
import magazineSmImg05 from "../../../assets/images/magazine05_sm.png";
import magazineMdImg05 from "../../../assets/images/magazine05_md.png";
import magazineLgImg05 from "../../../assets/images/magazine05_lg.png";
import magazineXlImg05 from "../../../assets/images/magazine05_xl.png";

const Magazine = () => {
  return (
    <>
      <Flex
        boxShadow={"0 0 10px #dbdbdb"}
        borderRadius={"30px"}
        m={"25px 0 20px 0"}
        display={{ base: "block", lg: "flex" }}
      >
        <Flex
          w={{ base: "100%", lg: "10%" }}
          h={{ base: "100px", lg: "250px" }}
          align={"center"}
          justifyContent={"center"}
          flexDir={"column"}
        >
          <Text fontSize={"24px"} fontWeight={"700"}>
            26
          </Text>
          <Text>2024. 02</Text>
        </Flex>
        <Flex
          bgImage={{
            base: magazineBaseImg01,
            sm: magazineSmImg01,
            md: magazineMdImg01,
            lg: magazineLgImg01,
            xl: magazineXlImg01,
          }}
          w={{ base: "100%", lg: "90%" }}
          h={"250px"}
          borderRadius={{ base: "0 0 30px 30px", lg: " 0 30px 30px 0" }}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text>
            <Text color={"white"} fontSize={{ base: "18px", lg: "30px" }}>
              어디로 갈까?
            </Text>
            <Text
              color={"white"}
              fontWeight={"700"}
              fontSize={{ base: "25px", lg: "40px" }}
            >
              2024 국내 페스티벌!
            </Text>
          </Text>
        </Flex>
      </Flex>
      <Flex
        boxShadow={"0 0 10px #dbdbdb"}
        borderRadius={"30px"}
        mb={"20px"}
        display={{ base: "block", lg: "flex" }}
      >
        <Flex
          w={{ base: "100%", lg: "10%" }}
          h={{ base: "100px", lg: "250px" }}
          align={"center"}
          justifyContent={"center"}
          flexDir={"column"}
        >
          <Text fontSize={"24px"} fontWeight={"700"}>
            23
          </Text>
          <Text>2024. 02</Text>
        </Flex>
        <Flex
          bgImage={{
            base: magazineBaseImg02,
            sm: magazineSmImg02,
            md: magazineMdImg02,
            lg: magazineLgImg02,
            xl: magazineXlImg02,
          }}
          w={{ base: "100%", lg: "90%" }}
          h={"250px"}
          borderRadius={{ base: "0 0 30px 30px", lg: " 0 30px 30px 0" }}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text>
            <Text color={"white"} fontSize={{ base: "18px", lg: "30px" }}>
              영원히 눈부실 청춘의 기록
            </Text>
            <Text
              color={"white"}
              fontWeight={"700"}
              fontSize={{ base: "25px", lg: "40px" }}
              lineHeight={"1.2"}
            >
              트와이스 미니 13집
              <br />
              [With YOU-th]
            </Text>
          </Text>
        </Flex>
      </Flex>
      <Flex
        boxShadow={"0 0 10px #dbdbdb"}
        borderRadius={"30px"}
        mb={"20px"}
        display={{ base: "block", lg: "flex" }}
      >
        <Flex
          w={{ base: "100%", lg: "10%" }}
          h={{ base: "100px", lg: "250px" }}
          align={"center"}
          justifyContent={"center"}
          flexDir={"column"}
        >
          <Text fontSize={"24px"} fontWeight={"700"}>
            22
          </Text>
          <Text>2024. 02</Text>
        </Flex>
        <Flex
          bgImage={{
            base: magazineBaseImg03,
            sm: magazineSmImg03,
            md: magazineMdImg03,
            lg: magazineLgImg03,
            xl: magazineXlImg03,
          }}
          w={{ base: "100%", lg: "90%" }}
          h={"250px"}
          borderRadius={{ base: "0 0 30px 30px", lg: " 0 30px 30px 0" }}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text>
            <Text color={"white"} fontSize={{ base: "18px", lg: "30px" }}>
              한 눈에 보는
            </Text>
            <Text
              color={"white"}
              fontWeight={"700"}
              fontSize={{ base: "25px", lg: "40px" }}
              lineHeight={"1.2"}
            >
              2월 넷째주 빌보드 소식
            </Text>
          </Text>
        </Flex>
      </Flex>
      <Flex
        boxShadow={"0 0 10px #dbdbdb"}
        borderRadius={"30px"}
        mb={"20px"}
        display={{ base: "block", lg: "flex" }}
      >
        <Flex
          w={{ base: "100%", lg: "10%" }}
          h={{ base: "100px", lg: "250px" }}
          align={"center"}
          justifyContent={"center"}
          flexDir={"column"}
        >
          <Text fontSize={"24px"} fontWeight={"700"}>
            21
          </Text>
          <Text>2024. 02</Text>
        </Flex>
        <Flex
          bgImage={{
            base: magazineBaseImg04,
            sm: magazineSmImg04,
            md: magazineMdImg04,
            lg: magazineLgImg04,
            xl: magazineXlImg04,
          }}
          w={{ base: "100%", lg: "90%" }}
          h={"250px"}
          borderRadius={{ base: "0 0 30px 30px", lg: " 0 30px 30px 0" }}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text>
            <Text color={"white"} fontSize={{ base: "18px", lg: "30px" }}>
              에이스 (A.C.E)만의 러브 스토리
            </Text>
            <Text
              color={"white"}
              fontWeight={"700"}
              fontSize={{ base: "25px", lg: "40px" }}
              lineHeight={"1.2"}
            >
              에이스, 미니 6집
              <br />
              [My Girl : MY CHOICE]
            </Text>
          </Text>
        </Flex>
      </Flex>
      <Flex
        boxShadow={"0 0 10px #dbdbdb"}
        borderRadius={"30px"}
        mb={"20px"}
        display={{ base: "block", lg: "flex" }}
      >
        <Flex
          w={{ base: "100%", lg: "10%" }}
          h={{ base: "100px", lg: "250px" }}
          align={"center"}
          justifyContent={"center"}
          flexDir={"column"}
        >
          <Text fontSize={"24px"} fontWeight={"700"}>
            20
          </Text>
          <Text>2024. 02</Text>
        </Flex>
        <Flex
          bgImage={{
            base: magazineBaseImg05,
            sm: magazineSmImg05,
            md: magazineMdImg05,
            lg: magazineLgImg05,
            xl: magazineXlImg05,
          }}
          w={{ base: "100%", lg: "90%" }}
          h={"250px"}
          borderRadius={{ base: "0 0 30px 30px", lg: " 0 30px 30px 0" }}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text>
            <Text color={"white"} fontSize={{ base: "18px", lg: "30px" }}>
              바로 지금!
            </Text>
            <Text
              color={"white"}
              fontWeight={"700"}
              fontSize={{ base: "25px", lg: "40px" }}
              lineHeight={"1.2"}
            >
              가장 핫한 J-POP 트랙들
            </Text>
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Magazine;
