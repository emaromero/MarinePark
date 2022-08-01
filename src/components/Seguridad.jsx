import React from 'react'
import cam from "../images/cam.png"
import bolt from "../images/bolt.png"
import segurity from "../images/segurity.png"

export const Seguridad = () => {
    return (
        <>
            <section className="features-icons text-center text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon">
                                    <img alt='seguriry' src={cam} className="w-50 justify-content-center" />
                                </div>
                                <h3>Seguridad</h3>
                                <p className="lead mb-0">Estacionamiento con vigilancia las 24HS</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon">
                                    <img alt='bolt' src={bolt} className="w-50 justify-content-center" />
                                </div>
                                <h3>Respaldo Electrico</h3>
                                <p className="lead mb-0">Grupo electrógeno de 164kva</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon">
                                    <img alt='segurity' src={segurity} className="w-50 justify-content-center" />
                                </div>
                                <h3>Personal</h3>
                                <p className="lead mb-0">Personal de seguridad profesional</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
