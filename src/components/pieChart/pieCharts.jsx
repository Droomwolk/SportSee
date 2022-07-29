import React, { useCallback, useState } from 'react'
import { PieChart, Pie, Sector, Cell  } from 'recharts'

import "../../styles/main.scss"

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieCharts = () => {
  return (
    <div className='pieCharts'>
    <PieChart width={280} height={260}>
      <Pie
        data={data}
        cx={135}
        cy={130}
        innerRadius={70}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </div>
  )
}

export default PieCharts