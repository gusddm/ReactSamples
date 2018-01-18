import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Match, Miss } from 'react-router';
import './css/App.css';
//import ReactAnagram from './Anagram.jsx';
//import axios from 'axios'


/*
  ReactDOM.render(
    <ReactAnagram />,
    document.getElementById("anagram")
  );
*/  


ReactDOM.render(<App />, document.getElementById('notebook'));