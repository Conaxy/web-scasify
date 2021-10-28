import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Main.css';
import {Col} from "react-bootstrap";
import SideNavItem from "./SideNavItem";
import HomeIcon from "../../images/Home blue.png"
import DiscoverIcon from "../../images/Discover blue.png"
import ForYouIcon from "../../images/Icon_feather-message-square.png"
import NewsIcon from "../../images/News blue.png"

const SideNav = () => {
    return (
        <>
            <Col lg={2} className={"sideNav"}>
                <ul className={"list-unstyled"}>
                    <SideNavItem Title={"Home"} URL={"/home"} IconURL={HomeIcon}/>
                    <SideNavItem Title={"Discover"} URL={"/discover"} IconURL={DiscoverIcon}/>
                    <SideNavItem Title={"News"} URL={"/news"} IconURL={NewsIcon}/>
                    <SideNavItem Title={"For you"} URL={"/fyp"} IconURL={ForYouIcon}/>
                </ul>
            </Col>
        </>
    )
}

export default SideNav;