import 'isomorphic-fetch';

import { combineReducers } from 'redux';
import { push } from 'react-router-redux';
import { expectSaga, matchers, providers } from 'redux-saga-test-plan';

import dataSaga from '../saga';
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from '../actions';
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

  it('should call FAILURE action if the fetch throws an error', () => {
    const finalState = {
      ...initialState,
      myReducer: {
        ...initialState.myReducer,
        error: '404 error',
      },
    };
    return (
      expectSaga(dataSaga)
        // Setup mock with error
        .provide([
          [
            matchers.call(fetch, 'https://api/endpoint'),
            providers.throwError('404 error'),
          ],
        ])
        .withReducer(combineReducers({ myReducer }), initialState)
        .dispatch(fetchDataRequest())
        .put(fetchDataFailure('404 error'))

        // Check that some stuff does not happen
        .not.put(push('/data-page'))

        // Check final state
        .hasFinalState(finalState)
        .silentRun()
    );
  });
});
