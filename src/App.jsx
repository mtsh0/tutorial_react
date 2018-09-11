import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchInYoutube from 'youtube-api-search';
import Header from './components/Header/Header';



const youtube_api_key = 'AIzaSyA9LcEu99UT8OzJ2PcmLaE9K0UXrt1VdIk';

// SearchInYoutube({key: youtube_api_key, term: '猫 きゅうり'}, (data)=>{
//   console.log(data);
// });

class App extends Component {

  // stateの初期化
  state = { videos: [] }

  componentWillMount() {
    console.log("componentWillMount");
  }

  // componentDidMountでAPIリクエストを行う
  componentDidMount() {
    SearchInYoutube({ key: youtube_api_key, term: '猫 きゅうり' }, (data) => {
      this.setState({ videos: data });
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



  render() {

    console.log(this.state.videos);

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
