import { ReactNode, MouseEvent } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  children: ReactNode;
  type?: "fill" | "outlined" | "gray";
  size?: "s" | "l";
  width?: number;
  fullWidth?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  icon?: ReactNode;
}

export default function Button({
  children,
  type = "fill",
  size = "s",
  width,
  fullWidth,
  onClick,
  icon,
}: ButtonProps) {
  const attr = { type, size, width, fullWidth };
  return (
    <StyledButton {...attr} onClick={onClick}>
      <span>{children}</span>

      {icon && <span>{icon}</span>}
    </StyledButton>
  );
}

const StyledButton = styled.button<
  Omit<ButtonProps, "children" | "onClick" | "icon">
>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  gap: 4px;
  width: ${(p) => (p.fullWidth ? "100%" : p.width + "px")};

  ${(p) =>
    p.size === "s"
      ? css`
          height: 36px;
          padding: 10px;
          font-size: 14px;
        `
      : css`
          height: 48px;
          padding: 16px 28px;
          font-size: 16px;
        `}
  ${(p) =>
    p.type === "fill"
      ? css`
          background-color: #4880ee;
          color: #fff;
        `
      : p.type === "outlined"
      ? css`
          background-color: #fff;
          border: 1px #8d94a0 solid;
          color: #8d94a0;
        `
      : css`
          background-color: #f2f4f6;
          color: #6d7582;
        `};
`;
