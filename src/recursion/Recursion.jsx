import React, { Component } from 'react';
import RecursiveComponent from './RecursiveComponent';

const One = (child) =>
<div className="box"> One {child} </div>

const Two = (child) =>
<div className='box'> Two {child} </div>

const Three = () =>
<div className='box'> Three </div>

const components = [One, Two, Three ];

export default class Recursion extends Component {
	render() {
  	return (
    	<div className='App-wrapper'>
        <RecursiveComponent components={components} />
      </div>
    );
  }
};
