import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Main.css';
import {useEffect, useState} from "react";
import FeedItem from "./FeedItem";
import {Col} from "react-bootstrap";

const Feed = () => {
    const [feedItems, setFeedItems] = useState();

    useEffect(() => {
        setFeedItems(null);
    }, [])

    return (
        <>
            <Col lg={6} md={6} sm={12} className={"feed"}>
                <div className={"fixed-header d-inline-block"}>
                    <span>Recently posted</span>
                    <span className={"text-right"}>Filter</span>
                </div>
                <FeedItem Description={"Lorem Ipsum is a simply dummy text. This example of a feed item is just for demonstration usages, scasify ftw."} AuthorPFP={"https://cdn.discordapp.com/avatars/263003918617804800/a_4e5d11b58e30573815059caab5971826.gif?size=128"} Author={"6lyxt"} SharedFinance={"Bitcoin"}/>
            </Col>
        </>
    )
}

export default Feed;