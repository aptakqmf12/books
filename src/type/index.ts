export enum ColorType {
  PRIMARY = "#4880EE",
  RED = "#E84118",
  GRAY = "#DADADA",
  LIGHTGRAY = "#F2F4F6",
  WHITE = "#fff",
  BLACK = "#000",
  TEXT_PRIMARY = "#353C49",
  TEXT_SECONDARY = "#6D7582",
  TEXT_SUBTITLE = "#8D94A0",
}

export interface BookInfo {
  title: string;
  contents: string;
  url: string;
  isbn: string;
  datetime: string;
  authors: string[];
  publisher: string;
  translators: string[];
  price: number;
  sale_price: number;
  thumbnail: string;
  status: string;
}

export interface BookResponse {
  // https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-book-response-body-document
  documents: BookInfo[];
  meta: {
    is_end: boolean; // 현재 페이지가 마지막 페이지인지 여부, 값이 false면 page를 증가시켜 다음 페이지를 요청할 수 있음
    pageable_count: number; //중복된 문서를 제외하고, 처음부터 요청 페이지까지의 노출 가능 문서 수
    total_count: number; // 검색된 문서 수
  };
}

export type TabType = "search" | "bookmark";
export type TargetType = "title" | "isbn" | "publisher" | "person";
