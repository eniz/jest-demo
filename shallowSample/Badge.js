import React, { Component } from 'react';

export default class Badge extends Component {
  render() {
    const { type } = this.props;
    return <div className={ `badge badge--${ type }` }>{ this.props.children }</div>;
  }
}

Badge.defaultProps = {
  type: 'warning',
};
