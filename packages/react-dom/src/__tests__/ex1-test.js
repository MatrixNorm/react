'use strict';

let React;
let ReactDOM;

describe('ex1', () => {
  beforeEach(() => {
    jest.resetModules();
    React = require('react');
    ReactDOM = require('react-dom');
  });

  it('test1', () => {
    function App() {
      return <div>hi</div>;
    }
    const container = document.createElement('div');
    ReactDOM.render(<App />, container);
  });

  it('test2', () => {
    function App() {
      return (
        <div>
          <p>123</p>
          <span>45</span>
        </div>
      );
    }
    const container = document.createElement('div');
    ReactDOM.render(<App />, container);
  });

  it('test3', () => {
    const buttonRef = React.createRef();

    function App() {
      return (
        <div>
          <Sub />
          <Sub2 />
        </div>
      );
    }

    function Sub() {
      const [counter, setCounter] = React.useState(0);
      function increment() {
        setCounter(prev => prev + 1);
      }
      return (
        <button onClick={increment} ref={buttonRef}>
          {counter}
        </button>
      );
    }

    function Sub2() {
      return (
        <div>
          <Sub3 />
        </div>
      );
    }

    function Sub3() {
      return (
        <div>
          <span>petrushka</span>
        </div>
      );
    }

    const container = document.createElement('div');
    ReactDOM.render(<App />, container);

    console.log('---------------------------------');
    // Dispatch a click event
    const event = document.createEvent('Event');
    event.initEvent('click', true, true);
    buttonRef.current.dispatchEvent(event);
  });
});
