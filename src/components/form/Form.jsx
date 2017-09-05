import React from 'react'
import styled from 'styled-components'

import personIcon from '../../images/icons/person.svg'
import envelopeIcon from '../../images/icons/envelop.svg'
import lockIcon from '../../images/icons/lock.svg'

const Form = (props) => {
  return (
    <Wrap>
      <Pusher>
        <FormWrap>
          <Container>
            <Title>
              <TitleText>
                Start Investing in Bitcoin
              </TitleText>
            </Title>
            <div>
              <Input className="person" type="text" name="username" placeholder="Select a Username" />
              <Input className="envelope" type="email" name="email" placeholder="Enter your email address" />
              <Input className="lock" type="password" name="password" placeholder="Password" />
              <Input className="lock" type="password" name="confpassword" placeholder="Confirm Password" />
              <CheckBox>
                <CheckBoxInput type="checkbox" name="agree" />
                <CheckBoxText>
                  I have read and accepted the terms and conditions of use
                </CheckBoxText>
              </CheckBox>
            </div>
          </Container>
          <Submit type="submit">
            Get Started
          </Submit>
        </FormWrap>
      </Pusher>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
`

const Pusher = styled.div`
  display: flex;
  justify-content: flex-end;
`

const FormWrap = styled.div`
  max-width: 460px;
  width: 100%;
  background: #fff;
  border-radius: 8px;
  padding-top: 55px;
  overflow: hidden;
  box-shadow: 0px 0px 42px rgba(143, 143, 143, 0.300357);
  position: relative;
  top: 183px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 960px) {
    top: 0px;
    margin: 0 auto 40px;
  }
`

const Container = styled.div`
  padding: 0 60px;
  @media (max-width: 500px) {
    padding: 0 15px;
  }
`

const Title = styled.div`
  margin-bottom: 50px;
  text-align: center;
`

const TitleText = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 1.75rem;
  color: #2C3746;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

const Input = styled.input`
  margin-bottom: 40px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #DBE0E6;
  color: #9CA4AA;
  padding: 0 20px 0 56px;
  height: 54px;
  line-height: 45px;
  &::-webkit-input-placeholder {
    color: #9CA4AA;
  }
  &::-moz-placeholder {
    color: #9CA4AA;
  }
  &:-ms-input-placeholder {
    color: #9CA4AA;
  }
  &:-moz-placeholder {
    color: #9CA4AA;
  }

  background-repeat: no-repeat;

  &.person {
    background-image: url(${personIcon})
    background-position: 10px 14px;
  }
  &.envelope {
    background-image: url(${envelopeIcon})
    background-position: 6px 16px;
  }
  &.lock {
    background-image: url(${lockIcon})
    background-position: 10px 14px;
  }

  @media (max-width: 500px) {
    padding: 0 10px 0 36px;
    font-size: 0.75rem;
  }
`

const CheckBox = styled.div`
  display: flex;
  margin-bottom: 40px;
`

const CheckBoxInput = styled.input`
  margin-right: 20px;
  transform: scale(1.5);
  position: relative;
  top: 2px;
`

const CheckBoxText = styled.div`
  color: #B5BDC8;
  font-size: 1rem;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`

const Submit = styled.button`
  background: #00B5FF;
  width: 100%;
  border: 1px solid #00B5FF;
  color: #fff;
  padding: 20px 0 21px;
  text-align: center;
  font-size: 1.5rem;
  transition: 0.3s;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
  &:hover {
    color: #00B5FF;
    background: #fff;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

export default Form
