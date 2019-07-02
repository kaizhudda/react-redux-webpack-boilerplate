import { hot } from 'react-hot-loader';
import React, { useState } from 'react';
import '../styles/main.scss';
import '../styles/styles.scss';
import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

const App = () => {
  const [count, setCount] = useState(0);

  const onClickButton = () => {
    setCount(count+1)
  }

  return (
    <div className="test">
      Kaiz Hudda
      <button onClick={onClickButton}>Click me</button>
      <div>{count}</div>
      <img src={big} />
      <img src={small} />
    </div>
  );
};

export default hot(module)(App);
