import React from "react";
import { RadialBarChart, RadialBar } from "recharts";

import "../../styles/main.scss"

import { useQuery } from "@tanstack/react-query";  
import * as api from '../../services/axios'

const RadialChart = ({id}) => {

    const { isLoading, error, data } = useQuery(["radialData"], async() => (await api.getInformation(id)).data);

    console.log("RADIAL", data);

    if (isLoading) return "Loading...";

    const radial = [{name: data.id, value: data.score}]

    console.log("CHART", radial);

    if (error) return "An error has occurred: " + error.message;

    return (
    <div className="radialCharts">
    <RadialBarChart
      width={280}
      height={260}
      cx={135}
      cy={130}
      innerRadius={70}
      outerRadius={80}
      barSize={30}
      data={radial}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "center", fill: "red" }}
        background
        clockWise
        dataKey="value"
      />
      <text
        className="title__lineChart"
        width="15"
        dominantBaseline={'hanging'}
        x="24"
        y="14"
        fontSize="15"
        fill="black"
        opacity={1}
        >
          Score
        </text>
    </RadialBarChart>
    </div>
    )
}

export default RadialChart