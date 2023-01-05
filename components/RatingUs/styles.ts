import styled from "styled-components";

export const Container = styled.div`
    background: #DAB988;
    border-radius: 20px 0px 0px 0px;
    color: white;

    height: 12rem;

    margin: 0rem -2rem;
    margin-top: -1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    a {
        text-decoration: none;
    }

    @media (max-width: 720px) {
        padding: 2rem;
        display: block;
        height: 13rem;

        text-align: center;

        
    }
`

export const Text = styled.div`
@media (max-width: 720px) {
    margin-bottom: 1rem;
}
`

export const ButtonRating = styled.button`
    margin-left: auto;
    margin-right: auto;

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
  
`