import React from "react"
import {
  useColorMode,
  Button,
  Flex,
  Box,
  useColorModeValue,
  IconButton
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from "@emotion/styled"

import DarkModeSwitch from "./DarkModeSwitch"
import Logo from "./Logo"
import Animation from "./Animation"

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
    <Flex
      position='sticky'
      zIndex='10'
      top='0'
      backdropFilter='blur(20px)'
      flexDir='row'
      alignItems='center'
      width='100%'
      as='nav'
      px={6}
      py={2}
      mx='auto'
      color={color}
    >
      {/* <Animation direction='fromTop' w='100%'> */}
      <Flex
        width='full'
        maxW='3xl'
        mx='auto'
        justifyContent='space-between'
        py={2}
      >
        <NextLink href="/" passHref>
          <IconButton bg='none' _active={{ bg: 'none' }} _hover={{ bg: 'none' }} icon={<Logo w='3rem' h='3rem' color={color} />} />
        </NextLink>
        <Flex>
          <NextLink href="/projects" passHref>
            <Button as='a' variant='ghost' mr={[2, 3]} p={[1, 2, 4]} _hover={{ bg }}>
              Projects
            </Button>
          </NextLink>
          <DarkModeSwitch />
        </Flex>
      </Flex>
      {/* </Animation> */}
    </Flex>
  )
}

export default Navbar
