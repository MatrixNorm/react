'use strict';

let React;
let ReactDOM;
let ReactTestUtils;

describe('ex1', () => {
  beforeEach(() => {
    jest.resetModules();
    React = require('react');
    ReactDOM = require('react-dom');
    ReactTestUtils = require('react-dom/test-utils');
  });

  it('counter_increment', () => {
    let incrementCounter = null;

    function App() {
      const [counter, setCounter] = React.useState(0);
      incrementCounter = () => setCounter(prev => prev + 1);
      return <div>{counter}</div>;
    }
    const container = document.createElement('div');
    window.__matrixnorm_container = container;
    ReactDOM.render(<App />, container);
    // console.log('---------------------------------');
    // ReactTestUtils.act(() => {
    //   debugger;
    //   incrementCounter();
    // });
  });
});
