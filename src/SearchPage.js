import React from 'react';
import "./SearchPage.css";
/*import TuneOutlinedIcon from "@material-ui/icons/TuneOutlinedIcon";*/
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';



function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
            </div>
            <hr/>
            <ChannelRow
            image="https://images-na.ssl-images-amazon.com/images/I/41Jx1xOhNhL.jpg"
            channel="Alan Walker"
            verified
            subs= "37.2M"
            noOfVideos={237}
            description="Music Artist"
            />
            <hr/>

            <VideoRow
             link = "https://www.youtube.com/embed/60ItHLz5WEA"
            channelImage="https://images-na.ssl-images-amazon.com/images/I/41Jx1xOhNhL.jpg"
            channel="Alan Walker"
            views= "2,892,054,442"
            timestamp="Dec 4, 2015"/>
        </div>
    )
}

export default SearchPage
