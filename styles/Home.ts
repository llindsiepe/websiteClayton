import styled from "styled-components";

export const Container = styled.div`
  margin: 4rem 2rem;
`;

export const Header = styled.div``;

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 35%;
  }
`;

export const TextBanner = styled.div`
  margin-top: 8rem;
  margin-left: 3rem;

  h1 {
    width: 55%;
    span {
      font-weight: 600;
    }
  }

  h5 {
    font-size: 1rem;
    margin-top: 1rem;
    color: rgba(35, 38, 56, 0.6);
  }
`;

export const ButtonWhatsapp = styled.button`
  margin-top: 2rem;

  background-color: var(--green);
  color: white;
  font-weight: 600;
  font-size: 1.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;

  width: 12rem;
  height: 2.5rem;

  border: none;

  img {
    width: 10%;
  }
`;

export const AboutUs = styled.div`
  margin: 8rem 0rem;
  text-align: center;

  justify-content: center;

  h1 {
    span {
      font-weight: 600;
    }
  }

  h5 {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;

    text-align: justify;
  }

  button {
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;

    background-color: var(--blue);
    color: white;
    font-weight: 300;
    font-size: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem;

    width: 15rem;
    height: 2.5rem;

    border: none;

    img {
      width: 15%;
    }
  }
`;

export const Services = styled.div`
  text-align: center;

  h4 {
    color: var(--gold);
    font-size: 1.2rem;
  }
`;

export const Budget = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 5rem 10rem;

  span {
    font-weight: 600;
  }
`;

export const Galery = styled.div`
  display: flex;
`;
