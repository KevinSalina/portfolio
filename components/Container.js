import React from "react"
import {
  useColorMode,
  Button,
  Flex,
  Box
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from "@emotion/styled"

import DarkModeSwitch from "./DarkModeSwitch"

const Container = ({ children }) => {

  const { colorMode } = useColorMode()

  const bgColor = {
    light: 'white',
    dark: '#171717'
  }

  const color = {
    light: 'black',
    dark: 'white'
  }

  const navHoverBg = {
    light: 'gray.600',
    dark: 'gray.300'
  }

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blue(20px);
    transition: height .5s, line-height .5s
  `

  return (
    <div>
      <StickyNav
        flexDir='row'
        justifyContent='space-between'
        alignItems='center'
        maxW='3xl'
        minWidth='356px'
        width='100%'
        as='nav'
        px={3}
        py={2}
        mt={4}
        mb={[0, 0, 4]}
        mx='auto'
      >
        <Box>
          <NextLink href="/" passHref>
            <Button as='a' variant='ghost' p={[1, 2, 4]} _hover={{ bgColor: navHoverBg[colorMode] }}>
              Home
            </Button>
          </NextLink>
          <NextLink href="/projects" passHref>
            <Button as='a' variant='ghost' p={[1, 2, 4]} _hover={{ bgColor: navHoverBg[colorMode] }}>
              Projects
            </Button>
          </NextLink>
        </Box>
        <DarkModeSwitch />
      </StickyNav>
      <Flex
        as='main'
        justifyContent='center'
        flexDirection='column'
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>

    </div>
  )
}

export default Container
