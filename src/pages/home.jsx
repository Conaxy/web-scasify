import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Main.css';
import Feed from "../components/FeedComponents/Feed";
import {Container, Row} from "react-bootstrap";
import SideNav from "../components/SideNav/SideNav";

const HomePage = () => {
    return (
        <div className={"page"}>
            <div className={"home"}>
                <Container fluid className={"homeContainer"}>
                    <Row>
                        <SideNav/>
                        <Feed/>
                        <FinanceBar />
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default HomePage