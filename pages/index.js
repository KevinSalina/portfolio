import Head from 'next/head'
import {
  Stack,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'

import Container from '../components/Container'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Kevin Salina</title>
      </Head>
      <Flex
        as='main'
        direction='column'
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxW='3xl'
        px={2}
      >
        <Hero />
        <AboutMe />
        <Projects />
      </Flex>
    </Container>
  )
}
