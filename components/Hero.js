import React from 'react'
import {
  Flex,
  Text,
  Heading,
  HStack,
  Stack,
  VStack,
  Image,
  Icon,
  Link,
  Button,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail
} from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const Hero = () => {
  const { colorMode } = useColorMode()

  const color = useColorModeValue('whiteHL.100', 'brand.600')
  const bg = useColorModeValue('whiteHL.50', 'brand.700')


  return (
    <Flex
      direction='column'
      align='center'
      width='full'
      height='88vh'
      pt='8vh'
    >
      <VStack justifyContent='center' align='center' width='full' mb={5}>
        <Image boxSize='175px' objectFit='cover' src='/images/Headshot.jpeg' alt='Kevin Salina Headshot' borderRadius='full' />
        <Text fontSize='3xl' fontWeight='hairline'>Hello! My Name is</Text>
        <Heading as='h1' size='4xl' mb={2}>Kevin Salina</Heading>
        <Text fontSize='xl' fontWeight='light'>I am a Full Stack Web Developer</Text>
      </VStack>
      <HStack mb={5} spacing={5}>
        <Link href='https://www.linkedin.com/in/kevinsalina25/' isExternal>
          <Icon as={AiFillLinkedin} boxSize='2rem' _hover={{ color }} />
        </Link>
        <Link href='https://github.com/KevinSalina' isExternal>
          <Icon as={AiFillGithub} boxSize='2rem' _hover={{ color }} />
        </Link>
        <Link href='mailto: kevin.salina25@gmail.com' isExternal>
          <Icon as={MdEmail} boxSize='2rem' _hover={{ color }} />
        </Link>
      </HStack>
      <Button as='a' bg={bg} _hover={{ bg: color }} href='https://www.linkedin.com/in/kevinsalina25/' target="_blank" rel="noopener noreferrer">
        Hire Me
      </Button>
    </Flex>
  )
}

export default Hero
