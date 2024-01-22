import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 5px 16px;
  font-size: 16px;
  border-wldth: 1ox;
  border-radius: 8px;
  cursor: pointer;
  //position: absolute;
  //bottom: 1244px;
  //right: 20px;
`;

function Button(props) {
  const { title, onClick } = props;

  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;
