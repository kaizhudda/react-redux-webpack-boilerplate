import { TEST_TYPE } from './types';

export const fetchData = () => async dispatch => {
  dispatch({
    type: TEST_TYPE,
    payload: Math.floor(Math.random() * 11)
  });
};
