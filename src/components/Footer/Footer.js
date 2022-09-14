import React from 'react'
import { AppStore } from './Icons/AppStore'
import { GooglePlay } from './Icons/GooglePlay'
import { Icons } from './Icons/Icons'
import { Links } from './Links/Links'
import { ReCaptcha } from './ReCaptcha/ReCaptcha'
import './Footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className="lay">
                <section className="row footer-header">
                    <section className="col-desksm-4 col-desk-6 footer-header__logo">
                        <a href="https://www.lanacion.com.ar/">
                            <i className="logo-la-nacion"></i>
                        </a>
                    </section>
                    <Icons />
                    <section className="col-12 col-desksm-4 col-desk-3 footer-header__app">
                        <GooglePlay />
                        <AppStore />
                    </section>
                </section>
                <section className="row footer-sitio">
                    <Links />
                    <ReCaptcha />
                </section>
                <section className="row footer-copyright">
                    <section className="col-desksm-6 col-desk-6 footer-copyright__fiscal">
                        <p>
                            <img src="https://static.glanacion.com/v2/ln/img/gda.jpg" alt="gda" className="img_gda" />
                            Miembro de GDA. Grupo de Diarios América
                            <a className="aI" href="https://serviciosweb.afip.gob.ar/clavefiscal/qr/publicInfoD.aspx" target="blank">
                                <img src="https://static.glanacion.com/v2/ln/img/data.jpg" alt="Data fiscal" className="img_data-fiscal" />
                            </a>
                        </p>
                    </section>
                    <section className="col-desksm-6 col-desk-6 footer-copyright__reserved">
                        <p>Copyright 2019 SA LA NACION | Todos los derechos reservados</p>
                    </section>
                </section>
            </div>
        </footer>
    )
}
