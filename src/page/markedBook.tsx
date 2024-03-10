import { useState } from "react";
import { useBookStore } from "@store/book";

import Content from "@component/layout/content";
import Typography, { TypoType } from "@component/common/typography";
import { ColorType } from "@type/index";
import BookCard from "@component/bookCard";
import Pagination from "@component/common/pagination";

export default function MarkedBook() {
  const { markedBookList } = useBookStore();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const start = (currentPage - 1) * 10;
  const end = start + 10;
  return (
    <Content>
      <div className="title">
        <Typography type={TypoType.TITLE2}>도서 검색</Typography>
      </div>

      <div>
        <p className="flex_row" style={{ gap: 12 }}>
          <Typography type={TypoType.CAPTION}>찜한 책</Typography>
          <Typography type={TypoType.CAPTION}>
            총 &nbsp;
            <Typography color={ColorType.PRIMARY}>
              {markedBookList.length.toLocaleString()}
            </Typography>
            건
          </Typography>
        </p>
      </div>

      <ul style={{ height: 1100 }}>
        {markedBookList.slice(start, end).map((book) => (
          <li key={book.isbn}>
            <BookCard {...book} />
          </li>
        ))}
      </ul>

      <Pagination
        totalPageCount={markedBookList.length}
        setCurrentPage={setCurrentPage}
      />
    </Content>
  );
}
