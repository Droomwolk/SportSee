import React from 'react'
import '../../styles/main.scss'
import { useQuery } from "@tanstack/react-query";
import * as api from '../../services/axios'

import calorie from '../../assets/img/calories-icon.png'
import protein from '../../assets/img/protein-icon.png'
import glucide from '../../assets/img/carbs-icon.png'
import lipide from '../../assets/img/fat-icon.png'

// const data = [calorie, protein, glucide, lipide]

const List = ({id}) => {

    const { isLoading, error, data } = useQuery(["repoData"], async() => (await api.getInformation(id)).data);

    if (isLoading) return "Loading...";
  
    if (error) return "An error has occurred: " + error.message;  


  return (
    <div className='list'>
        <div className='list__card'>
            <img src={calorie} alt="calorie" className='list__card-img'/>
            <div className='list__card-text'>
                <p>{data.keyData.calorieCount}</p>
                <p>Calories</p>
            </div>
        </div>
        <div className='list__card'>
            <img src={protein} alt="protein" className='list__card-img'/>
            <div className='list__card-text'>
                <p>{data.keyData.proteinCount}</p>
                <p>Protéines</p>
            </div>
        </div>
        <div className='list__card'>
            <img src={glucide} alt="glucide" className='list__card-img'/>
            <div className='list__card-text'>
                <p>{data.keyData.carbohydrateCount}</p>
                <p>Glucides</p>
            </div>
        </div>
        <div className='list__card'>
            <img src={lipide} alt="lipide" className='list__card-img'/>
            <div className='list__card-text'>
                <p>{data.keyData.lipidCount}</p>
                <p>Lipides</p>
            </div>
        </div>
    </div>
  )
}

export default List