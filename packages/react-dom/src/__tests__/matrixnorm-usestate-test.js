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
      console.log('App');
      const [counter, setCounter] = React.useState(0);
      incrementCounter = () => {
        debugger;
        setCounter(prev => prev + 1);
      };
      return <div>{counter}</div>;
    }
    const container = document.createElement('div');
    window.__matrixnorm_container = container;
    ReactDOM.render(<App />, container);
    console.log('---------------------------------');
    ReactTestUtils.act(() => {
      incrementCounter();
    });
  });
  /*
    calls ReactFiberWorkLoop.batchedEventUpdates instead of
    ReactFiberWorkLoop.batchedUpdates like in `counter_increment`
  */
  it('counter_increment_onclick', () => {
    const divRef = React.createRef();

    function App() {
      const [counter, setCounter] = React.useState(0);

      function incrementCounter() {
        setCounter(prev => prev + 1);
      }

      return (
        <div onClick={incrementCounter} ref={divRef}>
          {counter}
        </div>
      );
    }
    const container = document.createElement('div');
    window.__matrixnorm_container = container;
    ReactDOM.render(<App />, container);
    console.log('---------------------------------');
    // Dispatch a click event
    debugger;
    const event = document.createEvent('Event');
    event.initEvent('click', true, true);
    divRef.current.dispatchEvent(event);
  });

  it('counter_increment_double_setstate', () => {
    let incrementCounter = null;

    function App() {
      console.log('App');
      const [counter, setCounter] = React.useState(0);
      incrementCounter = () => {
        debugger;
        setCounter(prev => prev + 1);
        setCounter(prev => prev + 1);
      };
      return <div>{counter}</div>;
    }
    const container = document.createElement('div');
    window.__matrixnorm_container = container;
    ReactDOM.render(<App />, container);
    console.log('---------------------------------');
    ReactTestUtils.act(() => {
      incrementCounter();
    });
  });
});
