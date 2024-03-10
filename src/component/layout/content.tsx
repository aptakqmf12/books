import styled from "styled-components";

interface ContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return <StyledContentWrapper>{children}</StyledContentWrapper>;
}
const StyledContentWrapper = styled.section`
  margin: 0 auto;
  width: 960px;
  height: 100%;

  .title {
    margin-bottom: 16px;
  }
`;
