import React from "react"
import {
  useColorMode,
  Button,
  Flex,
  Box,
  Text,
  HStack,
  Link,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail
} from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import NextLink from 'next/link'
import styled from "@emotion/styled"

import DarkModeSwitch from "./DarkModeSwitch"

const Footer = () => {
  const { colorMode } = useColorMode()

  const bg = useColorModeValue('whiteHL.50', 'brand.800')
  const color = useColorModeValue('black', 'white')
  const hoverColor = useColorModeValue('whiteHL.100', 'brand.600')

  return (
    <Flex
      flexDir='column'
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
      <HStack mb={5} spacing={5}>
        <Link href='https://www.linkedin.com/in/kevinsalina25/' isExternal>
          <Icon as={AiFillLinkedin} boxSize='1.5rem' _hover={{ color: hoverColor }} transition='all .2s ease' />
        </Link>
        <Link href='https://github.com/KevinSalina' isExternal>
          <Icon as={AiFillGithub} boxSize='1.5rem' _hover={{ color: hoverColor }} transition='all .2s ease' />
        </Link>
        <Link href='mailto: kevin.salina25@gmail.com' isExternal>
          <Icon as={MdEmail} boxSize='1.5rem' _hover={{ color: hoverColor }} transition='all .2s ease' />
        </Link>
      </HStack>
    </Flex>
  )
}

export default Footer
