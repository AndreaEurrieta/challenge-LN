import React from 'react'
import '../Footer.css'

const directories = [
  {
    href: "http://especiales.lanacion.com.ar/varios/mapa-sitio/index.html",
    title: "Mapa del sitio"
  },
  {
    href: "https://micuenta.lanacion.com.ar/ayuda",
    title: "Ayuda"
  },
  {
    href: "https://micuenta.lanacion.com.ar/tyc",
    title: "Términos y condiciones"
  },
  {
    href: "https://www.lanacion.in/#/",
    title: "¿Cómo anunciar?"
  },
  {
    href: "https://suscripciones.lanacion.com.ar/suscribirme/",
    title: "Suscribirse al diario impreso"
  }
]
export const Links = () => {
  return (
    <section className="col-desksm-9 col-deskxl-8 footer-sitio__links">
      {directories.map((link) => (
        <a href={link.href} className="item_link">{link.title}</a>
      ))}
    </section>
  )
}
