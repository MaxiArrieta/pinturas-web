import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        /* box-sizing: border-box; */
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    body {
        /* font-size: 18px; */
        font-size: 1.8rem;
        line-height: 1.5;
        font-family: "Bitter", serif;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    h1,
    h2{
        margin: 0;
        line-height: 1.5;
    }
    h1,
    h2 {
        font-family: "Source Sans Pro", sans-serif;
    }
    input,
    textarea{
        font-size: 15px;
        font-family: "Bitter", serif;
    }
    a{
        text-decoration: none;
        text-decoration-line: #fff;
        color: #fff;

    }
`
