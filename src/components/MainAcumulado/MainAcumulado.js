import React from 'react'
import './MainAcumulado.css'
import '../Header/Header.css'

export const MainAcumulado = () => {
  return (
    <div className='sidebar__main'>
        <div className='row'>
            <div className='hlp-marginBottom-15'>
                <h1 className='com-title-section-xl hlp-marginBottom-40'>Acumulado Grilla</h1>
            </div>
        </div>
        <div className='row'>
            <div></div>
        </div>
        <section>
        </section>
        <section className='row'>
            <div className='col-12 hlp-text-center hlp-margintop-40'>
                <button className='--btn --secondary'>MÁS NOTAS DE ACUMULADO GRILLA</button>
            </div>
        </section>
    </div>
  )
}
