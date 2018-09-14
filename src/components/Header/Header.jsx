import React, { Component } from 'react';
import logo from '../../logo.svg';

class Header extends Component {
  state = { keyword: '' }

  // 値確認
  changeSearchValue = (event) => {
    // console.log(event.target.value);
    // this.setState({keyword: event.target.value});
  }

  render() {
    return (
      <nav
        className="navbar nabvar-expand navbar-light bg-light mb-3 p-3"
      >
        <h2 className="mb-0">
          <span className="p-2 mr-2">
            <img src={logo} className="react-logo" alt="logo" />
          </span>
          <span className="d-none d-md-inline">Search Youtbe</span>
        </h2>
        <form className="form-group my-2 my-lg-0 ml-sm-2 ">
          <input
            type="text"
            arial-label="YoutubeAPIを利用して検索"
            placeholder="言語とキーワードを入力"
            value={this.state.keyword}
            onChange={this.changeSearchValue}
            className="form-control form-control-lg mr-sm-2"
          />
        </form>
      </nav>
      // <div style={{ textAlign: 'center' }}>
      //   <div className="App">
      //     <h2>search_youtube</h2>
      //   </div>
      //   <div>
      //     <input onChange={this.changeSearchValue} value={this.state.keyword} />
      //   </div>
      //   <p>{this.state.keyword}</p>
      // </div>
    );
  }
}

export default Header;