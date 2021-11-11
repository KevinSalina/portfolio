import Head from 'next/head'
import {
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Link,
  Box,
  Image
} from '@chakra-ui/react'

import Container from '../components/Container'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import HomePageProjects from '../components/HomePageProjects'

export default function Resume() {
  return (
    <Container>
      <Head>
        <title>Resume | Kevin Salina</title>
      </Head>
      <Heading size="2xl" mb={3}>Resume</Heading>
      <Button mb={3} as={Link} href='/kevinsalinaresume.pdf' width='full' isExternal>
        Download Resume
      </Button>
      <Box w='full'>
        <Image src='/images/resume.jpg' alt='Resume' />
      </Box>
    </Container>
  )
}
