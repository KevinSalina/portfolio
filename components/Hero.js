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
import Animation from './Animation'

const Hero = () => {
  const { colorMode } = useColorMode()

  const color = useColorModeValue('whiteHL.100', 'brand.600')
  const bg = useColorModeValue('whiteHL.50', 'brand.700')

  const animateDelayBase = 0
  const textOneDelay = animateDelayBase + 0.2
  const nameDelay = textOneDelay + 0.2
  const textTwoDelay = nameDelay + 0.2
  const iconDelay = textTwoDelay + 0.2
  const buttonDelay = iconDelay + 0.2


  return (
    <Flex
      direction='column'
      align='center'
      width='full'
      height='88vh'
      pt='8vh'
    >
      <VStack justifyContent='center' align='center' width='full' mb={5}>
        <Animation direction='fromBottom'>
          <Image boxSize='175px' objectFit='cover' src='/images/Headshot.jpeg' alt='Kevin Salina Headshot' borderRadius='full' />
        </Animation>
        <Animation direction='fromBottom' delay={textOneDelay}>
          <Text fontSize='3xl' fontWeight='hairline'>Hello! My Name is</Text>
        </Animation>
        <Animation direction='fromBottom' delay={nameDelay}>
          <Heading as='h1' size="3xl" mb={2}>Kevin Salina</Heading>
        </Animation>
        <Animation direction='fromBottom' delay={textTwoDelay}>
          <Text fontSize='xl' fontWeight='light'>I am a Full Stack Web Developer</Text>
        </Animation>
      </VStack>
      <HStack mb={5} spacing={5}>
        <Animation direction='fromLeft' delay={iconDelay}>
          <Link href='https://www.linkedin.com/in/kevinsalina25/' isExternal>
            <Icon as={AiFillLinkedin} boxSize='2rem' _hover={{ color }} />
          </Link>
        </Animation>
        <Animation direction='fromBottom' delay={iconDelay}>
          <Link href='https://github.com/KevinSalina' isExternal>
            <Icon as={AiFillGithub} boxSize='2rem' _hover={{ color }} />
          </Link>
        </Animation>
        <Animation direction='fromRight' delay={iconDelay}>
          <Link href='mailto: kevin.salina25@gmail.com' isExternal>
            <Icon as={MdEmail} boxSize='2rem' _hover={{ color }} />
          </Link>
        </Animation>
      </HStack>
      <Animation direction='fromBottom' delay={buttonDelay}>
        <Button as='a' bg={bg} _hover={{ bg: color }} href='https://www.linkedin.com/in/kevinsalina25/' target="_blank" rel="noopener noreferrer">
          Hire Me
        </Button>
      </Animation>
    </Flex>
  )
}

export default Hero
