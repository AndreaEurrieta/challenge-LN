import React from 'react'
import './Tags.css'

export const Tags = ({ tags }) => {
  return (
      <a className='a-tags' href={`/tema/${tags.slug}`}>{tags.text} ({tags.count})</a>
  )
}
