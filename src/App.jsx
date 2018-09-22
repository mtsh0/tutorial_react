import React, { Component } from 'react';
import './App.css';
import SearchInYoutube from 'youtube-api-search';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import List from './components/Video/List/List';
import Video from './components/Video/Video';




const youtube_api_key = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends Component {

  // stateの初期化
  state = {
    videos: [],
    selectedVideo: null
  };

  componentWillMount() {
    console.log("componentWillMount");
  }

  // componentDidMountでAPIリクエストを行う
  componentDidMount() {
    SearchInYoutube({ key: youtube_api_key, term: '猫 きゅうり' }, (data) => {
      this.setState({ videos: data, selectedVideo: data[2] });
    });

    console.log("componentDidMount");
  }

  // 
  shouldComponentUpdate(nextProps, nextState) {
    console.log('更新前のstate:' + this.state.videos);
    console.log('更新後のstate:' + nextState.videos);
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidupdate");
  }

  onVideoClickedHandler = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {
    
    // console.log(this.state.videos);

    return (
      <div className="App">
        <Header />
        <Body>
          <Video video={this.state.selectedVideo} />
          <List
            videos={this.state.videos}
            onVideoClicked = {this.onVideoClickedHandler}  
          />
        </Body>
      </div>
    );
  }
}

export default App;
