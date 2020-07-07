import React, {Component} from "react"
import "./Home.css"
import {translate} from "react-switch-lang";
import {Container} from "react-bootstrap";


class Home extends Component {
    render() {
        return (
            <Container>
                Home
            </Container>

        )
    }
}
export default translate(Home)
