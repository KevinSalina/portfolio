import React from "react"
import {
  useColorMode,
  Button,
  Flex,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from "@emotion/styled"

import DarkModeSwitch from "./DarkModeSwitch"

const Navbar = () => {

  const { colorMode } = useColorMode()

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter:blur(20px);
    transition: height .5s, line-height .5s
  `

  const bg = useColorModeValue('whiteHL.50', 'brand.700')
  const color = useColorModeValue('brand.800', 'white')

  return (
    <StickyNav
      flexDir='row'
      alignItems='center'
      width='100%'
      as='nav'
      px={3}
      py={2}
      mx='auto'
      color={color}
    >
      <Flex
        width='full'
        maxW='3xl'
        mx='auto'
        justifyContent='space-between'
        py={2}
      >
        <Flex>
          <NextLink href="/" passHref>
            <Button as='a' variant='ghost' p={[1, 2, 4]} _hover={{ bg }} >
              Home
            </Button>
          </NextLink>
          <NextLink href="/projects" passHref>
            <Button as='a' variant='ghost' p={[1, 2, 4]} _hover={{ bg }}>
              Projects
            </Button>
          </NextLink>
        </Flex>
        <DarkModeSwitch />
      </Flex>
    </StickyNav>
  )
}

export default Navbar
