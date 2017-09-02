import React from 'react'
import styled from 'styled-components'

import bitcoin from '../../images/bitcoin.png'
import aboutMask from '../../images/aboutMask.png'

const About = (props) => {
  return (
    <Wrap>
      <Image />
      <Content>
        <Title>
          <TitleText>
            What is Bitcoin?
          </TitleText>
        </Title>
        <Desrc>
          <DesrcText>
            Bitcoin (Coinsquare ticker: BTC) is a worldwide cryptocurrency and digital payment system. The system is peer-to-peer, and transactions take place between users directly, without an intermediary. These transactions are verified and recorded in a public distributed ledger called a blockchain. Since the system works without a central repository or single administrator, bitcoin is called the first decentralized digital currency. (via Wikipedia)
          </DesrcText>
        </Desrc>
        <SubTitle>
          <SubTitleText>
            Learn More About Bitcoin:
          </SubTitleText>
        </SubTitle>
        <LernMore>
          <LernMoreInput type="email" name="email" placeholder="Enter Email Address" />
          <LernMoreButton>
            Learn More
          </LernMoreButton>
        </LernMore>
      </Content>
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 50px 30px 215px;
  margin-bottom: 25px;
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
`

const Image = styled.div`
  width: 50%;
  background: url(${bitcoin}) no-repeat -230px 0;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${aboutMask}) no-repeat top right;
  }
`

const Content = styled.div`
  padding-top: 50px;
  width: 50%;
`

const Title = styled.div`
  margin-bottom: 20px;
`

const TitleText = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 2.375rem;
  color: #263445;
  letter-spacing: 0.013px;
`

const Desrc = styled.div`
  margin-bottom: 10px;
`

const DesrcText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  color: #8392A7;
  line-height: 2rem;
  font-weight: 300;
`

const SubTitle = styled.div`
  margin-bottom: 20px;
`

const SubTitleText = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  color: #263445;

`

const LernMore = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 42px;
`

const LernMoreInput = styled.input`
  border: 1px solid #62D2FF;
  box-shadow: 0px 0px 12px rgba(226, 226, 226, 0.5);
  margin-right: -1px;
  width: calc(100% - 150px);
  border-radius: 8px 0 0 8px;
  text-align: center;
  padding: 0 20px;
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
`

const LernMoreButton = styled.button`
  width: 150px;
  padding: 12px 0;
  font-family: Roboto;
  font-size: 1.1875rem;
  border: 1px solid #62D2FF;
  box-shadow: 0px 0px 12px rgba(226, 226, 226, 0.5);
  color: #FFFFFF;
  background: #62D2FF;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0 8px 8px 0;
  &:hover {
    background: #FFFFFF;
    color: #62D2FF;
  }
`

export default About
