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
import '../../styles/main.scss';
import PropTypes from 'prop-types';
import { useQuery } from "@tanstack/react-query";  
import * as api from '../../services/axios'

import {FaCircle} from 'react-icons/fa';
const datas = [
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

const BarCharts = ({salutation, poids, calories, id}) => {

  const { isLoading, error, data } = useQuery(["activity"], async() => (await api.getActivity(id)).data);
  // console.log("ACTIVITY", data);

  if (isLoading) return "Loading...";
  
  const array = data?.sessions.map((content) => ({ name: content.day, kilogram: content.kilogram, calories: content.calories }) )

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className='barcharts'>
      <div className='barcharts__header'>
        <p className='barcharts__header-title'> {salutation} </p>
          <ul className='barcharts__header-list'>
            <li className='barcharts__header-list-uno'><FaCircle style={{ fontSize: "0.5em", marginRight: "0.8em", color: "black"}}/> {poids} </li>
            <li className='barcharts__header-list-dos'><FaCircle style={{ fontSize: "0.5em", marginRight: "0.8em", color: "red"}}/> {calories} </li>
          </ul>
      </div>
    
      <BarChart
        width={835}
        height={320}
        data={array}
        margin={{
          top: 50
        }}
        barSize={10}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis orientation='right'/>
        <Tooltip contentStyle={{backgroundColor: "red"}} itemStyle={{color: "white"}} />
        <Bar dataKey="kilogram" fill="red" />
        <Bar dataKey="calories" fill="black" />
      </BarChart>
    </div>
  )
}

BarCharts.propTypes = {
  salutation: PropTypes.string.isRequired,
  poids: PropTypes.string.isRequired,
  calories: PropTypes.string.isRequired,
}

export default BarCharts