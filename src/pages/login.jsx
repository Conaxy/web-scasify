import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import '../style/Main.css';
import {Link} from "gatsby";

// markup
const LoginPage = () => {
    return (
        <>
            <Container fluid className={" indexpage text-center"}>
                <Row>
                    <Col lg={8}></Col>
                    <Col lg={4} md={6} sm={6} className={" align-items-center justify-content-center gradient-bg "}>
                        <img src={"https://www.scasify.com/assets/img/conaxywhite.png"}
                             className={"img-fluid w-75 text-center landing-logo"}/>
                        <h1 className={"mb-5"}> Stop waiting, start trading. </h1>
                        <h4>Start trading efficiently, connect with people from all around the world & exchange information.</h4>
                        <div className={"text-center mt-5"}>
                            <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        Email
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                        Password
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default LoginPage
