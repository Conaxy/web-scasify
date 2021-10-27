import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Main.css';
import {useEffect, useState} from "react";
import FeedItem from "./FeedItem";

const Feed = () => {
    const [feedItems, setFeedItems] = useState();

    useEffect(() => {
        setFeedItems(null);
    }, [])

    return (
        <>
            <FeedItem Description={"Lorem Ipsum is a simply dummy text. This example of a feed item is just for demonstration usages, scasify ftw."} Author={"6lyxt"} SharedFinance={"Bitcoin"}/>
        </>
    )
}

export default Feed;