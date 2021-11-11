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
      <Hero />
      <AboutMe />
      <HomePageProjects />
    </Container>
  )
}
