import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    html{
        font-family: 'Open Sans', sans-serif;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
        font-size: 62.5%;
    }

    h1{
        font-size: 2.2rem;
        line-height: 3rem;

    }

    h2{
        font-size: 2rem;
        line-height: 2.5rem;

    }

    h3{
        font-size:   1.9rem;
        line-height: 2.2rem;  
    }
    
    p{
        font-size: 1.7rem;
    }

    
`;

export default GlobalStyle;
