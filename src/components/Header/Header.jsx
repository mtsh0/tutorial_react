import React, { Component } from 'react';

class Header extends Component {
  state = { keyword: '' }

  // 値確認
  changeSearchValue = (event) => {
    // console.log(event.target.value);
    // this.setState({keyword: event.target.value});
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className="App">
          <h2>search_youtube</h2>
        </div>
        <div>
          <input onChange={this.changeSearchValue} value={this.state.keyword} />
        </div>
        <p>{this.state.keyword}</p>
      </div>
    );
  }
}

export default Header;