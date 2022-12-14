import React, {useState} from 'react'
import '../../styles/main.scss'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { useQuery } from "@tanstack/react-query";
import * as api from '../../services/axios'
import { useParams } from 'react-router-dom';

import Aside from '../../components/aside/aside'
import BarCharts from '../../components/barChart/barCharts'
import LineCharts from '../../components/lineChart/lineCharts'
import RadarCharts from '../../components/radarChart/radarCharts'
import PieCharts from '../../components/pieChart/pieCharts'
import List from '../../components/list/list'
import RadialChart from '../../components/radialChart/radialCharts';

const HomeContainer = styled.div`
  padding: 4em;
  flex: 1;
`

const Homepage = ({salutation, phrase}) => {

  const [userData, setUserData] = useState(null);

  const { id } = useParams();

  const { isLoading, error, data } = useQuery(["repoData"], async() => (await api.getInformation(id)).data);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className='homepage'>
      <Aside/>
      <HomeContainer>
        <h1 className='homepage-title'> {salutation} <span style={{color: 'red'}} > {data?.userInfos?.firstName} </span></h1>
        <p className='homepage-phrase'> {phrase} </p>
        <main className='homepage__main'>
          <div className='homepage__main-graphic'>
            <BarCharts salutation="Activité quotidienne" poids="Poids (kg)" calories="Calories brûlées (kCal)" id={id} />
            <div className='homepage__main-graphic-bottom'>
              <LineCharts id={id} />
              <RadarCharts id={id} />
              <RadialChart id={id} />
              {/* <PieCharts/> */}
            </div>
          </div>
          <aside>
            <List id={id}/>
          </aside>
        </main>
      </HomeContainer>
    </div>
  )
}

Homepage.propTypes = {
  salutation: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired
}

export default Homepage