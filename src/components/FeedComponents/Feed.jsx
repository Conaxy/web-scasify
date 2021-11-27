import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Main.css';
import {useEffect, useState} from "react";
import FeedItem from "./FeedItem";
import {Col, Container, Row} from "react-bootstrap";
import StoryItem from "../Story/StoryItem";

const Feed = () => {
    const [feedItems, setFeedItems] = useState();

    useEffect(() => {
        setFeedItems(null);
    }, [])

    return (
        <>
            <Col lg={6} md={6} sm={12}>
                <Row className={"storyboard"}>
                    <StoryItem Author={"Paylo"}
                               AuthorPFP={"https://cdn.discordapp.com/avatars/501771915757879296/f5c6906fe5e426dc49543a555fe86b36.webp?size=48"}/>
                </Row>
                <div className={"feed"}>
                    <div className={"fixed-header d-inline- w-100 font-weight-bolder"}>
                        <span>Recently posted</span>
                        <span className={"float-right"}>Filter</span>
                    </div>
                    <div className={"feedItems"}>
                        <FeedItem
                            Description={"Lorem Ipsum is a simply dummy text. This example of a feed item is just for demonstration usages, scasify ftw."}
                            AuthorPFP={"https://cdn.discordapp.com/avatars/263003918617804800/a_4e5d11b58e30573815059caab5971826.gif?size=48"}
                            Author={"6lyxt"} CreatedAt={"28. Oktober 2021"}/>
                        <FeedItem Description={"Johannes ist der beste!"}
                                  AuthorPFP={"https://cdn.discordapp.com/avatars/516660579851698178/c90a412ff86e584ff3bbb1c9758f1d1b.webp?size=48"}
                                  Author={"Cedric"} SharedFinance={"Bitcoin"} CreatedAt={"28. Oktober 2021"}/>
                        <FeedItem Description={"Johannes ist der beste!"}
                                  AuthorPFP={"https://cdn.discordapp.com/avatars/516660579851698178/c90a412ff86e584ff3bbb1c9758f1d1b.webp?size=48"}
                                  Author={"Cedric"} SharedFinance={"Bitcoin"} CreatedAt={"28. Oktober 2021"}/>
                        <FeedItem Description={"Johannes ist der beste!"}
                                  AuthorPFP={"https://cdn.discordapp.com/avatars/516660579851698178/c90a412ff86e584ff3bbb1c9758f1d1b.webp?size=48"}
                                  Author={"Cedric"} SharedFinance={"Bitcoin"} CreatedAt={"28. Oktober 2021"}/>
                        <FeedItem Description={"Johannes ist der beste!"}
                                  AuthorPFP={"https://cdn.discordapp.com/avatars/516660579851698178/c90a412ff86e584ff3bbb1c9758f1d1b.webp?size=48"}
                                  Author={"Cedric"} SharedFinance={"Bitcoin"} CreatedAt={"28. Oktober 2021"}/>
                        <FeedItem Description={"Johannes ist der beste!"}
                                  AuthorPFP={"https://cdn.discordapp.com/avatars/252834134811082753/72a6271d53c83437b70c24eacc2e1ee6.webp?size=48"}
                                  Author={"Cedric"} SharedFinance={"Bitcoin"} CreatedAt={"28. Oktober 2021"}/>
                    </div>
                </div>

            </Col>
        </>
    )
}

export default Feed;