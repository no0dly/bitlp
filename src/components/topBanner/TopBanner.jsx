import React from 'react'
import styled from 'styled-components'

import topBannerBg from '../../images/topBannerBg.png'
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
            <img src={ bannerChart } />
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
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding-right: 30px;

`
const Title = styled.div`
  max-width: 401px;
  margin-bottom: 25px;
`
const TitleText = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 2.875rem;
  color: #fff;
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
`
const Graph = styled.div`
  display: flex;
  flex-direction: column;
`
const GraphHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`
const Money = styled.div`
  margin-right: 35px;
`
const MoneyAmount = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 3.375rem;
  color: #fff;
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
`
const PercentageText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  color: #fff;
`
const Chart = styled.div`
  width: 396px;
  height: 102px;
  margin-bottom: 40px;
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
`

export default TopBanner
