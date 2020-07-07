import React, {Component} from "react";
import {Link, animateScroll as scroll } from "react-scroll";
import {Navbar, Nav} from "react-bootstrap";
import {translate} from "react-switch-lang"
import "./Header.css"
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logoKancelar.png"

class Headers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };


    render() {

        const autoOpen = async(event) => {
            let element = await document.getElementById("responcive-navbar-nav");
            await element.classList.add("show");

        }

        const autoClose = async(event) => {
            let element = await document.getElementById("responcive-navbar-nav");
            await element.classList.toggle("show");
        }


        const {t} = this.props;
           return (
               <Navbar  sticky="top"
                        expand="md"
                       className="nav fixed-top"  bg="black" variant="black"
                       collapseOnSelect
               >
                   <Navbar.Brand href="#home"><img width="47" height="39"
                                                   src={logo}
                                                   alt="Logo"
                                                   onClick={this.scrollToTop} />
                   </Navbar.Brand>

                   <Navbar.Toggle onClick={autoOpen} aria-controls="responcive-navbar-nav"/>

                   <Navbar.Collapse className="navbar" id="responcive-navbar-nav">
                       <Nav className="mr-auto">
                               <Link className="nav-item" onClick={autoClose}
                                 activeClass="msactive"
                                 to="slayder"
                                 spy={true}
                                 href="#slayder"
                                 smooth={true}
                                 offset={-50}
                                 duration={800}
                           >{t('header.section1.title')}</Link>
                           <Link className="nav-item" onClick={autoClose}
                                 activeClass="msactive"
                                 to="about"
                                 spy={true}
                                 href="#about"
                                 smooth={true}
                                 offset={-50}
                                 duration={800}
                           >{t('header.section2.title')}</Link>

                           <Link className="nav-item" onClick={autoClose}
                                 activeClass="msactive"
                                 to="services"
                                 spy={true}
                                 href="#services"
                                 smooth={true}
                                 offset={-50}
                                 duration={800}
                           >{t('header.section3.title')}</Link>

                           <Link className="nav-item" onClick={autoClose}
                                 activeClass="msactive"
                                 to="practica"
                                 spy={true}
                                 href="#practica"
                                 smooth={true}
                                 offset={-50}
                                 duration={800}
                           >{t('header.section4.title')}</Link>

                           <Link className="nav-item" onClick={autoClose}
                                 activeClass="msactive"
                                 to="team"
                                 spy={true}
                                 href="#team"
                                 smooth={true}
                                 offset={-50}
                                 duration={800}
                           >{t('header.section5.title')}</Link>

                           <Link className="nav-item" onClick={autoClose}
                                 activeClass="msactive"
                                 to="pravila"
                                 spy={true}
                                 href="#pravila"
                                 smooth={true}
                                 offset={-50}
                                 duration={800}
                           >{t('header.section7.title')}</Link>

                           <Link className="nav-item" onClick={autoClose}
                                 activeClass="msactive"
                                 to="kontact"
                                 spy={true}
                                 href="#kontact"
                                 smooth={true}
                                 offset={-50}
                                 duration={800}
                           >{t('header.section6.title')}</Link>

                       </Nav>

                   </Navbar.Collapse>
               </Navbar>

           )
    }
}

export default translate(Headers);

/*
                       <NavDropdown title={t('header.section4.title')}>
                            <Link className="nav-item"

                                                    to="practica_1"
                                                    spy={true}
                                                    href="#practica_1"
                                                    smooth={true}
                                                    offset={-50}
                                                    duration={800}
                            >{t('header.section4.practica_1')}</Link>
                            <Link className="nav-item"
                                                    to="practica_2"
                                                    spy={true}
                                                    href="#practica_2"
                                                    smooth={true}
                                                    offset={-50}
                                                    duration={800}
                            >{t('header.section4.practica_2')}</Link>
                            <NavDropdown.Item><Link className="nav-item"
                                                    to="practica_3"
                                                    spy={true}
                                                    href="#practica_3"
                                                    smooth={true}
                                                    offset={-50}
                                                    duration={800}
                            >{t('header.section4.practica_3')}</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className="nav-item"
                                                    to="practica_4"
                                                    spy={true}
                                                    href="#practica_4"
                                                    smooth={true}
                                                    offset={-50}
                                                    duration={800}
                            >{t('header.section4.practica_4')}</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className="nav-item"
                                                    to="practica_5"
                                                    spy={true}
                                                    href="#practica_5"
                                                    smooth={true}
                                                    offset={-50}
                                                    duration={800}
                            >{t('header.section4.practica_5')}</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className="nav-item"
                                                    to="practica_6"
                                                    spy={true}
                                                    href="#practica_6"
                                                    smooth={true}
                                                    offset={-50}
                                                    duration={800}
                            >{t('header.section4.practica_6')}</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className="nav-item"
                                                    to="practica_7"
                                                    spy={true}
                                                    href="#practica_7"
                                                    smooth={true}
                                                    offset={-50}
                                                    duration={800}
                            >{t('header.section4.practica_7')}</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className="nav-item"
                                                    to="practica_8"
                                                    spy={true}
                                                    href="#practica_8"
                                                    smooth={true}
                                                    offset={-50}
                                                    duration={800}
                            >{t('header.section4.practica_8')}</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className="nav-item"
                                                    to="practica_9"
                                                    spy={true}
                                                    href="#practica_9"
                                                    smooth={true}
                                                    offset={-50}
                                                    duration={800}
                            >{t('header.section4.practica_9')}</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className="nav-item"
                                                    to="practica_10"
                                                    spy={true}
                                                    href="#practica_10"
                                                    smooth={true}
                                                    offset={-50}
                                                    duration={800}
                            >{t('header.section4.practica_10')}</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className="nav-item"
                                                    to="practica_11"
                                                    spy={true}
                                                    href="#practica_11"
                                                    smooth={true}
                                                    offset={-50}
                                                    duration={800}
                            >{t('header.section4.practica_11')}</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className="nav-item"
                                                    to="practica_12"
                                                    spy={true}
                                                    href="#practica_12"
                                                    smooth={true}
                                                    offset={-50}
                                                    duration={800}
                            >{t('header.section4.practica_12')}</Link></NavDropdown.Item>
                        </NavDropdown>

                    <Form inline>
                        <NavDropdown className={"dropdown"} title={getLanguage().toUpperCase()} id="lng-dropdown">
                            <NavDropdown.Item id="lng_pl" className="dropdown nav-item" href="#" onClick={this.handleSetLanguage('pl')}>PL</NavDropdown.Item>
                            <NavDropdown.Item id="lng_en" className="dropdown nav-item" href="#" onClick={this.handleSetLanguage('en')}>EN</NavDropdown.Item>
                        </NavDropdown>
                    </Form>

                        handleSetLanguage = (key) => () => {
        setLanguage(key);


    };
 */
