import styled from "styled-components";

export const FoodsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0;
  margin-top: -100px;

  display: grid;
  justify-items: center;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;

  padding: 0 50px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  padding-bottom: 60px;
`;
