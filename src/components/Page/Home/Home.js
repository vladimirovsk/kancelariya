import React, {Component} from "react"
import "./Home.css"
import {translate} from "react-switch-lang";
import {Container} from "react-bootstrap";

import HD from "./header.png"

class Home extends Component {
    state = {
        id:"section0"
    }

    render() {
        //const {t} = this.props;
        return (
            <Container fluid={true} className={"home"} id={this.props.id}>
                        <img className="img_title" src={HD} alt=""/>
            </Container>

        )
    }
}
export default translate(Home)
