'use strict';

let React;
let ReactDOM;
let ReactTestUtils;

describe('deep-tree', () => {
  beforeEach(() => {
    jest.resetModules();
    React = require('react');
    ReactDOM = require('react-dom');
    ReactTestUtils = require('react-dom/test-utils');
  });

  it('nested', () => {
    let updateZ = null;

    function Xxx() {
      const [x, setX] = React.useState(0);
      return (
        <div>
          <Yyy />
        </div>
      );
    }
    function Yyy() {
      const [y, setY] = React.useState(0);
      return (
        <div>
          <Zzz />
        </div>
      );
    }
    function Zzz() {
      const [z, setZ] = React.useState(0);
      updateZ = () => {
        debugger;
        setZ(prev => prev + 1);
      };
      return <div>{z}</div>;
    }
    const container = document.createElement('div');
    window.__matrixnorm_container = container;
    ReactDOM.render(<Xxx />, container);
    console.log('---------------------------------');
    ReactTestUtils.act(() => {
      updateZ();
    });
  });
});
