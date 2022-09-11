import React from 'react'
import './Card.css'
import {Image} from './Image'
import {Title} from './Title'
import {Date} from './Date'


export const Card = ({item}) => {     
    return (
        <article className='mod-caja-nota lugares w-100-mobile'>
            <Image img={item.promo_items.basic.url}/>
        <div className='mod-caja-nota__descrip'>
            <Title title={item.headlines.basic}/>
            <Date date={item.display_date}/>
        </div>
    </article>
    )
}
