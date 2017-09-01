import React from 'react'
import styled from 'styled-components'

const Login = (props) => {
  return (
    <List>
      <li>
        <Button>Log in</Button>
      </li>
    </List>
  )
}

const List = styled.ul`

`

const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  background: #1FB6FF;
  border: 1px solid #1FB6FF;
  border-radius: 5px;
  padding: 9px 27px 10px;
  color: #fff;
  transition: 0.3s;
  &:hover {
    background: #fff;
    color: #1FB6FF;
  }
`

export default Login
