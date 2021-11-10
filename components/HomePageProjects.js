import React from 'react'
import {
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Box,
  Icon,
  Divider,
  VStack,
  HStack,
  Link,
  Button,
  Image,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FiExternalLink } from 'react-icons/fi'
import NextLink from 'next/link'
import projects from '../data/projects'

const HomePageProjects = () => {

  const { colorMode } = useColorMode()

  const iconHoverColor = {
    light: 'gray.300',
    dark: 'gray.600'
  }

  const color = useColorModeValue('brand.300', 'brand.600')
  const bg = useColorModeValue('whiteHL.50', 'brand.600')

  const projectData = projects.slice(0, 3)

  return (
    <Box w='full'>
      <VStack align='flex-start' spacing={3}>
        <Heading as='h2' fontWeight="medium">Projects</Heading>
        <NextLink href='/projects' passHref>
          <Button variant='link' rightIcon={<HiArrowNarrowRight />}>See All</Button>
        </NextLink>
        <Divider />
      </VStack>
      <VStack mt={8} spacing='5rem'>
        {projectData.map((project, i) => (
          <Flex key={`project-${i}`}>
            <Box w='60%' mr={3}>
              <Image src={project.img} alt={`${project.name} Image`} borderRadius={10} />
              <Text mt={1} fontSize='xs' fontWeight='light'>{project.note}</Text>
            </Box>
            <VStack w='40%' alignItems='flex-end' spacing={3} pl={5}>
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
              <Text textAlign='justify' >{project.description}</Text>
              <Flex flexWrap='wrap' justifyContent='flex-end'>
                {project.tags.map(tag => (
                  <Text
                    key={tag}
                    fontSize='xs'
                    p={1}
                    lineHeight='1.2'
                    bg={bg}
                    ml={1}
                    mb={1}
                    borderRadius={5}
                    opacity='.8'
                  >
                    {tag}
                  </Text>
                ))}
              </Flex>
            </VStack>
          </Flex>
        ))}
      </VStack>

    </Box >
  )
}

export default HomePageProjects
