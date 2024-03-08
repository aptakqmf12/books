import styled from "styled-components";
import { useBookStore } from "@store/book";
import HeartIcon from "@component/icon/heart";
import { BookInfo } from "@type/index";

export default function BookMarkImage(book: BookInfo) {
  const { thumbnail, isbn } = book;
  const { markedBookList, addBookMark, removeBookMark } = useBookStore();

  const isMarked = markedBookList.some((book) => book.isbn === isbn);

  const handleToggleBookmark = () => {
    if (isMarked) {
      removeBookMark(isbn);
    } else {
      addBookMark(book);
    }
  };

  return (
    <StyledImageBox>
      <img src={thumbnail} />

      <button className="bookmark" onClick={handleToggleBookmark}>
        <HeartIcon type={isMarked ? "fill" : "outline"} />
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
