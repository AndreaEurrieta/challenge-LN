import React, { useEffect, useState } from 'react'
import './AccumulatedMain.css'
import '../Header/Header.css'
import { Card } from '../Card/Card'
import { FilterArticles } from '../../Helpers/FilterArticles'
import { Service } from '../../services/Service'

export const AccumulatedMain = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        establecerEstado()
    }, []);

    const establecerEstado = async () => {
        const res = await Service()
        setItems(FilterArticles(res))
    };
    console.log(items)
    return (
        <div className='sidebar__main'>
            <div className='row'>
                <div className='hlp-marginBottom-15'>
                    <h1 className='com-title-section-xl hlp-marginBottom-40'>Acumulado Grilla</h1>
                </div>
            </div>
            <div className='row'>
                <div>
                    
                </div>
            </div>
            <section className='row-gap hlp-degrade'>
                {
                    (items) && (items.map((item) => <Card
                        key={item._id}
                        item={item}
                    />))                        
                }
            </section>
            <section className='row'>
                <div className='col-12 hlp-text-center hlp-margintop-40'>
                    <button className='--btn --secondary'>MÁS NOTAS DE ACUMULADO GRILLA</button>
                </div>
            </section>
        </div>
    )
}
