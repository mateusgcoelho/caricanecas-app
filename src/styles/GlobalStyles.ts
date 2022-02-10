import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
      --green: #a8c828;
      --green-blue: #006c86;
      --light-blue: #2293ba;
      --yellow: #f4d600;
      --purpple: #6c2575;
      --gray: #858585;
      --lighter: #afafaf;
      --light: #EEF1F3;
      --white: #ffffff;
      --dark: #212529;
    }

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    html,
    body {
      width: 100vw;
      height: 100vh;
      min-height: 100%;
      overflow-x: hidden;
      
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;

      font-family: "Raleway", Arial, Helvetica, sans-serif;
      
      color: var(--dark);
      background-color: var(--white);
    }

    button, input, textarea {
      outline: none;
      border: 0;
      font-family: "Raleway", Arial, Helvetica, sans-serif;
    }

    button {
      cursor: pointer;
      background: none;
    }

    a {
      display: block;
      color: var(--white);

      text-decoration: none;
    }
`;
