import React from 'react'
import styled from 'styled-components'

import Header from '../header/Header'
import TopBanner from '../topBanner/TopBanner'
import About from '../about/About'
import Why from '../why/Why'
import Experts from '../experts/Experts'
import Discover from '../discover/Discover'
import Faq from '../faq/Faq'
import How from '../how/How'
import Fund from '../fund/Fund'
import Footer from '../footer/Footer'

const HomePage = (props) => {
  return (
    <Wrap>
      <Header />

      <TopBanner />

      <About />

      <Why />

      <Experts />

      <Discover />

      <Faq />

      <How />

      <Fund />

      <Footer />
    </Wrap>
  )
}

const Wrap = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  * {
    box-sizing: border-box;
  }
`

export default HomePage
