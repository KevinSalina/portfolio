import React from "react"
import {
  useColorMode,
  Button,
  Flex,
  Box,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from "@emotion/styled"

import DarkModeSwitch from "./DarkModeSwitch"

const Footer = () => {
  const { colorMode } = useColorMode()

  const bg = useColorModeValue('whiteHL.50', 'brand.800')
  const color = useColorModeValue('black', 'white')

  return (
    <Flex
      flexDir='row'
      alignItems='center'
      width='100%'
      color={color}
      bg={bg}
      as='footer'
      px={3}
      py={10}
      mx='auto'
    >
      <Flex
        width='full'
        maxW='3xl'
        align='center'
        justifyContent='center'
        direction='column'
        mx='auto'
        py={2}
      >
        <Text fontWeight='thin' size="sm" >Created by Kevin Salina</Text>
        <Text fontSize="sm" fontWeight='hairline'>Built with Next JS & Chakra </Text>
      </Flex>
    </Flex>
  )
}

export default Footer
