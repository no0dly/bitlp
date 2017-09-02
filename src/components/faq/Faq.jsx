import React from 'react'
import styled from 'styled-components'

import faqBg from '../../images/faqBg.svg'

const Faq = (props) => {
  return (
    <Wrap>
      <Title>
        <TitleText>
          Frequently Asked Questions
        </TitleText>
      </Title>
      <Content>
        <ContentItem>
          <ContentTitle>
            <ContentTitleText>
              What is Bitcoin?
            </ContentTitleText>
          </ContentTitle>
          <ContentDescription>
            <ContentDescriptionText>
              Bitcoin (Coinsquare ticker: BTC) is a worldwide cryptocurrency and digital payment system. The system is peer-to-peer, and transactions take place between users directly, without an intermediary. These transactions are verified by network nodes and recorded in a public distributed ledger called a blockchain. Since the system works without a cnetral repository or single administrator, bitcoin is called the first decentralized digital currency. <a href="#">(via Wikipedia)</a>
            </ContentDescriptionText>
          </ContentDescription>
        </ContentItem>
        <ContentItem>
          <ContentTitle>
            <ContentTitleText>
              What is Canadian laws on Bitcoin (or other cryptocurrency)?
            </ContentTitleText>
          </ContentTitle>
          <ContentDescription>
            <ContentDescriptionText>
              "Yes, it is legal to buy and sell digital currency on open exchanges (ie Coinsquare), and buy goods nd services on the Internet and instores that accept digital currencies."<a href="https://www.canada.ca/en/financial-consumer-agency/services/payment/digital-currency.html">(via: https://www.canada.ca/en/financial-consumer-agency/services/payment/digital-currency.html)</a>
            </ContentDescriptionText>
          </ContentDescription>
        </ContentItem>
        <ContentItem>
          <ContentTitle>
            <ContentTitleText>
              What is Bitcoin Cash?
            </ContentTitleText>
          </ContentTitle>
          <ContentDescription>
            <ContentDescriptionText>
              "Bitcoin Cash (Coinsquare ticker: BCH) is peer-to-peer electronic cash for the Internet. It is fully decetralized, with no central bank and requires no trusted third parties to operate. Bitcoin Cash is the continuation of the Bitcoin project as peer-to-peer digital cash. It is a fork of the Bitcoin blockchain ledger, with upgraded consensus rules that allow it to grow and scale."<a href="https://www.bitcoincash.org/">(via https://www.bitcoincash.org/)</a>
            </ContentDescriptionText>
          </ContentDescription>
        </ContentItem>
      </Content>
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 230px 30px 50px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${faqBg});
    background-repeat: no-repeat;
    background-position: top center;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  @media (max-width: 900px) {
    padding-top: 70px;
  }
`

const Title = styled.div`
  text-align: center;
  margin-bottom: 55px;
  position: relative;
  z-index: 2;
  @media (max-width: 900px) {
    margin-bottom: 40px;
  }
`

const TitleText = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 2.375rem;
  color: #263445;
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`

const Content = styled.div`
  max-width: 1140px;
  box-shadow: 0px 0px 35px rgba(165, 165, 165, 0.20505);
  border-radius: 6px;
  margin: 0 auto;
  padding: 79px 91px 71px 88px;
  position: relative;
  z-index: 2;
  background: #fff;
  @media (max-width: 900px) {
    padding: 30px 40px 30px 44px;
  }
`

const ContentItem = styled.div`
  margin-bottom: 55px;
  @media (max-width: 900px) {
    margin-bottom: 35px;
  }
`

const ContentTitle = styled.div`
  margin-bottom: 40px;
  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`

const ContentTitleText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1.375rem;
  color: #263445;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

const ContentDescription = styled.div`
  margin-bottom: 20px;
  @media (max-width: 900px) {
    margin-bottom: 10px;
  }
`

const ContentDescriptionText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  color: #8392A7;
  font-weight: 300;
  line-height: 2rem;
  a {
    color: #14A4FF;
  }
  @media (max-width: 500px) {
    font-size: 0.875rem;
  }
`

export default Faq
