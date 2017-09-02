import React from 'react'
import styled from 'styled-components'

const Login = (props) => {
  return (
    <ul>
      <li>
        <Button>Log in</Button>
      </li>
    </ul>
  )
}

const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  background: #1FB6FF;
  border: 1px solid #1FB6FF;
  border-radius: 5px;
  padding: 9px 27px 10px;
  color: #fff;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #1FB6FF;
  }

  transition: 0.3s;
  @media (max-width: 500px) {
    font-size: 0.75rem;
    padding: 8px 15px 8px;
  }
`

export default Login
