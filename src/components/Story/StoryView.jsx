import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Main.css';
import {Col, Container, Image} from "react-bootstrap";

const StoryView = (props) => {
    /* Will be placed directly over the whole page as seen on platforms like Instagram. Story's require more features tho, @stefan */
    return (
        <>
            <Container>
                <Col lg={6} md={6}>
                    <div className={"storyItem_view"}>
                        <div className={"storyItem_view_information"}>
                            <Image src={props.AuthorPFP} className={"authorImage"}/>
                            <span className={"font-weight-bold storyAuthor"}>{props.Author}</span>
                        </div>
                        {props.StoryImage ?
                            <Image src={props.StoryImage} className={"storyview_image"} />
                        : null}
                    </div>
                </Col>
            </Container>
        </>
    )
}

export default StoryView;