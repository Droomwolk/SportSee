import React from 'react'
import '../../styles/main.scss'

import calorie from '../../assets/img/calories-icon.png'
import protein from '../../assets/img/protein-icon.png'
import glucide from '../../assets/img/carbs-icon.png'
import lipide from '../../assets/img/fat-icon.png'

const data = [calorie, protein, glucide, lipide]

const List = () => {
  return (
    <div className='list'>
        <div className='list__card'>
            <img src={calorie} alt="calorie" className='list__card-img'/>
            <div className='list__card-text'>
                <p>1,930kCal</p>
                <p>Calories</p>
            </div>
        </div>
        <div className='list__card'>
            <img src={protein} alt="protein" className='list__card-img'/>
            <div className='list__card-text'>
                <p>155g</p>
                <p>Protéines</p>
            </div>
        </div>
        <div className='list__card'>
            <img src={glucide} alt="glucide" className='list__card-img'/>
            <div className='list__card-text'>
                <p>290g</p>
                <p>Glucides</p>
            </div>
        </div>
        <div className='list__card'>
            <img src={lipide} alt="lipide" className='list__card-img'/>
            <div className='list__card-text'>
                <p>50g</p>
                <p>Lipides</p>
            </div>
        </div>
    </div>
  )
}

export default List