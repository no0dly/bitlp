import React from 'react'
import styled from 'styled-components'

import shieldIcon from '../../images/shield.svg'
import diagramIcon from '../../images/diagram.png'
import spareIcon from '../../images/spare.svg'
import dollarIcon from '../../images/dollar.svg'
import moneyIcon from '../../images/money.svg'
import clockIcon from '../../images/clock.svg'
import mask from '../../images/maskDiscover.png'

const Discover = (props) => {
  return (
    <Wrap>
      <Title>
        <TitleText>
          Discover a new world of currency.
        </TitleText>
        <TitleText>
          Here’s what makes Coinsquare different.
        </TitleText>
      </Title>
      <Content>
        <ContentList>
          <ContentItem>
            <ContentImage>
              <Icon className="shield" />
            </ContentImage>
            <ContentDescription>
              <ContentDescriptionTitle>
                Security
              </ContentDescriptionTitle>
              <ContentDescriptionText>
                Trade Bitcoin and more on the most secure coin management system.
              </ContentDescriptionText>
            </ContentDescription>
          </ContentItem>
          <ContentItem>
            <ContentImage>
              <Icon className="diagram" />
            </ContentImage>
            <ContentDescription>
              <ContentDescriptionTitle>
                Lowest Fees
              </ContentDescriptionTitle>
              <ContentDescriptionText>
                We have lower trading and transactional fees than any platform. Trading commissions range from 0.1% to 0.4%.
              </ContentDescriptionText>
            </ContentDescription>
          </ContentItem>
          <ContentItem>
            <ContentImage>
              <Icon className="spare" />
            </ContentImage>
            <ContentDescription>
              <ContentDescriptionTitle>
                A+ Support
              </ContentDescriptionTitle>
              <ContentDescriptionText>
                Our customer service puts you first. We’re here to help every step of the way.
              </ContentDescriptionText>
            </ContentDescription>
          </ContentItem>
          <ContentItem>
            <ContentImage>
              <Icon className="dollar" />
            </ContentImage>
            <ContentDescription>
              <ContentDescriptionTitle className="long">
                Multiple Currencies
              </ContentDescriptionTitle>
              <ContentDescriptionText>
                Trade the world’s most popular cryptocurrencies like Bitcoin, Ethereum, and precious metals like gold and silver.
              </ContentDescriptionText>
            </ContentDescription>
          </ContentItem>
          <ContentItem>
            <ContentImage>
              <Icon className="money" />
            </ContentImage>
            <ContentDescription>
              <ContentDescriptionTitle>
                Quick Trade
              </ContentDescriptionTitle>
              <ContentDescriptionText>
                Coinsquare is the only platform to offer QuickTrade - the easiest possible way to make a trade.
              </ContentDescriptionText>
            </ContentDescription>
          </ContentItem>
          <ContentItem>
            <ContentImage>
              <Icon className="clock" />
            </ContentImage>
            <ContentDescription>
              <ContentDescriptionTitle>
                Super Simple
              </ContentDescriptionTitle>
              <ContentDescriptionText>
                We’ve made it ease for both first times and seasoned traders to get trading crypto in minutes.
              </ContentDescriptionText>
            </ContentDescription>
          </ContentItem>
        </ContentList>
        <LinkWrap>
          <Link href="#">
            Get Started Today
          </Link>
        </LinkWrap>
      </Content>
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 190px 30px 78px;
  position: relative;
  background: #32315E;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${mask});
    background-repeat: no-repeat;
    background-position: top right;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const Title = styled.div`
  text-align: center;
  margin-bottom: 55px;
  position: relative;
  z-index: 2;
  margin-bottom: 100px;
`

const TitleText = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 2.375rem;
  color: #fff;
  margin-bottom: 15px;
`

const Content = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 2.375rem;
  color: #fff;
`

const ContentList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const ContentItem = styled.li`
  width: 33.3%;
  text-align: center;
  padding: 0 55px;
  margin-bottom: 80px;
`

const ContentImage = styled.div`
  width: 110px;
  height: 110px;
  margin: 0 auto;
  background: #FFFFFF;
  box-shadow: 6px 10px 20px rgba(189, 190, 205, 0.249406);
  border-radius: 50%;
  margin-bottom: 40px;
`
const Icon = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  &.shield {
    background-image: url(${shieldIcon});
  }
  &.diagram {
    background-image: url(${diagramIcon});
    background-size: 50px;
  }
  &.spare {
    background-image: url(${spareIcon});
  }
  &.dollar {
    background-image: url(${dollarIcon});
  }
  &.money {
    background-image: url(${moneyIcon});
  }
  &.clock {
    background-image: url(${clockIcon});
  }

`

const ContentDescription = styled.div`
  max-width: 315px;
  margin: 0 auto 105px;
`

const ContentDescriptionTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1.375rem;
  color: #8392A7;
  margin-bottom: 20px;
  &.long {
    margin-bottom: 5px;
  }
`

const ContentDescriptionText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  color: #8392A7;
  line-height: 2rem;
`

const LinkWrap = styled.div`
  margin-bottom: 30px;
  text-align: center;
`

const Link = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 24px 144px;
  background: #00B5FF;
  color: #fff;
  box-shadow: 6px 10px 20px rgba(0, 181, 255, 0.234885);
  border-radius: 7px;
  transition: 0.3s;
  font-size: 1.5rem;
  font-family: Roboto;
  &:hover {
    color: #00B5FF;
    background: #fff;
  }
`

export default Discover
