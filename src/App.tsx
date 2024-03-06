import { useState, FormEvent } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { getBookData } from "@api/index";
import { ColorType, BookResponse } from "@type/index";
import { useQuery } from "@tanstack/react-query";
import SearchInput from "@component/common/searchInput";
import Button from "@component/common/button";
import Typography, { TypoType } from "@component/common/typography";
import Empty from "@component/empty";
import BookList from "@component/bookList";
import Header from "@component/header";

function App() {
  const [searchText, setSearchText] = useState<string>("");

  // query sort page(1~50) size(1~50)
  const { data, isLoading, refetch } = useQuery<
    AxiosResponse<BookResponse>,
    AxiosError
  >({
    queryKey: ["books"],
    queryFn: () => getBookData({ query: searchText || " " }),
    enabled: false,
  });

  const handleRequestBooks = () => {};

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    refetch();
  };

  if (isLoading) return <div>...loading</div>;

  const total = data?.data.documents.length || 0;

  return (
    <main>
      <Header />

      <section>
        <div>
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
              총<Typography color={ColorType.PRIMARY}>{total}</Typography>건
            </Typography>
          </p>
        </div>

        {total > 0 ? <BookList list={data?.data.documents || []} /> : <Empty />}
      </section>
    </main>
  );
}

export default App;
