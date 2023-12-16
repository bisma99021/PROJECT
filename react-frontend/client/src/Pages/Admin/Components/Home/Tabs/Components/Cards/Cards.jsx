import React from 'react'
import './Cards.css'
import Card from '../Card/Card'

const Cards = ({ data }) => {
  return (
    <div className="Cards">
      {data.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              png={card.png}
              series={card.series}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Cards
