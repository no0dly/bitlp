import React from 'react'
import styled from 'styled-components'

const Fund = (props) => {
  return (
    <Wrap>
      <Title>
        <TitleText>
          Fund Your Future Faster
        </TitleText>
      </Title>
      <SubTitle>
        <SubTitleText>
          If you had bought $1,000 worth of Bitcoin in 2010, you’d be worth $35 million.
        </SubTitleText>
      </SubTitle>
      <LinkWrap>
        <Link href="#">
          Get Started Today
        </Link>
      </LinkWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 80px 30px 30px;
  background: #32315E;
  text-align: center;
`

const Title = styled.div`
  margin-bottom: 22px;
`

const TitleText = styled.div`
  color: #fff;
  font-size: 2.375rem;
  font-family: Roboto;
  @media (max-width: 500px) {
    font-size: 1.875rem;
  }
`

const SubTitle = styled.div`
  margin-bottom: 40px;
  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`

const SubTitleText = styled.div`
  color: #E0E6ED;
  font-size: 1.375rem;
  font-family: Roboto;
  font-weight: 300;
  line-height: 1.5rem;
  @media (max-width: 500px) {
    font-size: 1.125rem;
  }
`

const LinkWrap = styled.div`
  margin-bottom: 30px;
  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
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
  @media (max-width: 700px) {
    font-size: 1rem;
    padding: 24px 120px;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 24px 60px;
  }
`

export default Fund
