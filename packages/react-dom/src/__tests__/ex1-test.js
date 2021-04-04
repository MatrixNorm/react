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

  it('hello_world', () => {
    function App() {
      return <div>hi</div>;
    }
    const container = document.createElement('div');
    window.__matrixnorm_container = container;
    ReactDOM.render(<App />, container);
    //console.log(window.__matrixnorm_container.innerHTML);
  });

  it('double_render_same-tag', () => {
    const container = document.createElement('div');
    window.__matrixnorm_container = container;
    ReactDOM.render(<div className="old">hi</div>, container);
    console.log('---------------------');
    ReactDOM.render(<div className="new">hi</div>, container);
  });

  it('double_render_different_tag', () => {
    const container = document.createElement('div');
    window.__matrixnorm_container = container;
    ReactDOM.render(<div>hi</div>, container);
    console.log('---------------------');
    ReactDOM.render(<span>hi</span>, container);
  });

  it('double_render_different_function_component', () => {
    function App1() {
      return <div>hi</div>;
    }
    function App2() {
      return <div>hi</div>;
    }
    const container = document.createElement('div');
    window.__matrixnorm_container = container;
    ReactDOM.render(<App1 />, container);
    console.log('---------------------');
    ReactDOM.render(<App2 />, container);
    //console.log(window.__matrixnorm_container.innerHTML);
  });

  // it('counter_increment', () => {
  //   const divRef = React.createRef();

  //   function App() {
  //     const [counter, setCounter] = React.useState(0);

  //     function incrementCounter() {
  //       setCounter(prev => prev + 1);
  //     }

  //     return (
  //       <div onClick={incrementCounter} ref={divRef}>
  //         {counter}
  //       </div>
  //     );
  //   }
  //   const container = document.createElement('div');
  //   window.__matrixnorm_container = container;
  //   ReactDOM.render(<App />, container);
  //   console.log('---------------------------------');
  //   // Dispatch a click event
  //   debugger;
  //   const event = document.createEvent('Event');
  //   event.initEvent('click', true, true);
  //   divRef.current.dispatchEvent(event);
  // });

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
    console.log('---------------------------------');
    ReactTestUtils.act(() => {
      incrementCounter();
    });
  });

  it('set_state_different_tag', () => {
    let toggleFlag = null;

    function App() {
      const [flag, setFlag] = React.useState(true);
      toggleFlag = () => setFlag(prev => !prev);
      return flag ? <h1></h1> : <span></span>;
    }
    const container = document.createElement('div');
    window.__matrixnorm_container = container;
    ReactDOM.render(<App />, container);
    console.log('---------------------------------');
    ReactTestUtils.act(() => {
      toggleFlag();
    });
  });

  // it('test1a', () => {
  //   function App() {
  //     return (
  //       <div>
  //         <b data-i="1"></b>
  //         <b data-i="2">
  //           <span data-i="1">
  //             <i data-i="1"></i>
  //             <i data-i="2"></i>
  //           </span>
  //         </b>
  //         <b data-i="3">
  //           <span data-i="2"></span>
  //         </b>
  //       </div>
  //     );
  //   }
  //   const container = document.createElement('div');
  //   ReactDOM.render(<App />, container);
  // });

  // it('test3', () => {
  //   const buttonRef = React.createRef();

  //   function App() {
  //     return (
  //       <div>
  //         <Sub />
  //         <Sub2 />
  //       </div>
  //     );
  //   }

  //   function Sub() {
  //     const [counter, setCounter] = React.useState(0);
  //     function increment() {
  //       setCounter(prev => prev + 1);
  //     }
  //     return (
  //       <button onClick={increment} ref={buttonRef}>
  //         {counter}
  //       </button>
  //     );
  //   }

  //   function Sub2() {
  //     return (
  //       <div>
  //         <Sub3 />
  //       </div>
  //     );
  //   }

  //   function Sub3() {
  //     return (
  //       <div>
  //         <span>petrushka</span>
  //       </div>
  //     );
  //   }

  //   const container = document.createElement('div');
  //   ReactDOM.render(<App />, container);

  //   console.log('---------------------------------');
  //   // Dispatch a click event
  //   const event = document.createEvent('Event');
  //   event.initEvent('click', true, true);
  //   buttonRef.current.dispatchEvent(event);
  // });
});
