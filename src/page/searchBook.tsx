import { useState, useRef, FormEvent } from "react";
import { AxiosError, AxiosResponse } from "axios";
import styled from "styled-components";
import { getBookData } from "@api/index";
import { ColorType, BookResponse } from "@type/index";
import { useQuery } from "@tanstack/react-query";

import Content from "@component/layout/content";
import SearchInput from "@component/common/searchInput";
import Button from "@component/common/button";
import Typography, { TypoType } from "@component/common/typography";
import Empty from "@component/empty";
import BookList from "@component/bookList";
import Pagination from "@component/common/pagination";
import Popup from "@component/common/popup";
import type { TargetType } from "@type/index";

export default function SearchBookPage() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchInputInPopupRef = useRef<HTMLInputElement>(null);
  const targetSelectInPopupRef = useRef<HTMLSelectElement>(null);

  const [targetOption, setTargetOption] = useState<TargetType>("title");
  const [searchText, setSearchText] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openPopup, setOpenPopup] = useState(false);

  const tagetOptionList = [
    { text: "제목", value: "title" },
    { text: "isbn", value: "isbn" },
    { text: "출판사", value: "publisher" },
    { text: "저자명", value: "person" },
  ];

  const { data, isLoading } = useQuery<AxiosResponse<BookResponse>, AxiosError>(
    {
      queryKey: ["books", searchText, currentPage, targetOption],
      queryFn: () =>
        getBookData({
          query: searchText || " ",
          page: currentPage,
          size: 10,
          target: targetOption,
          sort: "accuracy",
        }),
      placeholderData: (previousData) => previousData,
    }
  );

  const handleSearchBook = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearchText(searchInputRef.current!.value);
  };

  const handleSearchBookInPopup = () => {
    setSearchText(searchInputInPopupRef.current!.value);
    setTargetOption(targetSelectInPopupRef.current!.value as TargetType);
    searchInputRef.current!.value = "";
  };

  if (isLoading) return <div>...loading</div>;

  const totalPageCount = data?.data.meta.total_count || 0;

  return (
    <Content>
      <div className="title">
        <Typography type={TypoType.TITLE2}>도서 검색</Typography>
      </div>

      <div className="flex_row">
        <div style={{ width: 400 }}>
          <form onSubmit={handleSearchBook}>
            <SearchInput
              targetRef={searchInputRef}
              placeholder="검색어를 입력하세요"
              fullWidth
            />
          </form>
        </div>

        <div style={{ position: "relative" }}>
          <Button type="outlined" onClick={() => setOpenPopup(true)}>
            상세검색
          </Button>

          {openPopup && (
            <Popup
              handleClose={() => setOpenPopup(false)}
              handleSubmit={handleSearchBookInPopup}
              left={"calc(-50% - 90px)"}
              top={"calc(100% + 20px)"}
            >
              <StyledPopupBody>
                <select ref={targetSelectInPopupRef}>
                  {tagetOptionList.map((obj) => (
                    <option value={obj.value}>{obj.text}</option>
                  ))}
                </select>

                <input
                  type="text"
                  ref={searchInputInPopupRef}
                  placeholder="검색어 입력"
                />
              </StyledPopupBody>
            </Popup>
          )}
        </div>
      </div>

      <div>
        <p className="flex_row" style={{ gap: 12 }}>
          <Typography type={TypoType.CAPTION}>도서 검색결과</Typography>
          <Typography type={TypoType.CAPTION}>
            총 &nbsp;
            <Typography color={ColorType.PRIMARY}>
              {totalPageCount.toLocaleString()}
            </Typography>
            건
          </Typography>
        </p>
      </div>

      {totalPageCount > 0 ? (
        <>
          <BookList list={data?.data.documents || []} />

          <Pagination
            totalPageCount={totalPageCount}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <Empty />
      )}
    </Content>
  );
}

const StyledPopupBody = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 4px;
  margin-bottom: 16px;
  select {
    border: none;
    border-bottom: 1px #d2d6da solid;
  }
  input {
    width: 100%;
    height: 36px;
    padding: 0 4px;
    border: none;
    border-bottom: 1px #4880ee solid;
    &:focus {
      outline: none;
    }
  }
`;
