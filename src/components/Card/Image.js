import React from 'react'
import './Card.css'

export const Image = ({ img }) => {
  return (
    <section className='cont-figure'>
            <a className='figure' href='/'>
                <picture className='content-pic picture'>
                    <img className='content-img' src={img} alt=''/>
                </picture>
            </a>
        </section>
  )
}
