import React from 'react'
import cam from '../images/cam.png';
import bolt from '../images/bolt.png';
import segurity from '../images/segurity.png';
import "./contacto.css"

export const Contacto = () => {
    return (
        <>
            <section className="text-center text-white">
                <h1 className='text-center mt-5 mb-5 text-uppercase'>contacto</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon">
                                <h2 className='text-uppercase'>horarios de atención</h2>
                                </div>
                                <p className="lead mb-0">Miercoles a Lunes de 8:00 a 19:00
                            <br /> Fin de semana de 8:00 a 20</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon">
                                    <div>
                                        <iframe className='mapita' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1645.9566804926908!2d-58.601493999999995!3d-34.403548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x90a4caaddb8122fb!2sMarine%20Park!5e0!3m2!1ses-419!2sar!4v1659626204044!5m2!1ses-419!2sar"
                                            title='maps' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
