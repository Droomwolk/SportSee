import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
import {FaCircle} from 'react-icons/fa';

import '../../styles/main.scss';

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

const BarCharts = () => {
  return (
    <div className='barcharts'>
      <div className='barcharts__header'>
        <p className='barcharts__header-title'>Activité quotidienne</p>
          <ul className='barcharts__header-list'>
            <li className='barcharts__header-list-uno'><FaCircle style={{ fontSize: "0.5em", marginRight: "0.8em", color: "black"}}/> Poids (kg)</li>
            <li className='barcharts__header-list-dos'><FaCircle style={{ fontSize: "0.5em", marginRight: "0.8em", color: "red"}}/> Calories brûlées (kCal)</li>
          </ul>
      </div>
      <BarChart
        width={835}
        height={320}
        data={data}
        margin={{
          top: 50
        }}
        barSize={10}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis orientation='right'/>
        <Tooltip contentStyle={{backgroundColor: "red"}} itemStyle={{color: "white"}} />
        {/* <Legend /> */}
        <Bar dataKey="pv" fill="red" />
        <Bar dataKey="uv" fill="black" />
      </BarChart>
    </div>
  )
}

export default BarCharts