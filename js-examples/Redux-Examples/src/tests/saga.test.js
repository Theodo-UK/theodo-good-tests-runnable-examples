import 'isomorphic-fetch';

import { combineReducers } from 'redux';
import { push } from 'react-router-redux';
import { expectSaga, matchers } from 'redux-saga-test-plan';

import dataSaga from '../saga';
import { fetchDataRequest, fetchDataSuccess } from '../actions';
import { myReducer, initialState as initialMyReducerState } from '../reducer';

describe('dataSaga', () => {
  const initialState = {
    myReducer: initialMyReducerState,
  };
  it('should retrieve data from the server and send a SUCCESS action', () => {
    const finalState = {
      ...initialState,
      myReducer: {
        ...initialState.myReducer,
        data: ['wow some api'],
      },
    };

    return (
      expectSaga(dataSaga)
        // Setup mocks
        .provide([
          [
            matchers.call(fetch, 'https://api/endpoint'),
            {
              json: () => ({
                data: ['wow some api'],
              }),
            },
          ],
        ])
        // Setup reducer with initial state
        .withReducer(combineReducers({ myReducer }), initialState)
        // Dispatch initial action
        .dispatch(fetchDataRequest())
        // Check that expected stuff has happened (order doesn't matter)
        .put(fetchDataSuccess(['wow some api']))
        .put(push('/data-page'))
        // Check final state
        .hasFinalState(finalState)
        .silentRun()
    );
  });
});
