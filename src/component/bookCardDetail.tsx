import React from "react";
import { BookInfo, ColorType } from "@type/index";
import Button from "./common/button";
import Typography, { TypoType } from "./common/typography";
import styled from "styled-components";
import ArrowIcon from "./icon/arrow";

interface BookCardDetailProps {
  book: BookInfo;
  openDetail: boolean;
  setOpenDetail: (b: boolean) => void;
}

export default function BookCardDetail({
  book,
  openDetail,
  setOpenDetail,
}: BookCardDetailProps) {
  const { thumbnail, authors, price, sale_price, title, contents } = book;
  return (
    <StyledBookCardDetail>
      <div className="left flex_row">
        <div>
          <img src={thumbnail} />
        </div>

        <div>
          <div>
            <Typography type={TypoType.TITLE3}>{title}</Typography>
            <Typography type={TypoType.CAPTION} color={ColorType.TEXT_SUBTITLE}>
              {authors[0]}
            </Typography>
          </div>

          <Typography type={TypoType.BODY2_BOLD}>책소개</Typography>
          <p style={{ width: 360 }}>
            <Typography>{contents}</Typography>
          </p>
        </div>
      </div>

      <div className="right">
        <div>
          <Button
            type="gray"
            size="l"
            onClick={() => setOpenDetail(!openDetail)}
            icon={<ArrowIcon direction="up" />}
          >
            상세보기
          </Button>
        </div>

        <div>
          <div>
            <Typography color={ColorType.TEXT_SUBTITLE}>원가</Typography>
            <Typography>{price.toLocaleString()}원</Typography>
          </div>
          {sale_price && (
            <div>
              <Typography color={ColorType.TEXT_SUBTITLE}>할인가</Typography>
              <Typography type={TypoType.TITLE3}>
                {sale_price.toLocaleString()}원
              </Typography>
            </div>
          )}

          <Button size="l" width={240}>
            구매하기
          </Button>
        </div>
      </div>
    </StyledBookCardDetail>
  );
}

const StyledBookCardDetail = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  .left {
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
