import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Main.css';
import {Image} from "react-bootstrap";
import FinanceGraph from "./FinanceGraph";


const FeedItem = (props) => {
    return (
        <>
            <div className={"feedItem"}>
                <Image src={this.props.Author.ProfilePicture} className={"authorImage"}/>
                <p>{this.props.Description}</p>
                {this.props.SharedFinance ?
                    <FinanceGraph finance={this.props.SharedFinance}/>
                    : null}
            </div>
        </>
    )
}

export default FeedItem;