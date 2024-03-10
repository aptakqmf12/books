import { useState } from "react";
import { BookInfo, ColorType } from "@type/index";
import styled from "styled-components";
import Button from "./common/button";
import ArrowIcon from "./icon/arrow";

import Typography, { TypoType } from "./common/typography";
import BookMarkImage from "./common/bookMarkImage";
import BookCardDetail from "./bookCardDetail";

export default function BookCard(book: BookInfo) {
  const { authors, price, title, url } = book;

  const [openDetail, setOpenDetail] = useState(false);

  const handleToggleDetail = () => {
    setOpenDetail(!openDetail);
  };

  return (
    <>
      <StyledCardWrap>
        <div className="flex_row" style={{ gap: 48, maxWidth: 500 }}>
          <BookMarkImage {...book} />

          <p className="flex_row" style={{ gap: 16 }}>
            <Typography maxWidth={300} type={TypoType.TITLE3}>
              {title}
            </Typography>

            <Typography
              maxWidth={100}
              type={TypoType.BODY2}
              color={ColorType.TEXT_SECONDARY}
            >
              {authors.join(",")}
            </Typography>
          </p>
        </div>

        <div className="flex_row" style={{ gap: 56 }}>
          <Typography type={TypoType.TITLE3}>
            {price.toLocaleString()}원
          </Typography>

          <div className="flex_row" style={{ gap: 8 }}>
            <Button type="fill" size="l" onClick={() => window.open(url)}>
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
    </>
  );
}

const StyledCardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100px;
  padding: 0 16px;
`;
