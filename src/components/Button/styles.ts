import styled from "styled-components";

export const Button = styled.button`
  font-weight: 600;
  border-radius: 8px;
  border: 0;
  background: #39b100;
  color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;

  height: 60px;

  .text {
    padding: 16px 24px;
    font-size: 1rem;
  }

  .icon {
    display: flex;
    align-items: center;
    height: 100%;
    display: flex;
    padding: 16px 16px;
    background: #41c900;
    border-radius: 0 8px 8px 0;
    margin: 0 auto;
  }
`;
