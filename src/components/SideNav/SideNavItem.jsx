import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Main.css';
import Link from "gatsby-link";
import {Image} from "react-bootstrap";

const SideNavItem = (props) => {
    return (
        <li>
            <Link to={props.URL}>
                <Image src={props.IconURL} className={"sideNavIcon"}/>
                <span>{props.Title}</span>
            </Link>
        </li>
    )
}

export default SideNavItem;