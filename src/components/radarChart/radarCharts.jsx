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

const data = [
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

const RadarCharts = () => {
  return (
    <div className='radarCharts'>
    <ResponsiveContainer width="100%" height="100%" > 
        <RadarChart
        cx={140}
        cy={135}
        outerRadius={80}
        // width={380}
        // height={560}
        data={data}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" stroke='white' fill='white'/>
            <Radar
                name="Mike"
                dataKey="A"
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