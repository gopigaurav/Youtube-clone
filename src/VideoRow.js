import React from 'react';
import './VideoRow.css'

function VideoRow({link,channel,views,timestamp}) {
    return (
        <div className="videorow">
          <iframe className ="VideoCard__thumbnail" src={link} frameborder="0" allowfullscreen=""></iframe>
        <div className="videorow__des">
            <h4>
            Faded - Alan Walker
            </h4>
            <p>Alan Walker</p>
                    <p>
                        {views} views<br/>
                        {timestamp}
                    </p>
        </div>
        
        
        </div>

    )
}

export default VideoRow
