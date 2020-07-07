import React, {Component} from "react"
import "./Uslugi.css"
import {translate} from "react-switch-lang";
import {Container, Row, Col, Image} from "react-bootstrap";



class Uslugi extends Component {
    state = {
        id:"0"
    }
    render() {
        const {t} = this.props;
        return (
            <Container fluid={true} className={"uslugi"} id={this.props.id}>
                <div className={"pt-3"}>
                    <h1 className="heading-title text-center">{t('header.section3.title')}</h1>
                </div>
                    <Row className="p-3">
                        <Col sm={4}>
                        </Col>
                        <Col sm={4}>
                        </Col>
                        <Col sm={4}>
                        </Col>
                    </Row>
            </Container>
        )
    }
}
export default translate(Uslugi)
