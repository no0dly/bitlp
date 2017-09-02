import React from 'react'
import styled from 'styled-components'

import signup from '../../images/icons/signup.svg'
import verify from '../../images/icons/verify.svg'
import fund from '../../images/icons/fund.svg'
import trading from '../../images/icons/trading.svg'

const How = (props) => {
  return (
    <Wrap>
      <Title>
        <TitleText>
          How can I buy Bitcoin?
        </TitleText>
      </Title>
      <SubTitle>
        <SubTitleText>
          In 4 easy steps, you can begin purchasing Bitcoin.
        </SubTitleText>
      </SubTitle>
      <Content>
        <ContentList>
          <ContentItem>
            <ContentImage className="signup">
              <span />
              <Counter>
                1.
              </Counter>
            </ContentImage>
            <ContentDescription>
              <ContentDescriptionTitle>
                Sign Up
              </ContentDescriptionTitle>
              <ContentDescriptionText>
                All we need is your email address and some very basic information to start your profile setup
              </ContentDescriptionText>
            </ContentDescription>
          </ContentItem>
          <ContentItem>
            <ContentImage className="verify">
              <span />
              <Counter>
                2.
              </Counter>
            </ContentImage>
            <ContentDescription>
              <ContentDescriptionTitle>
                Verify
              </ContentDescriptionTitle>
              <ContentDescriptionText>
                Your security is important to us. To verify your account, we'll need a few documents that help us get to know you better.
              </ContentDescriptionText>
            </ContentDescription>
          </ContentItem>
          <ContentItem>
            <ContentImage className="fund" >
              <span />
              <Counter>
                3.
              </Counter>
            </ContentImage>
            <ContentDescription>
              <ContentDescriptionTitle>
                Fund
              </ContentDescriptionTitle>
              <ContentDescriptionText>
                Adding money to your account is simple. You can choose from multiple options when transferring funds to your account.
              </ContentDescriptionText>
            </ContentDescription>
          </ContentItem>
          <ContentItem>
            <ContentImage className="trading">
              <span />
              <Counter>
                4.
              </Counter>
            </ContentImage>
            <ContentDescription>
              <ContentDescriptionTitle>
                Start trading
              </ContentDescriptionTitle>
              <ContentDescriptionText>
                You're ready to start trading on Canada's leading digital currency exchange. We are here to walk you through your first trade and get you started.
              </ContentDescriptionText>
            </ContentDescription>
          </ContentItem>
        </ContentList>
      </Content>
    </Wrap>
  )
}

const Wrap = styled.div`
  max-width: 1162px;
  margin: 0 auto;
  padding: 82px 20px 20px;
  @media (max-width: 900px) {
    padding-top: 40px;
  }
`

const Title = styled.div`
  text-align: center;
  margin-bottom: 25px;
  position: relative;
  z-index: 2;
`

const TitleText = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 2.375rem;
  color: #263445;
  @media (max-width: 500px) {
    font-size: 1.875rem;
  }
`

const SubTitle = styled.div`
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  z-index: 2;
  @media (max-width: 500px) {
    font-size: 40rem;
  }
`

const SubTitleText = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  color: #8392A7;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

const Content = styled.div`

`

const ContentList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const ContentItem = styled.li`
  width: 25%;
  text-align: center;
  padding: 0 10px;
  margin-bottom: 80px;
  &:nth-child(even) {
    padding-top: 220px;
  }

  @media (max-width: 900px) {
    width: 50%;
    margin-bottom: 50px;
    &:nth-child(even) {
      padding-top: 120px;
    }
  }

  @media (max-width: 650px) {
    width: 100%;
    text-align: center;
    &:nth-child(even) {
      padding-top: 0;
    }
  }
`

const ContentImage = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  position: relative;
  background: #FFFFFF;
  box-shadow: 6px 10px 20px rgba(189, 190, 205, 0.249406);
  border-radius: 50%;
  margin-bottom: 40px;
  span {
    display: block;
    width: 100%;
    height: 100%;
  }
  &.signup {
    background: rgba(99, 212, 250, 0.15);
    span {
      background: url(${signup}) no-repeat center;
    }
    div {
      color: #63D4FA;
    }
  }
  &.verify {
    background: rgba(246, 191, 78, 0.15);
    span {
      background: url(${verify}) no-repeat center;
    }
    div {
      color: #F6BF4E;
    }
  }
  &.fund {
    background: rgba(52, 208, 140, 0.15);
    span {
      background: url(${fund}) no-repeat center;
    }
    div {
      color: #34D08C;
    }
  }
  &.trading {
    background: rgba(117, 146, 251, 0.15);
    span {
      background: url(${trading}) no-repeat center;
    }
    div {
      color: #7592FB;
    }
  }
  @media (max-width: 500px) {
    width: 120px;
    height: 120px;
    margin-bottom: 25px;
  }
`

const Counter = styled.div`
  position: absolute;
  width: 38px;
  height: 38px;
  background: #FFFFFF;
  border-radius: 50%;
  box-shadow: 6px 10px 20px rgba(157, 159, 170, 0.249406);
  bottom: 10px;
  left: 10px;
  font-size: 1.0625rem;
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    width: 25px;
    height: 25px;
    font-size: 0.75rem;
  }
`

const ContentDescription = styled.div`

`

const ContentDescriptionTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1.375rem;
  color: #263445;
  margin-bottom: 30px;
  @media (max-width: 500px) {
    font-size: 1.125rem;
    margin-bottom: 15px;
  }

`

const ContentDescriptionText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1.0625rem;
  color: #8392A7;
  line-height: 2rem;
  @media (max-width: 500px) {
    font-size: 0,875rem;
  }
`

export default How
