import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  margin: 2.5px;

  div + button {
    margin-left: 20px;
  }

  button + div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
  }

  div.icon-container {
    display: flex;

    button.delete {
      background: #c72828;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(240, 240, 245);
      padding: 10px;
      border-radius: 8px;
      border: none;
      transition: 0.1s;

      margin: 0;

      svg {
        color: #3d3d4d;
      }
    }
  }
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .price {
    font-style: normal;
    font-size: 20px;
    line-height: 34px;
    color: #39b100;

    b {
      font-weight: 600;
    }
  }
`;
