import React, {Component} from "react"
import "./Kontact.css"
import {translate} from "react-switch-lang";
import {Container, Row, Col, Image} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Kontact extends Component {
    state = {
        id:"0"
    }
    render() {
        const {t} = this.props;
        return (
            <Container fluid={true} className={"kontact"} id={this.props.id}>
                <div className={"pt-3"}>
                    <h1 className="text-center">{t('header.section6.title')}</h1>
                </div>
                    <Row className="p-3 row_brown">
                        <Col sm={4}>


                        </Col>
                        <Col sm={8}>

                        </Col>
                    </Row>

            </Container>
        )
    }
}
export default translate(Kontact)
