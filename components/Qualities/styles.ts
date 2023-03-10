import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--blue);
  height: 28rem;
  border-radius: 20px 20px 0px 0px;

  margin: 0rem -2rem;

  margin-top: -7rem;

  h1 {
    padding: 3rem;
    color: white;
    font-weight: 300;

    span {
      font-weight: 700;
    }
  }

  @media (max-width: 720px) {
    margin-top: 0rem;
    height: 58rem;
  }
`;

export const CardsQualities = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem 10rem;

  @media (max-width: 720px) {
    display: block;
    padding: 0rem 5rem;
  }
`;

export const Card = styled.div`
  display: block;
  align-items: center;
  text-align: center;

  width: 30%;

  h2 {
    color: white;
    font-weight: 300;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  h5 {
    color: white;
    opacity: 0.6;
    font-weight: 300;
    font-size: 1rem;
  }
  
  @media (max-width: 720px) {
    width: 100%;
    margin-bottom: 2.5rem;
  }
`;
