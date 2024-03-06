import React from "react";
import { ColorType } from "@type/index";
import styled from "styled-components";

const typoObject = {
  title1: { size: 24, weight: 700 },
  title2: { size: 22, weight: 700 },
  title3: { size: 18, weight: 700 },
  body1: { size: 20, weight: 500 },
  body2: { size: 14, weight: 500 },
  body2_bold: { size: 14, weight: 700 },
  caption: { size: 16, weight: 500 },
  small: { size: 10, weight: 500 },
};

export enum TypoType {
  TITLE1 = "title1",
  TITLE2 = "title2",
  TITLE3 = "title3",
  BODY1 = "body1",
  BODY2 = "body2",
  BODY2_BOLD = "body2_bold",
  CAPTION = "caption",
  SMALL = "small",
}

interface TypographyProps {
  children: React.ReactNode;
  color?: ColorType;
  type?: TypoType;
}

export default function Typography({
  children,
  color = ColorType.TEXT_PRIMARY,
  type = TypoType.BODY2,
}: TypographyProps) {
  const { size, weight } = typoObject[type];
  return (
    <StyledSpan size={size} color={color} weight={weight}>
      {children}
    </StyledSpan>
  );
}

const StyledSpan = styled.span<{
  size: number;
  color: ColorType;
  weight: number;
}>`
  font-size: ${(p) => p.size}px;
  font-weight: ${(p) => p.weight};
  color: ${(p) => p.color};
`;
