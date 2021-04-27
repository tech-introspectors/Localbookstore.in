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
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scrol-behaviour: smooth;
        font-size: 62.5%;
    }

    @media screen and (max-width: 998px){
        font-size: 55%;
    }

    @media screen and (max-width: 768px){
        font-size: 45%;
    }

    @media screen and (max-width: 640px){
        font-size: 35%
    }
    
`;

export default GlobalStyle;
