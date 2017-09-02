import React from 'react'
import styled from 'styled-components'

import topBannerBg from '../../images/bg/topBannerBg.png'
import bannerChart from '../../images/bannerChart.png'
import Form from '../form/Form'

const TopBanner = (props) => {
  return (
    <Wrap>
      <Content>
        <Title>
          <TitleText>
            Invest in the Bitcoin Revolution
          </TitleText>
        </Title>
        <SubTitle>
          <SubTitleText>
            Thousands of Canadians use Coinsquare daily to trade Bitcoin, Ethereum, Dash and more.
          </SubTitleText>
        </SubTitle>
        <Graph>
          <GraphHeader>
            <Money>
              <MoneyAmount>
                $4130.08
              </MoneyAmount>
            </Money>
            <Percentage>
              <PercentageAmount>
                266.24%
              </PercentageAmount>
              <PercentageText>
                LAST 6M BITCOIN PRICE
              </PercentageText>
            </Percentage>
          </GraphHeader>
          <Chart>
            <img src={ bannerChart } alt="graph" />
          </Chart>
        </Graph>
        <Warning>
          <WarningText>
            Past performance is not an indication of future results. This is not investment advice. CFD trading
          </WarningText>
        </Warning>
      </Content>
      <Form />
    </Wrap>
  )
}

const Wrap = styled.div`
  height: 874px;
  padding: 0 150px 0;
  display: flex;
  background-image: url(${topBannerBg});
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
  position: relative;
  @media (max-width: 1200px) {
    padding: 0 80px 0;
  }

  @media (max-width: 1078px) {
    padding: 0 40px 0;
  }

  @media (max-width: 960px) {
    flex-wrap: wrap;
    height: auto;
  }
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding-right: 30px;
  margin-right: 100px;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: baseline;
    padding-top: 140px;
    align-items: center;
    margin-right: 0;
    margin-bottom: 40px;
    padding-right: 0;
  }
`
const Title = styled.div`
  max-width: 401px;
  margin-bottom: 25px;
  @media (max-width: 960px) {
    max-width: 100%;
  }

`
const TitleText = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 2.875rem;
  color: #fff;
  @media (max-width: 500px) {
    font-size: 1.875rem;
  }
`
const SubTitle = styled.div`
  max-width: 512px;
  margin-bottom: 25px;

`
const SubTitleText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1.375rem;
  color: #E0E6ED;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const Graph = styled.div`
  display: flex;
  flex-direction: column;
`
const GraphHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    justify-content: space-between;
  }

`
const Money = styled.div`
  margin-right: 35px;
`
const MoneyAmount = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 3.375rem;
  color: #fff;
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`
const Percentage = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`
const PercentageAmount = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1.625rem;
  color: #00B5FF;
  margin-bottom: 5px;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const PercentageText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  color: #fff;
  @media (max-width: 500px) {
    font-size: 0.5rem;
  }
`
const Chart = styled.div`
  width: 396px;
  height: 102px;
  margin-bottom: 40px;
  @media (max-width: 500px) {
    width: auto;
    height: auto;
  }
  img {
    width: 100%;
    height: auto;
  }
`

const Warning = styled.div`
  max-width: 420px;
`

const WarningText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  color: #a9a8bb;
  @media (max-width: 500px) {
    font-size: 0.875rem;
  }
`

export default TopBanner
