import React from 'react';
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar"

function VideoCard({ link, title , channel,views ,timestamp, channelImage}) {
    return (
        <div className="VideoCard">
            <iframe className ="VideoCard__thumbnail" src={link} frameborder="0" allowfullscreen=""></iframe>
            <div className="VideoCard__info">
                <Avatar className="VideoCard__avatar" alt={channel} src={channelImage} />
                <div className="VideoCard__text">
                    <h4>
                        {title}
                    </h4>
                    <p>{channel}</p>
                    <p>
                        {views} views<br/>
                        {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
