import React from 'react'
import {
  SimpleGrid,
  GridItem,
  Box,
  Heading,
  Text,
  Image,
  Flex,
  VStack,
  HStack,
  Link,
  Icon,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
  Divider
} from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FiExternalLink } from 'react-icons/fi'



import projects from '../data/projects'

const ProjectsGrid = () => {

  const color = useColorModeValue('brand.300', 'brand.600')
  const bg = useColorModeValue('WhiteHL.50', 'brand.600')


  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing='6rem' w='full' pt='6vh'>
        <GridItem colSpan={1}>
          <Heading mb={3} as='h1' size="2xl">My Projects</Heading>
          <Text>Check out what I have created.</Text>
        </GridItem>
        {projects.map((project, i) => (
          <GridItem key={`project-${i}`} colSpan={1} rowSpan={2}>
            <VStack align='flex-start' w='full' direction='column' spacing={4} mb={4}>
              <LinkBox as='div' boxShadow='sm' transition='all .3s ease' _hover={{ boxShadow: 'lg', cursor: 'pointer', opacity: .8 }} >
                <LinkOverlay href={project.demo} isExternal h='full'>
                  <Image src={project.img} alt={`${project.title} image`} borderRadius={10} />
                </LinkOverlay>
              </LinkBox>
              <HStack w='full' justifyContent='space-between'>
                <Heading
                  fontWeight='medium'
                  size='sm'
                  as={Link}
                  href={project.demo}
                  isExternal
                >
                  {project.title}
                </Heading>
                <HStack spacing={3}>
                  <Link href={project.source} isExternal>
                    <Icon as={AiFillGithub} boxSize='1.5rem' _hover={{ color }} />
                  </Link>
                  <Link href={project.demo} isExternal>
                    <Icon as={FiExternalLink} boxSize='1.5rem' _hover={{ color }} />
                  </Link>
                </HStack>
              </HStack>
              <Flex flexWrap='wrap' justifyContent='flex-end'>
                {project.tags.map(tag => (
                  <Text
                    key={tag}
                    fontSize='xs'
                    p={1}
                    // lineHeight='1.2'
                    bg={bg}
                    mr={1}
                    mb={1}
                    borderRadius={5}
                    opacity='.8'
                  >
                    {tag}
                  </Text>
                ))}
              </Flex>
            </VStack>
            <Divider />
            <Box mt={4}>
              <Text>{project.description}</Text>
              <Text mt={3} fontSize='xs' fontWeight='light'>{project.note}</Text>
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  )
}

export default ProjectsGrid
