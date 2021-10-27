import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Main.css';
import {Col} from "react-bootstrap";
import SideNavItem from "./SideNavItem";

const SideNav = () => {
    return (
        <>
            <Col lg={2} className={"sideNav"}>
                <ul className={"list-unstyled"}>
                    <SideNavItem Title={"Home"} URL={"/home"} IconURL={""}/>
                    <SideNavItem Title={"Discover"} URL={"/discover"} IconURL={""}/>
                    <SideNavItem Title={"News"} URL={"/news"} IconURL={""}/>
                    <SideNavItem Title={"For you"} URL={"/fyp"} IconURL={""}/>
                </ul>
            </Col>
        </>
    )
}

export default SideNav;