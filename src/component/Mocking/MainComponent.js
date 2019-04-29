import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export default class MainComponent extends Component {
  constructor (props) {
       super(props);
      this.label = `I’m main component`;
  };

  onSubmit = (option) => (option === `I’m main component` ? "cool" : "not cool");

  render () {
    return(
      <div className="container">
        <ChildComponent label={this.label} onSubmit={this.onSubmit} />
      </div>
    );
  };
};