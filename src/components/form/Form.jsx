import React from 'react'
import styled from 'styled-components'

import personIcon from '../../images/person.svg'
import envelopeIcon from '../../images/envelop.svg'
import lockIcon from '../../images/lock.svg'

const Form = (props) => {
  return (
    <Wrap>
      <FormWrap>
        <Container>
          <Title>
            <TitleText>
              Start Investing in Bitcoin
            </TitleText>
          </Title>
          <FieldsWrap>
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
          </FieldsWrap>
        </Container>
        <Submit type="submit" value="Get Started"/>
      </FormWrap>
    </Wrap>
  )
}

const Wrap = styled.div`

`

const FormWrap = styled.div`
  max-width: 530px;
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
`

const Container = styled.div`
  padding: 0 60px;
`

const Title = styled.div`
  margin-bottom: 50px;
`

const TitleText = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 1.75rem;
  color: #2C3746;

`

const FieldsWrap = styled.div`

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
  box-sizing: border-box;
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
    background-position: 20px 14px;
  }
  &.envelope {
    background-image: url(${envelopeIcon})
    background-position: 16px 16px;
  }
  &.lock {
    background-image: url(${lockIcon})
    background-position: 20px 14px;
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
`

const Submit = styled.input`
  background: #00B5FF;
  width: 100%;
  border: 1px solid #00B5FF;
  color: #fff;
  padding: 20px 0 21px;
  text-align: center;
  font-size: 1.5rem;
  transition: 0.3s;
  border-radius: 0 0 8px 8px;
  &:hover {
    color: #00B5FF;
    background: #fff;
  }
`

export default Form
