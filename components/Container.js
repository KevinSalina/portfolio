import React from "react"
import {
  useColorMode,
  Flex,
} from '@chakra-ui/react'

import Navbar from "./Navbar"
import Footer from "./Footer"

const Container = ({ children }) => {

  const { colorMode } = useColorMode()

  const bgColor = {
    light: 'white',
    dark: 'brand.800'
  }

  const color = {
    light: 'brand.800',
    dark: 'white'
  }

  return (
    <>
      <Navbar />
      <Flex
        as='main'
        justifyContent='center'
        flexDirection='column'
        // bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
      <Footer />
    </>
  )
}

export default Container
