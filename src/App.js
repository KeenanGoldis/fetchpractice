import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      api: "",
    }
  }

  componentWillMount() {
    //Make a request for a user with a given ID
    axios.post('http://posttestserver.com/post.php', 'This is a test sentence')
    .then ((response) => {
      console.log(response);
      this.setState({apiPic: response.data})
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Posting Apis</h2>
          <img src={this.state.apiPic} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          {this.state.apiPic}
        </p>
      </div>
    );
  }
}

export default App;
