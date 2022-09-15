import React from 'react'
import './FormSearch.css'

export const FormSearch = () => {
  return (
    <form className="com-search">
      <input type="text" placeholder="Buscar" className="com-search__input" />
      <i className="icon-search">
        <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="searchIconTitle" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000">
          <title id="searchIconTitle">Search</title>
          <path d="M14.4121122,14.4121122 L20,20" /> <circle cx="10" cy="10" r="6" />
        </svg>
      </i>
      <input type="submit" value="Buscar" className="--btn --primary com-search__submit" />
    </form>
  )
}
