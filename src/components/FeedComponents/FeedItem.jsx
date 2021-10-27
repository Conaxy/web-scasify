import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Main.css';
import {Col, Container, Image, Row} from "react-bootstrap";
import FinanceGraph from "./FinanceGraph";


const FeedItem = (props) => {
    return (
        <>
            <div className={"feedItem"}>
                <Container>
                    <Row>
                        <Col lg={1} md={1}>
                            <Image src={props.AuthorPFP} className={"authorImage"}/>
                        </Col>
                        <Col lg={10} md={10}>
                            <span>{props.Description}</span>
                        </Col>
                    </Row>
                    {props.SharedFinance ?
                        <FinanceGraph finance={props.SharedFinance}/>
                        : null}
                </Container>
            </div>
        </>
    )
}

export default FeedItem;