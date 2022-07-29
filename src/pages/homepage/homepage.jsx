import React from 'react'
import '../../styles/main.scss'
import styled from 'styled-components'

import Aside from '../../components/aside/aside'
import BarCharts from '../../components/barChart/barCharts'
import LineCharts from '../../components/lineChart/lineCharts'
import RadarCharts from '../../components/radarChart/radarCharts'
import PieCharts from '../../components/pieChart/pieCharts'
import List from '../../components/list/list'

const HomeContainer = styled.div`
  padding: 4em;
  flex: 1;
`

const Homepage = () => {
  return (
    <div className='homepage'>
      <Aside/>
      <HomeContainer>
        <h1 className='homepage-title'>Bonjour <span style={{color: 'red'}} >Thomas</span></h1>
        <p className='homepage-phrase'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <main className='homepage__main'>
          <div className='homepage__main-graphic'>
            <BarCharts/>
            <div className='homepage__main-graphic-bottom'>
              <LineCharts/>
              <RadarCharts/>
              <PieCharts/>
            </div>
          </div>
          <aside>
            <List/>
          </aside>
        </main>
      </HomeContainer>
    </div>
  )
}

export default Homepage