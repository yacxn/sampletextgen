import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Output from './Components/Output';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      paras: 4,
      html: true,
      text:''
    }
  }

  componentWillMount(){
    this.getSampleText();
  }

getSampleText(){
  axios.get('http://hipsterjesus.com/api?paras='+this.state.paras+'&html='+this.state.html)
  .then((response) => {
    this.setState({text: response.data.text}, function(){
      console.log(this.state);
    });
  })
  .catch((err) => {
    console.log(err);
  });
}


  render() {
    return (
      <div className="App">
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
