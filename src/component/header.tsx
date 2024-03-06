import Tab from "./tab";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>CERTICOS BOOKS</h1>

      <Tab />

      <>&nbsp;</>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
