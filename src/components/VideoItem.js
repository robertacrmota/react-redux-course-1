import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component {

    onClick = (evt) => {
        this.props.onVideoSelect(this.props.video);
    };

    render() {
        const video = this.props.video;

        return (
            <div className="video-item item" onClick={this.onClick}>
                <img className="ui image"
                     alt={video.snippet.title}
                     src={video.snippet.thumbnails.default.url} />
                <div className="content">
                    <div className="header">{video.snippet.title}</div>
                    <div className="description">{video.snippet.title}</div>
                </div>
            </div>
        );
    }
}

export default VideoItem;