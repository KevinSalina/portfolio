import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const colors = {
  brand: {
    50: '#edf1fc',
    100: '#cfd5e3',
    200: '#afb9cd',
    300: '#909dba',
    400: '#7181a6',
    500: '#57678c',
    600: '#43506e',
    700: '#30394f',
    800: '#1c2230',
    900: '#070b15',
  },
  footer: {
    50: '#dbfff9',
    100: '#b2faed',
    200: '#87f5e2',
    300: '#5af1d6',
    400: '#32edca',
    500: '#1dd4b1',
    600: '#0ea58a',
    700: '#027662',
    800: '#00483b',
    900: '#001a14',
  },
  whiteHL: {
    50: '#f2f2f2',
    100: '#d9d9d9',
    200: '#bfbfbf',
    300: '#a6a6a6',
    400: '#8c8c8c',
    500: '#737373',
    600: '#595959',
    700: '#404040',
    800: '#262626',
    900: '#0d0d0d',
  }
}

const theme = extendTheme({ colors, config })

export default theme;