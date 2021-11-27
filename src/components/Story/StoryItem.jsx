import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Main.css';
import {Image} from "react-bootstrap";
import {useEffect} from "react";
import Link from "gatsby-link";

const StoryItem = (props) => {
    function getAuthorStory() {
        return props.Author + "/story";
        //placeholder
    }

    return (
        <>
            <div className={"storyItem d-flex flex-column"}>
                <Link to={"/" + getAuthorStory()} className={"d-flex flex-column"}>
                    <Image src={props.AuthorPFP} className={"authorImage"}/>
                    <span className={"font-weight-bold storyAuthor"}>{props.Author}</span>
                </Link>
            </div>
        </>
    )
}

export default StoryItem;