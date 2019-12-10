import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = {youtube_videos: [], video_selected: null};

    // default search
    componentDidMount() {
        this.onSearchSubmit('d3.js');
    }

    //search-bar child callback
    onSearchSubmit = async (search_input) => {
        // request youtube api data
        let response = await youtube.get('/search',{params: {q: search_input}});

        //console.log(response.data.items);
        this.setState({youtube_videos: response.data.items, video_selected: response.data.items[0]});
    };

    // video-item children callback
    onVideoSelect = (video) => {
        console.log(video);
        // display featured selected video
        this.setState({video_selected: video});
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <div className="ui grid">
                    <div className={"twelve wide column"}>
                         <VideoDetail video={this.state.video_selected}/>
                    </div>
                    <div className={"four wide column"}>
                        <VideoList videos={this.state.youtube_videos} onVideoSelect={this.onVideoSelect}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;