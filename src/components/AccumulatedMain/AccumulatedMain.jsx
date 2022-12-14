import React, { useEffect, useState } from 'react'
import './AccumulatedMain.css'
import '../Header/Header.css'
import { Card } from '../Card/Card'
import { FilterArticles } from '../../Helpers/FilterArticles/FilterArticles'
import { Service } from '../../services/Service'
import { GetTagList } from '../../Helpers/GetTagList/GetTagList'
import { Tags } from '../Tags/Tags'

export const AccumulatedMain = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        state()
    }, []);

    const state = async () => {
        const res = await Service()
        setItems(FilterArticles(res))
    };

    const tagsList = GetTagList(items);

    return (
        <div className='sidebar__main'>
            <div className='row'>
                <div className='hlp-marginBottom-15'>
                    <h1 className='com-title-section-xl '>Acumulado Grilla</h1>
                </div>
            </div>
            <div className='row'>
            <div className='cont_tags com-secondary-tag hlp-marginBottom-20"'>
    
                {
                    (tagsList) && (tagsList.map((tags) => <Tags
                        tags={tags}
                    />))
                }
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
        </div>
    )
}
