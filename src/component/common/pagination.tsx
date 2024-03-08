import ReactPaginate from "react-paginate";
import styled from "styled-components";
import ArrowIcon from "@component/icon/arrow";

interface PaginationProps {
  totalPageCount: number;
  setCurrentPage: (v: number) => void;
}

export default function Pagination({
  totalPageCount,
  setCurrentPage,
}: PaginationProps) {
  return (
    <StyledPaginationWrap>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<ArrowIcon direction="left" />}
        onPageChange={(selectedItem) => {
          setCurrentPage(selectedItem.selected + 1);
        }}
        pageRangeDisplayed={4}
        pageCount={totalPageCount / 10}
        previousLabel={<ArrowIcon direction="right" />}
        renderOnZeroPageCount={null}
      />
    </StyledPaginationWrap>
  );
}
const StyledPaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul[aria-label="Pagination"] {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    li {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      border: 1px #dadada solid;
      border-radius: 4px;
      cursor: pointer;
      > a {
        display: table-cell;
        text-align: center;
        width: 100%;
        height: inherit;

        font-size: 14px;
        font-weight: 500;
      }
      &.selected {
        background-color: #4880ee;
        color: #fff;
        border: none;
      }
      &.disabled {
      }
      &.previous {
      }
      &.next {
      }
    }
  }
`;
