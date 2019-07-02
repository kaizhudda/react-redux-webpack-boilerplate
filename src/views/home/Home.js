import React from 'react';

const Home = ({ fetchData, data }) => {
  const onClickData = () => {
    fetchData('Button clicked');
  };

  return (
    <div className="Home">
      Home Page
      <button onClick={onClickData}>Get Data</button>
      <p>{data}</p>
    </div>
  );
};

export default Home;
