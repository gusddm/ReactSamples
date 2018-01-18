import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
//import axios from 'axios'

  //ReactDOM.render(<App />, document.getElementById('root'));

  //build an array with all the combinations of a word
  let anagram = function(word = "") {
    let combinations = new Set();
    if(word.length === 0) {      
      combinations.add("");
      return combinations;
    }
    let prefix   = word.charAt(0);
    let reminder = word.substring(1);    
    let partial = anagram(reminder);
    partial.forEach(element => {
      for(let x = 0; x <= element.length; x++) {
        combinations.add(element.substring(0, x) + prefix + element.substring(x));
      } 
    });
    return combinations;
  }

  function Paragraph(props) {
    return (<p>{props.value}</p>);
  }

  export default class ReactAnagram extends React.Component {
    constructor(props) {
      super(props);
      this.state = { word: "" };
      
    }
    handleClick = () => {
       this.setState(() => ({
         word: this.wordInput.value
       }));
    }
    render() {
      const rows = [];
      return (
        <div class="demo">
          Enter your word          
          <input type="text" ref={(input) => { this.wordInput = input; }} />
          <input
              type="button"
              value="Anagram Generator"
              onClick={this.handleClick}
            />
          {anagram(this.state.word).forEach((data) => { rows.push(<Paragraph key={data} value={data} />) } ) }
          {rows}
        </div>
      );
    }
  } 

