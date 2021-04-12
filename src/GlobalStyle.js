import { createGlobalStyle } from "styled-components";
import { darkPrimaryColor, darkSecondaryColor } from "./constants/constants";

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
    }



    ${"" /* Slick sliders button style */}


    .slick-prev, .slick-next{
        background: ${darkPrimaryColor};
        width:3rem;
        height: 3rem;
        border-radius: 50%;
        color: red;
        z-index: 1;


        &:hover{
            background: ${darkSecondaryColor};
        }

    }

    .slick-prev:before, .slick-next:before {
        font-size: 30px;
        line-height: 1;
      
    }

    
`;

export default GlobalStyle;
