import React from 'react'
import '../Footer.css'

export const ReCaptcha = () => {
  return (
    <section className="col-desksm-3 col-deskxl-4 footer-sitio__captcha">
      <p>Protegido por re CAPTCHA:
        <a href="https://policies.google.com/terms?hl=es-419" target="blank" className="condition">Condiciones</a>
        <a href="https://policies.google.com/privacy?hl=es-419" target="blank" className="private">Privacidad</a>
      </p>
    </section>
  )
}
