import React from 'react'
import { BannerSideBar } from '../BannerSideBar/BannerSideBar'
import { BannerTop } from '../BannerTop/BannerTop'
import { Header } from '../Header/Header'
import { AccumulatedMain } from '../AccumulatedMain/AccumulatedMain'
import './Page.css'

export const Page = () => {
  return (
    <>
     <Header/>
      <main>
        <BannerTop/>
        <div className='lay-sidebar'>
          <AccumulatedMain/>
          <BannerSideBar/>
        </div>
      </main>  
    </>
  )
}
