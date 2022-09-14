import React from 'react'
import '../../AccumulatedMain/AccumulatedMain.css'
import { Facebook } from './Redes/Facebook'
import './Icons.css'
import { Instagram } from './Redes/Instagram'
import { Rss } from './Redes/Rss'
import { Twitter } from './Redes/Twitter'

export const Icons = () => {
  return (
    <section className="col-12 col-desksm-4 col-desk-3 footer-header__redes">
      <Facebook />
      <Twitter />
      <Instagram />
      <Rss />
    </section>
  )
}
