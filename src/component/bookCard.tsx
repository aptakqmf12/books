import { useState } from "react";
import { BookInfo, ColorType } from "@type/index";
import styled from "styled-components";
import Button from "./common/button";
import ArrowIcon from "./icon/arrow";
import Typography, { TypoType } from "./common/typography";
import BookCardDetail from "./bookCardDetail";

export default function BookCard(book: BookInfo) {
  const { thumbnail, authors, price, title } = book;

  const [openDetail, setOpenDetail] = useState(false);

  const handleToggleDetail = () => {
    setOpenDetail(!openDetail);
  };
  return (
    <StyledCardContainer>
      <StyledCardWrap>
        <div className="flex_row" style={{ gap: 48 }}>
          <div className="image_box">
            <img src={thumbnail} />
          </div>

          <p className="flex_row" style={{ gap: 16 }}>
            <Typography type={TypoType.TITLE3}>{title}</Typography>

            <Typography type={TypoType.BODY2} color={ColorType.TEXT_SECONDARY}>
              {authors[0]}
            </Typography>
          </p>
        </div>

        <div className="flex_row" style={{ gap: 56 }}>
          <Typography type={TypoType.TITLE3}>
            {price.toLocaleString()}원
          </Typography>

          <div className="flex_row" style={{ gap: 8 }}>
            <Button type="fill" size="l">
              구매하기
            </Button>

            <Button
              type="gray"
              size="l"
              onClick={handleToggleDetail}
              icon={<ArrowIcon direction="bottom" />}
            >
              상세보기
            </Button>
          </div>
        </div>
      </StyledCardWrap>

      {openDetail && (
        <BookCardDetail
          book={book}
          openDetail={openDetail}
          setOpenDetail={setOpenDetail}
        />
      )}
    </StyledCardContainer>
  );
}

const StyledCardContainer = styled.div``;

const StyledCardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100px;

  .image_box {
    width: 48px;
    height: 68px;
    object-fit: cover;
    img {
      width: 100%;
    }
  }
`;
