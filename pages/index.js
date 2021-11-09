import Head from 'next/head'

import {
  Stack,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'

import DarkModeSwitch from '../components/DarkModeSwitch'
import Container from '../components/Container'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home - Kevin Salina</title>
      </Head>
      <Stack
        as='main'
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxW='3xl'
        px={2}
      >
        <Flex
          direction='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxW='100%'
        >
          <Heading mb={2}>Hi, I&apos;m Kevin Salina</Heading>
          <Text>I am a web and software developer. I love problem solving, and learning about new web technologies! I am skilled in JavaScript, Node, Express, MySQL, React, HTML, & CSS. I also love to golf, snowboard, and listen to great alternative rock music.</Text>
        </Flex>
      </Stack>
    </Container>
  )
}
