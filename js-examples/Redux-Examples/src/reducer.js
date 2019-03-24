import { actionTypes } from './actions';

export const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_DATA.SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case actionTypes.FETCH_DATA.FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
