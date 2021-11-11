import React from "react"
import {
  useColorMode,
  Flex,
  Box
} from '@chakra-ui/react'

import Navbar from "./Navbar"
import Footer from "./Footer"

const Container = ({ children }) => {

  return (
    <>
      <Navbar />
      <Box
        as='main'
        px={6}
      >
        <Flex
          justifyContent='center'
          flexDirection='column'

          mt={[4, 8, 8]}
          maxW='3xl'
          m='0 auto 4rem auto'
        >
          {children}
        </Flex>
      </Box>
      <Footer />
    </>
  )
}

export default Container
