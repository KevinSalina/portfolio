import { ChakraProvider, ColorModeProvider, useColorMode } from "@chakra-ui/react"
import { Global, css } from '@emotion/react'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
