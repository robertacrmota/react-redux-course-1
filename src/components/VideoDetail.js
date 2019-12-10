import React from 'react';
import Loader from "./Loader";

class VideoDetail extends React.Component {

    render() {
        if (this.props.video)
            return(
                <div>
                    <div className="ui embed segment">
                        <iframe title="video player" src={"https://www.youtube.com/embed/" + this.props.video.id.videoId}></iframe>
                    </div>
                    <div className="ui segment">
                        <div className="header">
                            <p><b>{this.props.video.snippet.title}</b></p>
                            <em>Published at {this.props.video.snippet.publishedAt}</em>
                        </div>
                        <br/>
                        <div className="description">
                            <p>{this.props.video.snippet.description}</p>
                        </div>
                    </div>
                </div>
            );
        else
            return (<Loader text="Loading search results..."/>);
    }
}

export default VideoDetail;