import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import '../style/Main.css';
import {Image} from "react-bootstrap";
import {Button} from "bootstrap";
import {Link} from "gatsby";

// markup
const IndexPage = () => {
    return (
        <>
            <Container fluid className={" indexpage"}>
                <Row>
                    <Col lg={9}></Col>
                    <Col lg={3} md={6} sm={6} className={" align-items-center justify-content-center gradient-bg "}>
                        <img src={"https://www.scasify.com/assets/img/conaxywhite.png"}
                             className={"img-fluid w-75 text-center landing-logo"}/>
                        <h1> Stop waiting, start trading. </h1>
                        <h2>Register now, @ scasify.</h2>
                        <div className={"text-center mt-5"}>
                            <Link className={"rounded-btn text-center"} to={"/login"}> Register </Link>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default IndexPage
