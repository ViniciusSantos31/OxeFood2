import styled from "styled-components";

export const Container = styled.div`
  background: #c72828;
  width: 100%;
  padding: 30px;
  height: 250px;

  #logo {
    width: 100%;
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    font-weight: bold;

    display: flex;
    align-items: center;

    button {
      margin-left: 20px;
    }
  }

  header {
    width: 100%;
    /* margin: 0 auto; */
    padding: 0 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      div {
        button {
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
        }
      }
    }
  }
`;
