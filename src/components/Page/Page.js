import React from 'react'
import { BannerSideBar } from '../BannerSideBar/BannerSideBar'
import { BannerTop } from '../BannerTop/BannerTop'
import { Header } from '../Header/Header'
import { MainAcumulado } from '../MainAcumulado/MainAcumulado'
import './Page.css'

export const Page = () => {
  return (
    <>
     <Header/>
      <main>
        <BannerTop/>
        <div className='lay-sidebar'>
          <MainAcumulado/>
          <BannerSideBar/>
        </div>
      </main>  
    </>
  )
}
