import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Rectangle,} from "recharts";
import "../../styles/main.scss"
import { useQuery } from "@tanstack/react-query";  
import * as api from '../../services/axios'

const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

const LineCharts = ({id}) => {

  const { isLoading, error, data } = useQuery(["sessionsData"], async() => (await api.getAverageSessions(id)).data.sessions);

  if (isLoading) return "Loading...";
  
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className='lineCharts'> 
      <LineChart width={280} height={260} data={data}>
      <YAxis hide={true} domain={['dataMin -15', 'dataMax + 45']} />
      <text
      // className="title__lineChart"
      width="15"
      dominantBaseline={'hanging'}
      x="15"
      y="15"
      fontSize="15"
      fill="white"
      opacity={0.55}
      >
        Durée moyenne des sessions
      </text>
      <XAxis 
      dataKey="name"
      stroke="rgba(255, 255, 255, 0.6)"
      tick={{ fontSize: 12, fill: 'white' }}
      tickLine={false}
      axisLine={false}
      opacity={0.6}
      interval="preserveStartEnd" 
      />
      {/* <YAxis /> */}
      <Tooltip itemStyle={{color: "black"}}/>
      <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" strokeWidth={2} strokeOpacity={1} dot={false}
      activeDot={{
        stroke: 'rgba(255, 255, 255, 0.5)',
        strokeWidth: 10,
        r: 5,
      }}/>
      </LineChart>
    </div>
  )
}

export default LineCharts