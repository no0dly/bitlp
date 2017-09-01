import React from 'react'
import styled from 'styled-components'

import Logo from '../../images/logo.svg'
import Login from './Login'

const Header = (props) => {
  return (
    <Wrap>
      <LogoWrap href="/">
        <img src={ Logo } />
      </LogoWrap>

      <Login />
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 46px;
`

const LogoWrap = styled.a`
  width: 188px;
  height: 30px;
  display: block;
  img {
    width: 100%;
    height: auto;
  }
`

export default Header
