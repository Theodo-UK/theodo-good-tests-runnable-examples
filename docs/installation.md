# 🛠 Installation

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
