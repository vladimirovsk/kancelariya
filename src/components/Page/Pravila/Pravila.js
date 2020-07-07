import React, {Component} from "react"
import "./Pravila.css"
import {translate} from "react-switch-lang";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';
import mapMarkedAlt from '@iconify/icons-fa-solid/map-marker-alt';
;


class Pravila extends Component {
    state = {
        id:"0"
    }
    render() {
        const {t} = this.props;
        return (
            <Container fluid={true} className={"kontact"}>
            <Container fluid={false} className={"kontact"} id={this.props.id}>
                <div className={"pt-3"}>
                    <h1 className="text-center heading-title">{t('header.section6.title')}</h1>
                </div>
                    <Row className="p-3 row_brown">
                        <Col sm={6}>
                            <Form>
                                <Form.Group className={"mb-3"}controlId="formBasicEmail">

                                    <Form.Control className={"mb-3"} type="text" placeholder="Imię" />
                                    <Form.Control className={"mb-3"} type="email" placeholder="Enter email" />
                                    <Form.Control className={"mb-3"} type="text" placeholder="Telefon" />
                                    <Form.Control as="textarea" rows="3" placeholder="Treść wiadomości" />
                                </Form.Group>
                                <Button variant="secondary" type="submit">
                                    Wyślij wiadomość
                                </Button>
                            </Form>

                        </Col>
                        <Col sm={6} className={"justify-content-center"}>
                            <div style={{background: 'darkgoldenrod', boxSizing: 'border-box'}}>
                            <h3 className={"text-center font-weight-bold pt-3"}>Gdzie nas znajdziesz</h3>
                            <hr />
                            <Row className="justify-content-md-center pb-4">

                                <Col xs sm={4} className="text-center m-0 p-0">
                                    <span style={{fontSize: '80px', color: 'floralwhite'}}>
                                        <Icon icon={mapMarkedAlt} />

                                    </span>
                                </Col>
                                <Col xs sm={8}>
                                    <span style={{color: "white"}}>ul. Topolowa 31/1    31-506 Kraków</span><br />
                                    <span style={{fontSize: "15px"}}>tel. 12 312 53 22<br />
                                    sekretariat@kancelaria-b-s.pl<br />
                                    Pon-Pt - 08:00-19:00</span>

                                </Col>
                            </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.063880815331!2d19.95367544405478!3d50.0663652887421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b185f36d53b%3A0x96d15ce836ab9dd3!2sTopolowa%2031%2C%2031-506%20Krak%C3%B3w!5e0!3m2!1sru!2spl!4v1590245269460!5m2!1sru!2spl"
                            width="100%" height="300px" frameBorder="0" style={{border:0}} allowFullScreen=""
                            aria-hidden="false" tabIndex="0"></iframe>
                    </Row>
            </Container>
            </Container>
        )
    }
}
export default translate(Pravila)

/**
 *                                         </div>
 <div className="elementor-icon-box-content">
 <h3 className="elementor-icon-box-title">
 <span>Gdzie nas znajdziesz</span>
 </h3>
 <p className="elementor-icon-box-description"></p><p
 style="text-align:justify"><span style="color: white">ul. Topolowa 31/1    31-506 Kraków<br>
 <span style="font-size: 15px;">tel. 12 312 53 22<br>
 </span><span style="font-size: 15px;">sekretariat@kancelaria-b-s.pl<br>
 </span><span style="font-size: 15px;">Pon-Pt - 08:00-19:00</span><span
 style="font-size: 15px; font-weight: 100; text-align: left;"></span></span>
 </p><p></p>
 </div>
 </div>
 </div>
 </div>

 **/
