import { TEST_TYPE } from './types';

export const fetchData = value => async dispatch => {
  dispatch({
    type: TEST_TYPE,
    payload: value
  });
};
