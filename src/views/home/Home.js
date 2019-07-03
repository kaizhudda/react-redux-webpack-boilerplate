import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ fetchData, data }) => {
  const onClickData = () => {
    fetchData('Button clicked');
  };

  return (
    <div className="Home">
      Home Page
      <button type="button" onClick={onClickData}>Get Data</button>
      <p>{data}</p>
    </div>
  );
};

Home.propTypes = {
  fetchData: PropTypes.func,
  data: PropTypes.string
};

export default Home;
