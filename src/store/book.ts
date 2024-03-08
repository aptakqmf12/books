import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { BookInfo } from "@type/index";

interface BookStore {
  markedBookList: BookInfo[];
  addBookMark: (book: BookInfo) => void;
  removeBookMark: (isbn: string) => void;
}

export const useBookStore = create<BookStore>()(
  devtools(
    persist(
      (set) => ({
        markedBookList: [],
        addBookMark: (book) => {
          set(
            (state) => {
              return {
                ...state,
                markedBookList: [...state.markedBookList, book],
              };
            },
            undefined,
            "[book] addBook"
          );
        },
        removeBookMark: (isbn) => {
          set(
            (state) => {
              return {
                ...state,
                markedBookList: [
                  ...state.markedBookList.filter((book) => book.isbn !== isbn),
                ],
              };
            },
            undefined,
            "[book] addBook"
          );
        },
      }),
      {
        name: "persist bookStore",
      }
    )
  )
);
