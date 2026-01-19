import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background-color: #0f172a;
    color: #e2e8f0;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
  }

  a {
    color: #2563eb;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #1d4ed8;
    }
  }

  button {
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    border: none;
    transition: all 0.3s ease;
  }

  /* Brand color variables */
  --primary-blue: #2563eb;
  --primary-red: #dc2626;
  --primary-white: #ffffff;
  --dark-bg: #0f172a;
  --light-text: #e2e8f0;
  --muted-text: #cbd5e1;
`

export default GlobalStyles













// import { createGlobalStyle } from "styled-components"

// const GlobalStyles = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   html, body, #root {
//     width: 100%;
//     height: 100%;
//   }

//   body {
//     font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
//     background-color: #0f172a;
//     color: #e2e8f0;
//     line-height: 1.6;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }

//   h1, h2, h3, h4, h5, h6 {
//     font-weight: 700;
//     line-height: 1.2;
//   }

//   a {
//     color: #3b82f6;
//     text-decoration: none;
//     transition: color 0.3s ease;

//     &:hover {
//       color: #60a5fa;
//     }
//   }

//   button {
//     cursor: pointer;
//     font-family: 'Inter', sans-serif;
//     border: none;
//     transition: all 0.3s ease;
//   }
// `

// export default GlobalStyles
