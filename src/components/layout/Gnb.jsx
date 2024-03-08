import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { UnorderedList, ListItem, Link } from "@chakra-ui/react";
import { AiFillHome, AiFillCustomerService } from "react-icons/ai";

const Gnb = () => {
  const navArr = [
    { name: "HOME", path: "/", icon: <AiFillHome /> },
    { name: "둘러보기", path: "/around", icon: <AiFillCustomerService /> },
  ];

  const location = useLocation();

  return (
    <UnorderedList py={6} gap={"40px"} fontSize={"16px"} margin={0}>
      {navArr.map((item, index) => (
        <ListItem key={index}>
          <Link
            as={ReactRouterLink}
            to={item.path}
            position="relative"
            display="flex"
            alignItems="center"
            gap="17px"
            p="5px 0px 9px 28px"
            sx={{
              // 조건부 스타일 적용
              color: location.pathname === item.path ? "primary" : "inherit", // 색상 변경
              fontWeight: location.pathname === item.path ? "bold" : "inherit", // 글씨 굵기 변경
              "&::after": {
                content: '""',
                display: location.pathname === item.path ? "block" : "none", // 선택 표시기
                width: "4px",
                bg: "primay",
                position: "absolute",
                top: "4px",
                right: 0,
                bottom: "4px",
                borderRadius: "4px",
              },
              _hover: {
                bg: "#F0F0F0", // 마우스 호버 시의 배경색 변경
              },
            }}
          >
            {item.icon} {item.name}
          </Link>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default Gnb;
