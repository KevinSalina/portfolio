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
      <ProjectsGrid />
    </Container>
  );
}

export default projects;