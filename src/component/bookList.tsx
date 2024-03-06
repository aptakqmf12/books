import { BookInfo } from "@type/index";
import BookCard from "./bookCard";
import styled from "styled-components";

interface BookListProps {
  list: BookInfo[];
}

export default function BookList({ list }: BookListProps) {
  return (
    <StyledBookUl>
      {list.map((book, i) => (
        <li key={i}>
          <BookCard {...book} />
        </li>
      ))}
    </StyledBookUl>
  );
}

const StyledBookUl = styled.ul`
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px #d2d6da solid;

    &:last-child {
      border-bottom: none;
    }
  }
`;
