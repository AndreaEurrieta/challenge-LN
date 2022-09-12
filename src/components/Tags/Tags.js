import React from 'react'
import './Tags.css'

export const Tags = ({tags}) => {
  return (
    <div className='cont_tags com-secondary-tag'>

        <a className='a-tags' href={`/tema/${tags.slug}`}>{tags.text} ({tags.count})</a>
    </div>
  )
}
