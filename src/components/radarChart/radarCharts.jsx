import React from 'react'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer
} from "recharts"
import "../../styles/main.scss"
import { useQuery } from "@tanstack/react-query";
import * as api from '../../services/axios'

const datas = [
    {
      subject: "Math",
      A: 120,
      B: 110,
      fullMark: 150
    },
    {
      subject: "Chinese",
      A: 98,
      B: 130,
      fullMark: 150
    },
    {
      subject: "English",
      A: 86,
      B: 130,
      fullMark: 150
    },
    {
      subject: "Geography",
      A: 99,
      B: 100,
      fullMark: 150
    },
    {
      subject: "Physics",
      A: 85,
      B: 90,
      fullMark: 150
    },
    {
      subject: "History",
      A: 65,
      B: 85,
      fullMark: 150
    }
];

const RadarCharts = ({id}) => {

  const { isLoading, error, data } = useQuery(["performanceData"], async() => (await api.getPerformance(id)).data);

  // console.log("PERFORMANCE", data);

  if (isLoading) return "Loading...";
  
  const radar = data?.data.map((radars) => ({value: radars.value, kind: data.kind[radars.kind]}))
  
  if (error) return "An error has occurred: " + error.message;


  return (
    <div className='radarCharts'>
    <ResponsiveContainer width="100%" height="100%" > 
        <RadarChart
        cx={140}
        cy={135}
        outerRadius={80}
        // width={380}
        // height={560}
        data={radar}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey='kind' stroke='white' fill='white'/>
            <Radar
                name="userId"
                dataKey="value"
                stroke="red"
                fill="red"
                fillOpacity={0.6}
            />
        </RadarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default RadarCharts