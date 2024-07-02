import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "orange")};
  color: #fff;
`;
