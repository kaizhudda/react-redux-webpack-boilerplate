import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Home = ({ fetchData, data }) => {
  const onClickData = () => {
    fetchData('Button clicked');
  };

  return (
    <div className="Home">
      <Helmet>
        <title>Home</title>
        <meta charSet="utf-8" name="description" content="Welcome to React / Redux Lightweight boilerplate!" />
      </Helmet>
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
