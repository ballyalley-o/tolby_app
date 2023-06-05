/* eslint-disable no-unused-vars */
import tolby from '../../assets/icons/tolby.svg'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const TolbyLogo = () => {
  const LogoContainerBase = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  }))

  const LogoBase = styled('img')(({ theme }) => ({
    width: '400px',
    height: '400px',
    position: 'absolute',
    right: '40px',
    top: '190px',
    alignContent: 'right',
    zIndex: 1,
    animation: 'ease-in-out 1s',
    animationName: '$fadeIn',
    pointerEvents: 'none',
  }))

  return (
    <LogoContainerBase>
      <LogoBase src={tolby} />
    </LogoContainerBase>
  )
}

export default TolbyLogo
