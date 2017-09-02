import React from 'react'
import styled from 'styled-components'

import twitterIcon from '../../images/twitter.svg'
import facebookIcon from '../../images/facebook.svg'
import googleIcon from '../../images/google.svg'
import linkedinIcon from '../../images/linkedin.svg'

const Footer = (props) => {
  return (
    <Wrap>
      <Column>
        <Title>
          <TitleText>
            ABOUT COINSQUARE
          </TitleText>
        </Title>
        <Text>
          Coinsquare is the easiest platform to
          buy, sell and trade bitcoin, ethereum,
          gold and more. Made in Canada.
        </Text>
      </Column>
      <Column>
        <Title>
          <TitleText>
            PRODUCT
          </TitleText>
        </Title>
        <List>
          <li>
            <Link href="#">
              Funding Options
            </Link>
          </li>
          <li>
            <Link href="#">
              Trading Fees
            </Link>
          </li>
          <li>
            <Link href="#">
              FAQs
            </Link>
          </li>
        </List>
      </Column>
      <Column>
        <Title>
          <TitleText>
            COMPANY
          </TitleText>
        </Title>
        <List>
          <li>
            <Link href="#">
              Terms & Privacy
            </Link>
          </li>
          <li>
            <Link href="#">
              About
            </Link>
          </li>
          <li>
            <Link href="#">
              Contact
            </Link>
          </li>
          <li>
            <Link href="#">
              Careers
            </Link>
          </li>
        </List>
      </Column>
      <Column>
        <Title>
          <TitleText>
            Social
          </TitleText>
        </Title>
        <ShareList>
          <ShareItem>
            <ShareLink className="twitter" href="#">
              <span>
                twitter
              </span>
            </ShareLink>
          </ShareItem>
          <ShareItem>
            <ShareLink className="facebook" href="#">
              <span>
                facebook
              </span>
            </ShareLink>
          </ShareItem>
          <ShareItem>
            <ShareLink className="google" href="#">
              <span>
                Google+
              </span>
            </ShareLink>
          </ShareItem>
          <ShareItem>
            <ShareLink className="linkedin" href="#">
              <span>
                linkedin
              </span>
            </ShareLink>
          </ShareItem>
        </ShareList>
      </Column>
    </Wrap>
  )
}

const Wrap = styled.div`
  max-width: 1138px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  padding: 82px 20px 20px;
  @media (max-width: 500px) {
    padding-top: 40px;
  }
`

const Column = styled.div`
  width: 23.3%;
  padding-right: 30px;
  &:first-child {
    width: 35%;
  }
  &:last-child {
    padding-right: 0px;
  }
  @media (max-width: 768px) {
    &:last-child {
      width: 50px;
    }
  }
  @media (max-width: 600px) {
    width: 33.3%;
    &:first-child {
      display: none;
    }
  }
  @media (max-width: 500px) {
    font-size: 0.750rem;
  }
`

const Title = styled.div`
  margin-bottom: 45px;
  @media (max-width: 500px) {
    margin-bottom: 25px;
  }
`

const TitleText = styled.h3`
  color: #2B2E35;
  font-family: Roboto;
  font-size: 0.875rem;
  text-transform: uppercase;
  @media (max-width: 500px) {
    font-size: 0.750rem;
  }
`

const Text = styled.div`
  max-width: 264px;
  color: #8392A7;
  font-family: Roboto;
  line-height: 2rem;
  @media (max-width: 500px) {
    font-size: 0.75rem;
    line-height: 1.5rem;
  }
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
`

const Link = styled.a`
  color: #8392A7;
  font-family: Roboto;
  text-decoration: none;
  margin-bottom: 30px;
  display: block;
  transition: 0.3s;
  &:hover {
    color: #2B2E35;
  }
  @media (max-width: 500px) {
    font-size: 0.75rem;
    margin-bottom: 20px;
  }
`

const ShareList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const ShareItem = styled.li`
  width: 25%;
  @media (max-width: 1000px) {
    width: 40%;
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

const ShareLink = styled.a`
  display: block;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(151, 151, 151, 0.264634);
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.3s;
  span {
    display: none;
  }

  &.twitter {
    background-image: url(${twitterIcon})
  }
  &.facebook {
    background-image: url(${facebookIcon})
  }
  &.google {
    background-image: url(${googleIcon})
  }
  &.linkedin {
    background-image: url(${linkedinIcon})
  }

  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 500px) {
    width: 38px;
    height: 38px;
  }
`

export default Footer
