export const actionTypes = {
  FETCH_DATA: {
    REQUEST: 'FETCH_DATA_REQUEST',
    SUCCESS: 'FETCH_DATA_SUCCESS',
    FAILURE: 'FETCH_DATA_FAILURE',
  },
};

export const fetchDataRequest = () => ({
  type: actionTypes.FETCH_DATA.REQUEST,
});

export const fetchDataSuccess = data => ({
  type: actionTypes.FETCH_DATA.SUCCESS,
  data,
});

export const fetchDataFailure = error => ({
  type: actionTypes.FETCH_DATA.FAILURE,
  error,
});
