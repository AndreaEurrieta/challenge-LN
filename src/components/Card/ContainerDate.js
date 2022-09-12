import React from 'react'
import './Card.css'

export const ContainerDate = ({ date }) => {

  const createDateFormat = () => {

    let dateFormat = new Date(date)
    let day = dateFormat.getDate();
    let month = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(dateFormat)
    let year = dateFormat.getFullYear();
    
    return (`${day} de ${month} de ${year}`)
    
  }
  
  return (
    <h4 className='com-date'>{createDateFormat()}</h4>
  )
}
