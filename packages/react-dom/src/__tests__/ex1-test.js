'use strict';

let React;
let ReactDOM;

describe('ex1', () => {
  beforeEach(() => {
    jest.resetModules();
    React = require('react');
    ReactDOM = require('react-dom');
  });

  it('xyz', () => {
    console.log('hi');
  });
});
