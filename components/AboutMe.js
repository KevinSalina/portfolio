import React from 'react'
import {
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Box,
  Icon
} from '@chakra-ui/react'
import {
  FaReact,
  FaNodeJs,
  FaGitAlt
} from 'react-icons/fa'
import {
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiChakraui,
  SiMocha
} from 'react-icons/si'

import Animation from './Animation'


const AboutMe = () => {

  return (
    <Box w='full' mb='100px'>
      <Animation direction="fromBottom" delay={.4}>
        <Heading mb={5} as='h2' fontWeight="medium">About Me</Heading>
      </Animation>
      <Flex direction='column' alignItems='flex-start' w='full' mx='auto'>
        <Animation direction="fromBottom">
          <Box mb={10}>
            <Text>Hello there!  My name is Kevin Salina and I am an experienced Operations and Logistics Coordinator that decided to make a career change during the midst of the COVID-19 pandemic. I have spent the past year and a half evolving my passion for web development and recently graduated from a Web Development Bootcamp, where I learned how to build full-stack web apps from industry practitioners. I now hope to use these new skills along with my prior professional experience to launch a career building web applications and services! You can find some of my projects below. When I am not honing in my software engineering skills, I love to golf, snowboard, and listen to great alternative rock music.
            </Text>
          </Box>
        </Animation>
        <Flex
          direction='column'
          w='full'
        >
          <Animation direction="fromBottom" delay={.4}>
            <Heading mb={5} as='h3' fontWeight='thin'>Skills</Heading>
          </Animation>
          <Animation direction="fromBottom" delay={.4}>
            <SimpleGrid minChildWidth='2rem' spacing='2rem' w='full' alignItems='center' px={1}>
              <Icon as={SiJavascript} boxSize='2rem' />
              <Icon as={FaNodeJs} boxSize='2rem' />
              <Icon as={FaReact} boxSize='2rem' />
              <Icon as={SiMysql} boxSize='2rem' />
              <Icon as={SiNextdotjs} boxSize='2rem' />
              <Icon as={SiMongodb} boxSize='2rem' />
              <Icon as={FaGitAlt} boxSize='2rem' />
              <Icon as={SiExpress} boxSize='2rem' />
              <Icon as={SiChakraui} boxSize='2rem' />
              <Icon as={SiMocha} boxSize='2rem' />
              <Icon as={SiHtml5} boxSize='2rem' />
              <Icon as={SiCss3} boxSize='2rem' />
            </SimpleGrid>
          </Animation>
        </Flex>
      </Flex>
    </Box >
  )
}

export default AboutMe
