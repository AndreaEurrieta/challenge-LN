import React from 'react'

export const Services = () => {
  
  const  API = fetch('https://api-test-ln.herokuapp.com/articles'); 
    API
    .then( resp => resp.json() )
    .then( ({ articles }) =>{
      console.log(articles)
    });
    

}
