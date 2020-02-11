import React from "react";
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import reducers from "./reducers";

const initalState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = ({ children }) => {
  const store = createStore(
    reducers,
    initalState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return <Provider store={store}>{children}</Provider>;
};

Store.propTypes = {
  children: PropTypes.element.isRequired
};

export default Store;
