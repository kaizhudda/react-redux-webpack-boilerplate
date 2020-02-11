import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { selectData } from '../../store/selectors';
import { fetchData } from '../../store/actions/testAction';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const onClickData = () => {
    dispatch(fetchData());
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
