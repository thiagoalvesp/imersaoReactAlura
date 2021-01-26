import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../pages/db.json';
import Helmet from 'react-helmet'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`
const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <title>Alura Quiz</title>
        <meta property="og:image" content={db.bg} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" /> 
        <meta property="og:image:height" content="600" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
