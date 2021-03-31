import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    html, body{
        font-family: 'Open Sans', sans-serif;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;