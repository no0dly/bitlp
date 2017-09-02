import React from 'react'
import styled from 'styled-components'

import Slider from './Slider'

import expert from '../../images/person.png'
import expert2 from '../../images/person2.png'
import expert3 from '../../images/person3.png'

const data = [
  {
    name: 'Peter Thiel',
    position: 'Co-Founder of Paypal',
    text: '“I do think Bitcoin is the first [encrypted money] that has the potential to do something like change the world.”',
    image: expert
  },
  {
    name: 'John Wilson ',
    position: 'CEO of Google',
    text: '"Bitcoin is a remarkable cryptographic achievement and the ability to create something that is not duplicable in the digital world has enormous value"',
    image: expert2
  },
  {
    name: 'John McAfee',
    position: 'Founder of McAfee',
    text: 'You can’t stop things like Bitcoin. It will be everywhere and the world will have to readjust. World governments will have to readjust” ',
    image: expert3
  },
  {
    name: 'John Wilson ',
    position: 'CEO of Google',
    text: '"Bitcoin is a remarkable cryptographic achievement and the ability to create something that is not duplicable in the digital world has enormous value"',
    image: expert2
  }
]

const Experts = (props) => {
  return (
    <Wrap>
      <Title>
        <TitleText>
          What the experts are saying about Bitcoin…
        </TitleText>
      </Title>
      <SliderWrap>
        <Slider data={ data } />
      </SliderWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  padding-top: 50px;
  text-align: center;
  margin-bottom: 25px;
`

const Title = styled.div`
  text-align: center;
  margin-bottom: 100px;
  @media (max-width: 500px) {
    margin-bottom: 30px;
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

const SliderWrap = styled.div`
  margin-bottom: 30px;
`

export default Experts
