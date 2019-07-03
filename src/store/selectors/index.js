import { createSelector } from 'reselect';

const getData = state => state.data;

export const selectData = createSelector(
  [getData],
  data => data
);
