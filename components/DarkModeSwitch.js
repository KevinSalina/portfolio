import { useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const iconColor = {
    light: 'brand.800',
    dark: 'white'
  }

  const bg = useColorModeValue('whiteHL.50', 'brand.700')
  const color = useColorModeValue('whiteHL.100', 'brand.600')

  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      color={iconColor[colorMode]}
      bg={bg}
      _hover={{ bg: color }}
    />
  )

}

export default DarkModeSwitch