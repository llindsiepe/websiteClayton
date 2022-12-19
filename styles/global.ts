import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #ffffff;
    --blue: #242638;
    --gold: #DAB988;
    --green: #15CF74;

    --text: #373737;
}

*{
    margin: 0;
    padding: 0;
}

body{
    background: var(--background);
}

html{
    @media (max-width: 1080px) {
        font-size: 93,75%;
    }

    @media (max-width: 720px) {
    font-size: 83,5%;
    }
}

button{
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

button, body, textarea, input {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: var(--text);
}

h6, h5, h4, h3, h2, h1{
    font-weight: 400;
}
`;
