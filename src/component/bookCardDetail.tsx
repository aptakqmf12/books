import { BookInfo, ColorType } from "@type/index";
import Button from "./common/button";
import Typography, { TypoType } from "./common/typography";
import styled from "styled-components";
import ArrowIcon from "./icon/arrow";
import BookMarkImage from "./common/bookMarkImage";

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
  const { authors, price, sale_price, title, contents, url } = book;

  return (
    <StyledBookCardDetail>
      <div className="left flex_row">
        <BookMarkImage {...book} />

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

        <div className="right_bottom_info">
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

          <Button size="l" width={240} onClick={() => window.open(url)}>
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
  padding: 26px 16px 40px 16px;

  .left {
  }
  .right {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: space-between;

    &_bottom_info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;
