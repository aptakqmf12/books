import { useContext } from "react";
import Typography, { TypoType } from "./common/typography";
import styled from "styled-components";
import type { TabType } from "@type/index";
import { TabContext } from "../App";
const TAB_DATA = [
  { label: "도서 검색", value: "search" },
  { label: "내가 찜한 책", value: "bookmark" },
];

export default function Tab() {
  const { tab, setTab } = useContext(TabContext);
  const handleTabChange = (value: TabType) => {
    setTab(value);
  };

  return (
    <StyledTabUl>
      {TAB_DATA.map((obj, i) => {
        const isCurrentTab = tab === obj.value;
        return (
          <StyledTabLi
            isCurrentTab={isCurrentTab}
            onClick={() => handleTabChange(obj.value as TabType)}
          >
            <Typography type={TypoType.BODY1} key={i}>
              {obj.label}
            </Typography>
          </StyledTabLi>
        );
      })}
    </StyledTabUl>
  );
}

const StyledTabUl = styled.ul`
  display: flex;
  gap: 56px;
`;

const StyledTabLi = styled.li<{ isCurrentTab: boolean }>`
  border-bottom: ${(p) => (p.isCurrentTab ? "1px red solid" : "none")};
  cursor: pointer;
`;
