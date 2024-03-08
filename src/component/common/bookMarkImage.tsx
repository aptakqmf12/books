import styled from "styled-components";
import HeartIcon from "@component/icon/heart";

interface BookMarkImageProps {
  thumbnail: string;
  isBookMark: boolean;
  setIsBookMark?: (b: boolean) => void;
}

export default function BookMarkImage({
  thumbnail,
  isBookMark,
  setIsBookMark,
}: BookMarkImageProps) {
  const handleToggleBookmark = () => {
    if (!setIsBookMark) return;

    setIsBookMark(!isBookMark);
  };

  return (
    <StyledImageBox>
      <img src={thumbnail} />

      <button className="bookmark" onClick={handleToggleBookmark}>
        <HeartIcon type={isBookMark ? "fill" : "outline"} />
      </button>
    </StyledImageBox>
  );
}

const StyledImageBox = styled.div`
  position: relative;
  width: 48px;
  height: 68px;
  object-fit: cover;
  img {
    width: 100%;
  }

  .bookmark {
    position: absolute;
    right: 0;
    top: 0;
    width: 12px;
    height: 12px;
  }
`;
