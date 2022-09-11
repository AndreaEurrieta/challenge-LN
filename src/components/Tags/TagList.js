import React from 'react'
import { Tags } from './Tags'


export const getTagList = (items = []) => {
    
   const filterTags = items.map(article=> article.taxonomy.tags);
   console.log(filterTags)

   const count = 
}

