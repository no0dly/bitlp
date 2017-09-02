import React from 'react'
import SliderSlick from 'react-slick'
import styled from 'styled-components'

import SliderItem from './SliderItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  dotsClass: 'customDots',
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1
      }
    }
  ]
}

class Slider extends React.Component {
  renderSlides() {
    const slides = this.props.data
    return slides.map((slide, idx) => {
      return (
        <div key={ idx }>
          <SliderItem { ...slide } />
        </div>
      )
    })
  }
  render() {
    return (
      <Wrap>
        <SliderSlick { ...settings }>
          {this.renderSlides()}
        </SliderSlick>
      </Wrap>
    )
  }
}

const Wrap = styled.div`
  width: 100%;
  .slick-list {
    padding-top: 20px!important;
    padding-bottom: 20px!important;
    margin-bottom: 80px;
    @media (max-width: 500px) {
      margin-bottom: 20px;
    }
  }
  .customDots {
    li {
      display: inline-block;
      button {
        width: 12px;
        height: 12px;
        padding: 5px;
        border: 1px solid #1BBDFF;
        background: #fff;
        border-radius: 50%;
        font-size: 0;
        line-height: 0;
        cursor: pointer;
        margin-right: 15px;
      }
      &.slick-active {
        button {
          width: 16px;
          height: 16px;
          background: #2DC3FF;
        }
      }
    }
  }
`

export default Slider
