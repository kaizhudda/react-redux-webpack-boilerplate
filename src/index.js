import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import './styles/styles.scss';
import big from './assets/big.jpg';
import small from './assets/small.jpg';

ReactDOM.render(
  <div className="test">
    Kaiz Hudda
    <img src={big} />
    <img src={small} />
  
  </div>,
  document.querySelector('#root')
);
