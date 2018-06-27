import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RecursiveComponent extends Component {

  static propTypes = {
    components: PropTypes.array,
  };

  _recursiveRender(child, componentIndex) {
    if (componentIndex === -1)
      return

    const component = this.props.components[componentIndex](child)

    if (componentIndex === 0)
      return component
      
    return this._recursiveRender(component, componentIndex - 1)
  }
  render() {
    return (
      <div>
        {this._recursiveRender('', this.props.components.length - 1)}
      </div>
    );
  }
};
