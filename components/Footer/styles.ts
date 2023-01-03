import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--blue);
    height: 15rem;
    margin: 0rem -2rem;
    margin-bottom: -4rem;

    padding: 2rem;

    display: flex;
    justify-content: space-between;

    @media (max-width: 720px) {
        display: block;
        height: 32rem;
    }
`

export const About = styled.div`
    h6 {
        color: white;
        margin-top: 10rem;

        @media (max-width: 720px) {
            display: none;
        }
    }

    @media (max-width: 720px) {
        img {
            margin-bottom: 1rem;
        }
    }
`

export const Information = styled.div`
    color: white;

    h2 {
        margin-bottom: 1rem;

        @media (max-width: 720px) {
            font-size: 1rem;
        }
    }

    h6 {
        margin-bottom: 1rem;
        font-size: 1rem;

        @media (max-width: 720px) {
            font-size: 0.6rem;
        }
    }

    @media (max-width: 720px) {
        margin-top: 1rem;
    }
`

export const FollowUs = styled.div`
    color: white;

    h2 {
        margin-bottom: 1rem;

        @media (max-width: 720px) {
            font-size: 1rem;
        }
    }

    @media (max-width: 720px) {
        margin-top: 1rem;
    }
`

export const Social = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-bottom: 0.6rem;

    h6 {
        font-size: 1rem;

        @media (max-width: 720px) {
            font-size: 0.8rem;
        }
    }

    img {
        width: 1.5rem;
    }

    @media (max-width: 720px) {
        gap: 1rem;
    }
`

export const Rating = styled.div`
    h4 {
        color: white;
        margin-top: 1rem;
        font-size: 1.2rem;

        @media (max-width: 720px) {
            font-size: 0.8rem;
        }
    }

    img {
        margin-top: 1rem;

        @media (max-width: 720px) {
            width: 40%;
        }
    }
`