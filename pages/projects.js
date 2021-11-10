import React from 'react';
import Head from 'next/head'
import {
  Text,
  Flex
} from '@chakra-ui/react'

import Container from '../components/Container';
import ProjectsGrid from '../components/ProjectsGrid';

function projects(props) {
  return (
    <Container>
      <Head>
        <title>Projects | Kevin Salina</title>
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
        <ProjectsGrid />
      </Flex>
    </Container>
  );
}

export default projects;