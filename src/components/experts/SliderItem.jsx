import React from 'react'
import styled from 'styled-components'

const SliderItem = (props) => {
  return (
    <Wrap>
      <Header>
        <Ava image={ props.image } />
        <About>
          <Name>
            <NameText>
              { props.name }
            </NameText>
          </Name>
          <Position>
            <PositionText>
              { props.position }
            </PositionText>
          </Position>
        </About>
      </Header>
      <Descr>
        <DescrText>
          { props.text }
        </DescrText>
      </Descr>
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 32px 40px;
  background: #FFFFFF;
  box-shadow: 0px 0px 6px rgba(177, 177, 177, 0.337438);
  border-radius: 6px;
  margin: 0 30px;
  min-height: 280px;
  @media (max-width: 500px) {
    margin: 0 10px;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  @media (max-width: 500px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`

const Ava = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: url(${(props) => props.image}) no-repeat center;
  background-size: cover;
  margin-right: 22px;
`

const About = styled.div`
  text-align: left;
  @media (max-width: 500px) {
    text-align: center;
  }
`

const Name = styled.div`
  margin: 10px 0;
`

const NameText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  color: #263445;
  @media (max-width: 500px) {
    text-align: 0.875rem;
  }
`

const Position = styled.div`

`

const PositionText = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #92A0B0;
  font-weight: 300;
`

const Descr = styled.div`
  text-align: left;
  @media (max-width: 500px) {
    text-align: center;
  }
`

const DescrText = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #263445;
  font-size: 1.25rem;
  @media (max-width: 500px) {
    text-align: 1rem;
  }
`

export default SliderItem
