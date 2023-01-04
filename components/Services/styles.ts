import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  h4 {
    color: var(--gold);
    font-size: 1.2rem;

    @media (max-width: 720px) {
      
      margin-top: 1rem;
    }
  }
`;

export const CardsServices = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 5rem 5rem;

  @media (max-width: 720px) {
    display: block;
    padding: 1rem;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  width: 20rem;
  height: 24rem;

  img {
    width: 20rem;
  }

  h3 {
    color: var(--text);
    text-align: center;

    font-size: 1.4rem;
    width: 50%;

    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
  }

  @media (max-width: 720px) {
    margin-bottom: 2.5rem;
  }
`;
