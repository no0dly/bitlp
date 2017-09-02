import React from 'react'
import styled from 'styled-components'

import mark from '../../images/mark.svg'

const Why = (props) => {
  return (
    <Wrap>
      <List>
        <ListItem>
          <PageTitle>
            <PageTitleText>
              Why Buy Bitcoin?
            </PageTitleText>
          </PageTitle>
        </ListItem>
        <ListItem>
          <Title>
            <TitleIcon />
            <TitleText>
              Open source
            </TitleText>
          </Title>
          <Descr>
            <DescrText>
              Bitcoin code is fully auditable. You can read the source code yourself here.
            </DescrText>
          </Descr>
        </ListItem>
        <ListItem>
          <Title>
            <TitleIcon />
            <TitleText>
              Accountable
            </TitleText>
          </Title>
          <Descr>
            <DescrText>
              The public ledger is transparent, all transactions are seen by everyone.
            </DescrText>
          </Descr>
        </ListItem>
        <ListItem>
          <Title>
            <TitleIcon />
            <TitleText>
              Limited Supply
            </TitleText>
          </Title>
          <Descr>
            <DescrText>
              There will only ever be 21,000,000 bitcoins created and they are issued in a predictable fashion, you can view the inflation schedule here. Once they are all issued Bitcoin will be truly deflationary.
            </DescrText>
          </Descr>
        </ListItem>
        <ListItem className="bottom">
          <Title>
            <TitleIcon />
            <TitleText>
              Pseudonymous
            </TitleText>
          </Title>
          <Descr>
            <DescrText>
              No need to expose personal information when purchasing with cash or transacting.
            </DescrText>
          </Descr>
        </ListItem>
        <ListItem className="bottom">
          <Title>
            <TitleIcon />
            <TitleText>
              Secure
            </TitleText>
          </Title>
          <Descr>
            <DescrText>
              Encrypted cryptographically and can’t be brute forcedor confiscated with proper key management such as hardware wallets.
            </DescrText>
          </Descr>
        </ListItem>
      </List>
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 40px 30px;
  background: #F6F9FC;
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 33.3%;
  padding: 0 40px 30px;
  &.bottom {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`

const PageTitle = styled.div`
  margin-bottom: 10px;
`

const PageTitleText = styled.h3`
  font-family: Roboto;
  font-size: 2.375rem;
  letter-spacing: 0.013px;
  color: #FC7455;
`

const Title = styled.div`
  display: flex;
  margin-bottom: 50px;
`
const TitleIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #FC7455;
  position: relative;
  margin-right: 15px;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${mark}) no-repeat center;
  }
`

const TitleText = styled.p`
  font-family: Roboto;
  font-size: 1.375rem;
  color: #FC7455;
  padding-top: 4px;
`

const Descr = styled.div`
  margin-bottom: 70px;
`

const DescrText = styled.p`
  font-family: Roboto;
  font-size: 1.125rem;
  color: #8392A7;
  font-weight: 300;
  line-height: 2rem;
`

export default Why
