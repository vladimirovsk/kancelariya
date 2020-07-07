import React, {Component, useEffect, useState} from "react"
import "./Kontact.css"
import is from 'is_js';
import {translate} from "react-switch-lang";
import {Container, Row, Col, Form, Button, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Icon} from '@iconify/react';
import facebookIcon from '@iconify/icons-il/facebook';
import mapMarkedAlt from '@iconify/icons-fa-solid/map-marker-alt';
import oldPhone from '@iconify/icons-entypo/old-phone';
import emailjs from 'emailjs-com';
import stacan from './STACAN.jpg';
import office from './OFFICE.jpg';
//import {Check} from "@material-ui/icons";

// npm install --save-dev @iconify/react @iconify/icons-entypo
//User ID: user_Fae8JGudb10fQXLUaSFBd
//Access token: c91896dcdecf2987da6325db963daac3
//http://kancelaria-burkiewicz-sliwa.pl
//https://dashboard.emailjs.com/statistics
//login vladimirovsk@gmail.com
// serwer2058452.home.pl
//
class Kontact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stacan:"url("+stacan+")",
            office:"url("+office+")",
            id: "0",
            user_name:'',
            user_email:'',
            contact_number:'',
            message: '',
            count: 0,
            btnEnabled:false,
            btnSending:true,
            sendEmail:true,
            validEmail:false,
            validMessage:false,
            show: false,
            person:true,
            validation: {
                maxLenght:500

            }
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
    }

    validateControl = (value, validation) => {

        let isValid = false;

        if (validation==='user_email') {

            if (value.length >0) {
                isValid = is.email(value);
            }else {
                isValid=false;
            }
            
            this.setState({validEmail: isValid})
        }

        if (validation === 'message'){
            isValid = value.length >= 10
            this.setState({validMessage: isValid})}
        if (this.state.validEmail && this.state.validMessage){
            isValid = true }
        else{
            isValid = false
        }

        return isValid;

    }

    onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        let btnEnabled = false;

        if (this.validateControl(value, name)){
            btnEnabled=true;
        }else
            btnEnabled=false;

        this.setState({
            btnEnabled
        })
    }

    handleNameChange(event) {
        this.onChangeHandler(event);
        this.setState({user_name: event.target.value});
    }

    handlePhoneChange(event){
        this.setState({contact_number: event.target.value});
    }

    handleEmailChange(event) {
        this.onChangeHandler(event);
        this.setState({user_email: event.target.value});
    }

    handleTextareaChange(event ) {
        this.onChangeHandler(event, 'message');
        this.setState({message: event.target.value, count: event.target.value.length});
    }

    componentDidUpdate(prevProps, prevState) {
        //isBtnSending = this.state.btnSending
    }

    render() {

        let state = this.state;
        //let isValid = this.state.btnEnabled
        let isBtnSending = this.state.btnSending
        const {t} = this.props


        function networkRequest() {
            return new Promise((resolve) => {
                //setTimeout(resolve, 2000));
            const template_params1 = {
                "reply_to": state.user_email,
                "from_name": state.user_name,
                "contact_number": state.contact_number,
                "to_name": "kancelatiya",
                "message_html": state.message
            }
            const service_id = "default_service";
            const template_id = "template_U1BSvr3p";
            const iser_id ="user_Fae8JGudb10fQXLUaSFBd";

             emailjs.send(service_id, template_id, template_params1, iser_id)
                .then((result) => {
                    setTimeout(resolve, 100);
                    console.log('Send: ',result.text);
                }, (error) => {
                    setTimeout(resolve, 100);
                    console.log('Error: ',error.text);
                });
        });
        }

        const handleClose = async () => {
            await this.setState({show:false});
            //this.setState({person: false});
            //this.setState({sendEmail: false});
            //this.setState({btnSending:false});
        }
        const handleShow = () => {
            this.setState({btnSending:true});
            this.setState({show:true});
            this.setState({person: true});
            this.setState({sendEmail: true});

        }
        /*     Отключил потому как ненужно контролировать доступноть по чек боксам
        const btnSendingDostup = async () => {

            if ((this.state.person === true) && (this.state.sendEmail===true )){
                await this.setState({btnSending:true})
            }else
            {
                 await this.setState({btnSending:false})
            }
        }

         const clickPerson  =  async (event)  =>  {
            await this.setState({person: event.target.checked})
            //console.log(this.state.person, this.state.sendEmail)
            await btnSendingDostup();

        }

        const clickEmail = async (event) => {
            await this.setState({sendEmail: event.target.checked})
            await btnSendingDostup();
        }
        */


        function LoadingButton() {
            const [isLoading, setLoading] = useState(false);

            useEffect(() => {
                if (isLoading) {
                    networkRequest().then(() => {
                        setLoading(false);
                        handleClose();
                    });
                }
            }, [isLoading]);

            const handleClick =  async () => {
                 setLoading(true);
            }



            //!isValid ||
            return (
                <div>
                    <div className={"text-white"}>{}</div>
                    <div className={"text-white"}>{isLoading}</div>
                    <Button
                        //variant="primary"
                        style={{background:'darkgoldenrod', color:'white', border:'none'}}
                        disabled={isLoading || !isBtnSending}
                        onClick={!isLoading  ? handleClick : null}
                    >
                        {isLoading ? 'Wysyłka…' : ' Wyślij wiadomość'}
                    </Button>
                </div>
            );
        }
        //disabled={!this.state.btnEnabled}
        return (
            <Container fluid={true} className={"kontact"}>
            <Container fluid={'sm'} className={"kontact"} id={this.props.id}>
                <div className={"pt-3"}>
                    <h1 className="text-center heading-title">{t('header.section6.title')}</h1>
                </div>
                    <Row className="p-3 row_brown">
                        <Col lg={3} style={{backgroundImage: this.state.office,
                            backgroundRepeat:'no-repeat', backgroundSize:"cover"}}>
                        </Col>
                        <Col lg={6} className={"text-right"}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group className={"mb-3"} controlId="formBasicEmail">
                                    <Form.Control className={"mb-3"} name="user_name" type="text" placeholder="Imię" value={this.state.name} onChange={this.handleNameChange}/>
                                    <Form.Control className={"mb-3"} name="user_email" type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange} />
                                    <Form.Control className={"mb-3"} name="contact_number" type="text" placeholder="Telefon"  value={this.state.phone} onChange={this.handlePhoneChange}/>
                                    <Form.Control  style={{resize: 'none'}} maxLength={this.state.validation.maxLenght} name="message" as="textarea" rows="5" placeholder="Treść wiadomości" value={this.state.textarea} onChange={this.handleTextareaChange}/>
                                    <small>{this.state.count} z 500</small>
                                </Form.Group>
                                <Button onClick={handleShow}
                                        disabled={!this.state.btnEnabled}
                                >Wyślij wiadomość</Button>

                                <Modal
                                    backdrop="static"
                                    keyboard={false}
                                    show={this.state.show}
                                    onHide={handleClose}
                                    size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                    style={{opacity: '.9'}}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>Uwaga</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className={"p-2 text-justify"} style={{fontSize: '1rem'}}>
                                            Administratorem danych osobowych jest Bernadetta Burkiewicz-Śliwa Kancelaria Adwokacka, ul. Topolowa 31/1, 31-506 Kraków,
                                            NIP 9451975926, REGON 122886880. Dane wpisane w formularzu przetwarzane będą w celu udzielenia odpowiedzi na przesłane
                                            zapytanie oraz realizacji zleconej usługi. Skorzystanie z niniejszego formularza oznacza akceptację postanowień
                                            zawartych w Polityce Prywatności.
                                            <p>
                                            <a href={"https://drive.google.com/file/d/1mpqDCJEyOU3N0s0frbsE786UdaCPHVaM/view?usp=sharing"} alt={"Polityka Prywatności"} target="_blank" rel="noopener noreferrer">Polityka Prywatności</a>
                                            </p>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose} style={{border: 'none'}}>
                                            Close
                                        </Button>
                                        <LoadingButton />
                                    </Modal.Footer>
                                </Modal>
                            </Form>
                        </Col>
                        <Col lg={3} style={{backgroundImage: this.state.stacan,
                            backgroundRepeat:'no-repeat', backgroundSize:"cover"}}>
                        </Col>
                    </Row>

                    <Row className={"mt-2"}>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <a href={"https://www.facebook.com/Bernadetta-Burkiewicz-Śliwa-kancelaria-adwokacka-108406294196193"} className={"mr-2 text-right"}>
                                <Icon icon={facebookIcon} style={{color:"darkgoldenrod", fontSize:42}} />
                            </a>
                            <a href="mailto:sekretariat@kancelaria-b-s.pl" style={{color:"darkgoldenrod", fontSize:'19px'}}>sekretariat@kancelaria-b-s.pl</a><br />
                        </Col>
                        <Col lg={1}>
                            <Icon className={"mr-2"} icon={mapMarkedAlt} style={{fontSize: '42px', display: 'block', position: 'absolute'}}/>
                        </Col>
                        <Col lg={3}>
                            <span style={{color: "darkgoldenrod"}}>
                                <p>31-506 Kraków, ul. Topolowa 31/1</p>
                                <p>Pon-Pt - 08:00-19:00</p>
                            </span>

                        </Col>
                        <Col lg={1}>
                            <Icon icon={oldPhone} style={{fontSize:42}}/>
                        </Col>
                        <Col lg={3}>
                            <span style={{fontSize: "20 px"}}>tel. 12 312 53 22<br /></span>
                        </Col>
                    </Row>
                    <Row>
                        <iframe title="MapKancelaria" SameSite='None'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.0636974490676!2d19.953105716000376!3d50.06636872284548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b185f36d53b%3A0x96d15ce836ab9dd3!2sTopolowa%2031%2C%2031-506%20Krak%C3%B3w%2C%20Polska!5e0!3m2!1spl!2sua!4v1592586226867!5m2!1spl!2sua"
                            width="100%" height="300px" frameBorder="0" style={{border:0}} allowFullScreen=""
                            aria-hidden="false" tabIndex="0"></iframe>
                    </Row>
            </Container>
            </Container>
        )
    }

}

export default translate(Kontact)

/*
        <Toast show={} onClose={handleClose}>
            <Toast.Header>
                <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                />
                <strong className="mr-auto">Bootstrap</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
*
*/
