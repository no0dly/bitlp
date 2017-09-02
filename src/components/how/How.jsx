import React from 'react'
import styled from 'styled-components'

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
        </ContentList>
      </Content>
    </Wrap>
  )
}

const Wrap = styled.div`
  max-width: 1162px;
  margin: 0 auto;
  padding: 82px 20px 20px;
`

const Title = styled.div`
  text-align: center;
  margin-bottom: 55px;
  position: relative;
  z-index: 2;
`

const TitleText = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 2.375rem;
  color: #263445;
`

const SubTitle = styled.div`
  text-align: center;
  margin-bottom: 55px;
  position: relative;
  z-index: 2;
`

const SubTitleText = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-size: 2.375rem;
  color: #263445;
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
  width: 25%;
  text-align: center;
  padding: 0 55px;
  margin-bottom: 80px;
`

const ContentImage = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  background: #FFFFFF;
  box-shadow: 6px 10px 20px rgba(189, 190, 205, 0.249406);
  border-radius: 50%;
  margin-bottom: 40px;
`
const Icon = styled.div`


`

const ContentDescription = styled.div`

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

export default How
