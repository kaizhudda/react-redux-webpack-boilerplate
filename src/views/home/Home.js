import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { selectData } from "../../store/selectors";
import { fetchData } from "../../store/actions/testAction";

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
        <meta
          charSet="utf-8"
          name="description"
          content="Welcome to React / Redux Lightweight boilerplate!"
        />
      </Helmet>
      Home Page
      <button type="button" onClick={onClickData}>
        Random Number
      </button>
      <p>{data}</p>
    </div>
  );
};

Home.propTypes = {};

export default Home;
