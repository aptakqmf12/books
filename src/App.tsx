import { useState, useEffect, FormEvent } from "react";
import styled from "styled-components";
import { AxiosError, AxiosResponse } from "axios";
import { getBookData } from "@api/index";
import { ColorType, BookResponse } from "@type/index";
import { useQuery } from "@tanstack/react-query";

import Header from "@component/header";
import SearchInput from "@component/common/searchInput";
import Button from "@component/common/button";
import Typography, { TypoType } from "@component/common/typography";
import Empty from "@component/empty";
import BookList from "@component/bookList";
import Pagination from "@component/common/pagination";

function App() {
  const [searchText, setSearchText] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(1);

  // query sort page(1~50) size(1~50)
  const { data, isLoading, refetch } = useQuery<
    AxiosResponse<BookResponse>,
    AxiosError
  >({
    queryKey: ["books", currentPage],
    queryFn: () =>
      getBookData({ query: searchText || " ", page: currentPage, size: 10 }),
    enabled: false,
    placeholderData: (previousData, previousQuery) => previousData,
  });

  const handleRequestBooks = () => {};

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    refetch();
  };

  useEffect(() => {
    refetch();
  }, [currentPage]);

  if (isLoading) return <div>...loading</div>;

  const totalPageCount = data?.data.meta.total_count || 0;

  return (
    <main>
      <Header />

      <StyledSection>
        <div className="title">
          <Typography type={TypoType.TITLE2}>도서 검색</Typography>
        </div>

        <div className="flex_row">
          <div style={{ width: 400 }}>
            <form onSubmit={handleSubmit}>
              <SearchInput
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="검색어를 입력하세요"
                fullWidth
              />
            </form>
          </div>

          <Button type="outlined" onClick={handleRequestBooks}>
            상세검색
          </Button>
        </div>

        <div>
          <p>
            <Typography type={TypoType.CAPTION}>도서 검색결과</Typography>
            <Typography type={TypoType.CAPTION}>
              총
              <Typography color={ColorType.PRIMARY}>
                {totalPageCount}
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
      </StyledSection>
    </main>
  );
}

const StyledSection = styled.section`
  margin: 0 auto;
  width: 1400px;
  height: 100%;

  .title {
    margin-bottom: 16px;
  }
`;

export default App;
