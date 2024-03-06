import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    list-style: none;
  }

  body {
   color:#353C49;
   font-family: "Noto Sans KR";

   .flex_row{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap:4px;
   }

   .flex_column{
    display: flex;
    flex-direction: column;
    gap:4px;
   }

   .space_between{
    display: flex;
    justify-content: space-between;
    align-items: center;
   }
  }
`;
