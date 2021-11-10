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
import HomePageProjects from '../components/HomePageProjects'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home | Kevin Salina</title>
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
        <HomePageProjects />
      </Flex>
    </Container>
  )
}
