import React from 'react';
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
    render() {
        const videoItems = this.props.videos.map((video, i) => {
            return <VideoItem
                key={video.etag}
                video={video}
                onVideoSelect={this.props.onVideoSelect}/>;
        });

        return (
            <div className="ui relaxed middle aligned divided selection list">
                {videoItems}
            </div>
        );
    }
}

export default VideoList;