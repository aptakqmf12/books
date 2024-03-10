import React from "react";
import styled from "styled-components";
import Button from "./button";
import CloseIcon from "@component/icon/close";
interface PopupProps {
  children: React.ReactNode;
  left: number | string;
  top: number | string;
  handleClose: () => void;
  handleSubmit: () => void;
}

export default function Popup({
  children,
  left,
  top,
  handleClose,
  handleSubmit,
}: PopupProps) {
  return (
    <StyledPopupWrap left={left} top={top}>
      <div className="close">
        <button onClick={handleClose}>
          <CloseIcon />
        </button>
      </div>

      <div className="body">{children}</div>

      <div className="btn">
        <Button
          size="l"
          type="fill"
          fullWidth
          onClick={() => {
            handleSubmit();
            handleClose();
          }}
        >
          검색하기
        </Button>
      </div>
    </StyledPopupWrap>
  );
}
const StyledPopupWrap = styled.div<{
  left: number | string;
  top: number | string;
}>`
  position: absolute;
  left: ${(p) => p.left};
  top: ${(p) => p.top};
  width: 360px;
  height: 160px;
  background-color: #fff;
  box-shadow: 0px 4px 14px 6px #97979726;
  border-radius: 8px;
  padding: 12px;

  .close {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 8px;
  }
`;
