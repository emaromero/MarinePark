import React from 'react'
import cam from "../images/cam.png"
import bolt from "../images/bolt.png"
import segurity from "../images/segurity.png"
import "../index.css"

export const Seguridad = () => {
    return (
        <>
            <section id="about" className="page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="service-item">
                                <div className="icon">
                                    <img alt='seguriry' src={cam} className="w-100" />
                                </div>
                                <h5 className='text-white'>SEGURIDAD</h5>
                                <div className="line-dec"></div>
                                <p>Circuito cerrado de cámaras</p>
                                <div className="primary-blue-button">
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="service-item">
                                <div className="icon">
                                    <img alt='seguriry' src={bolt} className="w-100" />
                                </div>
                                <h5 className='text-white'>RESPALDO ELECTRICO</h5>
                                <div className="line-dec"></div>
                                <p>Grupo electrógeno de 164kva</p>
                                <div className="primary-blue-button">
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="service-item">
                                <div className="icon">
                                    <img alt='seguriry' src={segurity} className="w-100" />
                                </div>
                                <h5 className='text-white'>PERSONAL</h5>
                                <div className="line-dec"></div>
                                <p> Circuito cerrado de cámaras</p>
                                <div className="primary-blue-button">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container text-center text-white">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="horarios">
                                <h2 className='text-uppercase'>horarios de atención</h2>
                                <p className="lead mb-0">Miercoles a Lunes de 8:00 a 19:00
                            <br /> Fin de semana de 8:00 a 20:00</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="service-item">
                                <div>
                                <iframe className='mapita' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1645.9566804926908!2d-58.601493999999995!3d-34.403548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x90a4caaddb8122fb!2sMarine%20Park!5e0!3m2!1ses-419!2sar!4v1659626204044!5m2!1ses-419!2sar"
                                            title='maps' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
