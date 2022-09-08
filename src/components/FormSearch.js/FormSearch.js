import React from 'react'
import './FormSearch.css'

export const FormSearch = () => {
  return (
    <form className="com-search">
        <input type="text" placeholder="Buscar" className="com-search__input"/>
        <i className="icon-search"></i>
        <input type="submit" value="Buscar" className="--btn --primary com-search__submit"/>
    </form>
  )
}
