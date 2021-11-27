import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Main.css';
import {Image} from "react-bootstrap";

const StoryItem = (props) => {
    return (
        <>
            <div className={"storyItem d-flex flex-column"}>
                <Image src={props.AuthorPFP} className={"authorImage"}/>
                <span className={"font-weight-bold storyAuthor"}>{props.Author}</span>
            </div>
        </>
    )
}

export default StoryItem;