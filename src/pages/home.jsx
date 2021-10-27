import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Main.css';
import Feed from "../components/FeedComponents/Feed";
import {Container, Image, Row} from "react-bootstrap";
import Logo from "../images/LOGO_B1_WHITE.png";
import SideNav from "../components/SideNav/SideNav";
import FinanceBar from "../components/FinanceBar/FinanceBar";

const HomePage = () => {
    return (
        <div className={"page"}>
            <div className={"home"}>
                <Container fluid className={"homeContainer justify-content-center"}>
                    <Image src={Logo} alt={"Scasify Logo"} className={"mainlogo"} width={"200"} height={"200"}/>
                    <Row className={"justify-content-center"}>
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