import React from 'react'
import { Link } from 'react-router-dom'
import logoMP from "../images/marinepark.png"
import "./footer.css"

export default function Footer() {
    return (
        <>
                        <hr className="w-100 clearfix d-md" />
            <footer className="page-footer font-small blue">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h6 className="text-uppercase"> </h6>
                            <img src={logoMP} alt="MarinePark" width="180px" className="mr-2" />
                            
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-0" />
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h6 className="text-uppercase">menu</h6>
                            <ul className="list-unstyled">
                                <li className="nav-item text-reset mt-2"><Link to="/" className=" a ">Nosotros</Link></li>
                                <li className="nav-item text-reset mt-2"><Link to="/#" className=" a ">Servicios</Link></li>
                                <li className="nav-item text-reset mt-2"><Link to="/#" className=" a ">Servicios</Link></li>
                                <li className="nav-item text-reset mt-2"><Link to="/#" className=" a ">Ubicacion</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h6 className="text-uppercase font-weight-bold">Contactanos</h6>
                            <ul className="list-unstyled">
                                <li className="mt-2"><i className="fas fa-home mr-3"></i>  Chubut 2119, Rincón de Milberg</li>
                                <li className="mt-2"><i className="fas fa-envelope mr-3"></i>  administracion@mpark.com.ar</li>
                                <li className="mt-2"><i className="fas fa-phone mr-3"></i> 5245-4043</li>
                                <li className="mt-2"><i className="fas fa-phone mr-3"></i> 5245-4098</li>
                                <li className="mt-2"><i className="fas fa-phone mr-3"></i>  11-3445-3540</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Seguinos</h6>
                            <a id="iconMeta" className="btn btn-floating m-1 h6"
                                href="#!">
                                <box-icon className="text-" type='logo' name='meta' size="lg" color='white'></box-icon>
                            </a>
                            <a id="iconIg" className="btn btn-floating m-1 h6"
                                href="https://www.instagram.com/guarderia_marinepark/">
                                <box-icon type='logo' name='instagram' size="lg" color='white'></box-icon>
                            </a>
                            <a id="iconWhats" className="btn btn-floating m-1 h6"
                                href="https://walink.co/b8f22b">
                                <box-icon type='logo' name='whatsapp' size="lg" color='white'></box-icon>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="w-100 clearfix d-md" />
                <div className="text-center p-3">
                    <Link className="text-reset a " to="/"> MarinePark.com</Link>
                    © 2022
                </div>
            </footer>
        </>
    )
}