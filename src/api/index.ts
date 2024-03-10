import axios from "axios";
import { BookResponse } from "@type/index";
const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: "KakaoAK " + import.meta.env.VITE_REST_API_KEY,
  },
});

interface BookRequest {
  query: string;
  page?: number; // 1~50 *1
  size?: number; // 1~50 *10
  target?: "title" | "isbn" | "publisher" | "person";
  sort?: "accuracy" | "recency";
}

export const getBookData = async (params: BookRequest) => {
  return await client.get<BookResponse>("/book", { params });
};
