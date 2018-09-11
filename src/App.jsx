import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchInYoutube from 'youtube-api-search';
import Header from './components/Header/Header';



const youtube_api_key = 'AIzaSyA9LcEu99UT8OzJ2PcmLaE9K0UXrt1VdIk';

class App extends Component {

  // // stateの初期化
  state = { videos: [] }

  // // componentDidMountでAPIリクエストを行う
  componentDidMount() {
    SearchInYoutube({ key: youtube_api_key, term: '猫 きゅうり' }, (data) => {
      this.setState({ videos: data });
    });
  }

  render() {

    // console.log(this.state.videos);

    return (
      <div>
        <div className="react-icon">
          <img src={logo} className="react-logo" alt="logo" />
        </div>
        <Header />
      </div>
    );
  }
}

export default App;
