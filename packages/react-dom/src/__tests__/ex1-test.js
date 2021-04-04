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
    window.__matrixnorm_container = container;
    ReactDOM.render(<App />, container);
    //console.log(window.__matrixnorm_container.innerHTML);
  });

  it('test1a', () => {
    const container = document.createElement('div');
    window.__matrixnorm_container = container;
    ReactDOM.render(<div className="old">hi</div>, container);
    console.log('---------------------');
    ReactDOM.render(<div className="new">hi</div>, container);
  });

  it('test1aa', () => {
    const container = document.createElement('div');
    window.__matrixnorm_container = container;
    ReactDOM.render(<div>hi</div>, container);
    console.log('---------------------');
    ReactDOM.render(<span>hi</span>, container);
  });

  it('test1b', () => {
    function App1() {
      return <div className="old">hi</div>;
    }
    function App2() {
      return <div className="new">hi</div>;
    }
    const container = document.createElement('div');
    window.__matrixnorm_container = container;
    ReactDOM.render(<App1 />, container);
    console.log('---------------------');
    ReactDOM.render(<App2 />, container);
    //console.log(window.__matrixnorm_container.innerHTML);
  });

  it('test2', () => {
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
    const event = document.createEvent('Event');
    event.initEvent('click', true, true);
    debugger;
    divRef.current.dispatchEvent(event);
  });

  it('test3', () => {
    const divRef = React.createRef();

    function App() {
      const [counter, setCounter] = React.useState(0);

      function incrementCounter() {
        setCounter(prev => prev + 1);
      }

      return (
        <div onClick={incrementCounter} ref={divRef}>
          {counter === 0 ? <h1></h1> : <span></span>}
        </div>
      );
    }
    const container = document.createElement('div');
    window.__matrixnorm_container = container;
    ReactDOM.render(<App />, container);
    console.log('---------------------------------');
    // Dispatch a click event
    const event = document.createEvent('Event');
    event.initEvent('click', true, true);
    debugger;
    divRef.current.dispatchEvent(event);
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
