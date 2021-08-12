import styled from "styled-components";

const Button = styled.button`
  background-color: #f15a24;
  border-radius: 8px;
  border: solid 1px;
  font-size: 1.5em;
  padding: 10px 20px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin-top: 2rem;
  &:hover {
    box-shadow: #333 3px 3px;
  }
  &:active {
    filter: brightness(0.5);
  }
`;

export default Button;
