/* eslint-disable no-unused-vars */
import * as React from 'react'
import { Outlet } from 'react-router-dom'

import { alpha, styled, createTheme, ThemeProvider } from '@mui/material/styles'
import { Typography, Container, Box } from '@mui/material'

import Footer from './components/Footer'
import TolbyNavBar from './components/NavBar/TolbyNavBar'

const App = () => {
  const isDrawerOpen = false
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1c252c',
      },
      secondary: {
        main: '#1c252c',
      },
      pink: {
        main: '#FF1288',
      },
    },
    minHeight: '80vh',
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <TolbyNavBar />
        <Container>
          <Typography variant="h1">&nbsp;</Typography>
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
