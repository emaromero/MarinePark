import React from 'react'
import { GuarderiaNauticaCarrou } from './carrousels/GuarderiaNauticaCarrou';
import "../index.css"

export const Nosotros = () => {
    return (
        <>
            <div>
                <section className='servicios-sec'>
                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div className="features-icons-icon">
                            <h1 className='text-center mt-5 mb-5 text-uppercase'>nosotros</h1>
                        </div>
                        <p className="lead mb-0">Guardería nautica ubicada en Tigre, Buenos Aires.<br /> Contamos con espacio para 372 embarcaciones; con dos puentes grúa inteligentes manejados a distancia y 4 asensores de costa para embarcaciones de hasta 9,5mts de eslora y 5tns.
                            <br />Te ofrecemos estacionamiento con vigilancia las 24hs, baños y vestuarios, servicio de valet en carrito eléctrico y servicio de salida programada.</p>
                    </div>
                </section>
                <section id="about2" class="parallax-section text-white ">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-sm-12">
                                <div class="about-des">
                                    <h3>Nosotros</h3>
                                    <p>Guardería nautica ubicada en Tigre, Buenos Aires.<br /> Contamos con espacio para 372 embarcaciones; con dos puentes grúa inteligentes manejados a distancia y 4 asensores de costa para embarcaciones de hasta 9,5mts de eslora y 5tns.
                                        <br />Te ofrecemos estacionamiento con vigilancia las 24hs, baños y vestuarios, servicio de valet en carrito eléctrico y servicio de salida programada.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
