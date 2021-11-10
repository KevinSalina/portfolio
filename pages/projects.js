import React from 'react';
import Head from 'next/head'
import {
  Text,
  Flex
} from '@chakra-ui/react'

import Container from '../components/Container';

function projects(props) {
  return (
    <Container>
      <Head>
        <title>Home - Kevin Salina</title>
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
        Projects
      </Flex>
    </Container>
  );
}

export default projects;