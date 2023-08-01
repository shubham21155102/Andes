import { Html, Head, Main, NextScript } from 'next/document'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'
const theme = createTheme({
  typography: {
    fontFamily: 'Bona Nova, sans-serif',
  },
});

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Bona+Nova&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <title>  Andes  </title>
        <link rel='icon' href='/favicon.ico'/>
        <ThemeProvider theme={theme} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
