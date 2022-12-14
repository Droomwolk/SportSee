import React, { useCallback, useState } from 'react'
import { PieChart, Pie, Sector, Cell  } from 'recharts'

import "../../styles/main.scss"

import { useQuery } from "@tanstack/react-query";  
import * as api from '../../services/axios'

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieCharts = ({id}) => {

  const { isLoading, error, data } = useQuery(["lineData"], async() => (await api.getInformation(id)).data);

  console.log("LINE", data);

  if (isLoading) return "Loading...";

  const line = [{name: "A", value: data.score}]

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className='pieCharts'>
    <PieChart width={280} height={260}>
      <Pie
        data={line}
        cx={135}
        cy={130}
        innerRadius={70}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        nameKey="A"
      >
        
        {/* <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} /> */}
        
      </Pie>
    </PieChart>
    </div>
  )
}

export default PieCharts