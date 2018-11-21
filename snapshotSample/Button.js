/** @format */
/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import classNames from 'classnames';

export default class Button extends PureComponent {
  render() {
    const className = classNames( 'button', this.props.className, {
      'is-compact': this.props.compact,
      'is-primary': this.props.primary,
      'is-scary': this.props.scary,
      'is-busy': this.props.busy,
      'is-borderless': this.props.borderless,
    } );

    if ( this.props.href ) {
      const { compact, primary, scary, busy, borderless, type, ...props } = this.props;

      // block referrers when external link
      const rel = props.target
        ? ( props.rel || '' ).replace( /noopener|noreferrer/g, '' ) + ' noopener noreferrer'
        : props.rel;

      return <a { ...props } rel={ rel } className={ className } />;
    }

    const { compact, primary, scary, busy, borderless, target, rel, ...props } = this.props;

    return <button { ...props } className={ className } />;
  }
}

Button.defaultProps = {
  type: 'button'
}
