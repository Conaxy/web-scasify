import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Main.css';
import Link from "gatsby-link";
import {Image} from "react-bootstrap";

const SideNavItem = (props) => {
    return (
        <li className={"sideNavItem"}>
            <Link to={props.URL}>
                <Image src={props.IconURL} className={"sideNavIcon"} width={25} height={25}/>
                <span className={"navText"}>{props.Title}</span>
            </Link>
        </li>
    )
}

export default SideNavItem;