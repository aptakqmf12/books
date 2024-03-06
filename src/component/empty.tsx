import { ColorType } from "@type/index";
import Typography from "./common/typography";
import styled from "styled-components";

export default function Empty() {
  return (
    <div>
      <figure>
        <StyledImg src="/book_img.png" alt="검색된 결과가 없습니다" />
      </figure>

      <Typography color={ColorType.TEXT_SECONDARY}>
        검색된 결과가 없습니다.
      </Typography>
    </div>
  );
}

const StyledImg = styled.img`
  width: 80px;
`;
