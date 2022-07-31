import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logoMP from "../images/marinepark.png"
import "./header.css"

export const Header = () => {
    return (
        <>
        <div className='contenedor-header text-uppercase font-weight-bold'>
            <Navbar sticky="top" expand="sm" collapseOnSelect className='navcollap'>
                <Navbar.Brand>
                    <img src={logoMP} className="logoMarinePark" alt='logoMarinePark'/>{' '}
                </Navbar.Brand>
                <Navbar.Toggle className="coloring" />
                <Navbar.Collapse>
                    <Nav id='linknav'> 
                        <Nav.Link href="#blog">Nosotros</Nav.Link>
                        <Nav.Link href="#about-us">Servicios</Nav.Link>
                        <Nav.Link href="#contact-us">Contacto</Nav.Link>
                        <Nav.Link href="#contact-us">Ubicacion</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        </div>
        </>
    )
}
