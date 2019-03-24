# Theodo Good Tests Runnable Examples

<div align="center">
    <a href="https://www.theodo.co.uk">
        <img width="200px" src="./theodo.png" align="center" alt="Theodo">
    </a>
    <h3>Some runnable examples related to the docs at <a href="https://github.com/Theodo-UK/theodo-good-tests">theodo-good-tests</a></h3>
</div>

## JS Examples

### Set up

- Clone this repo: `git clone git@github.com:Theodo-UK/theodo-good-tests-runnable-examples.git`
- `cd js-examples`
- `yarn`

### Running Tests

- To run all tests: `yarn jest`
- To run specific files, jest provides partial search
  - `yarn jest spyon` will run the tests in `4.jest.spyOn.test.js`
  - `yarn jest spyon reset` will run the tests in `4.jest.spyOn.test.js` and `7.jest.mock.reset.clear.test.js`
- To run specific test blocks you can use `-t` for partial search on describe, it, test blocks
  - `yarn jest -t 'functions work'` will run the test in
  ```js
  it('functions work as expected', () => {
      ...
  })
  ```

### Contents

### <a id="mocking-examples"></a> Mocking-Examples

- jest.fn object
  - expect.toHaveBeenCalled, expect.toHaveBeenCalledWith, myMock.calls, myMock.results
  - mockImplementation, mockReturnValue, mockImplementationOnce, mockReturnValueOnce
  - myMock.mockClear, myMock.mockReset
- jest.spyOn
- jest.mock
  - requireActual, jest.doMock, default export

### <a id="redux-examples"></a> Redux-Examples

- Sagas
  - `redux-saga-test-plan` fetch with success and failure
  - specific final state
  - matchers
