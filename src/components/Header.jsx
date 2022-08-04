import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logoMP from "../images/marinepark.png"
import "./header.css"

export const Header = () => {
    return (
        <>
        <section className='section1'>

        <div className='contenedor-header text-uppercase font-weight-bold'>
            <Navbar sticky="top" expand="sm" collapseOnSelect className='navcollap'>
                <Navbar.Brand>
                    <img src={logoMP} className="logoMarinePark" alt='logoMarinePark'/>{' '}
                </Navbar.Brand>
                <Navbar.Toggle className="coloring" />
                <Navbar.Collapse>
                    <Nav id='linknav'> 
                        <Nav.Link href="">Nosotros</Nav.Link>
                        <Nav.Link href="#">Servicios</Nav.Link>
                        <Nav.Link href="#">Contacto</Nav.Link>
                        <Nav.Link href="/ubicacion">Ubicación</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        </div>
        </section>
        </>
    )
}
