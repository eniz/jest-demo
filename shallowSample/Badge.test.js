import React from 'react';
import { shallow } from 'enzyme';

import Badge from './Badge';

describe( 'Badge', () => {
  test( 'should have badge class', () => {
    const featureExample = shallow( <Badge /> );
    expect( featureExample.find( '.badge' )).toHaveLength(1);
  } );

  test( 'should have proper type class (warning)', () => {
    const badge = shallow( <Badge type="warning" /> );
    expect( badge.find( '.badge.badge--warning' )).toHaveLength(1);
  } );

  test( 'should have proper type class (success)', () => {
    const badge = shallow( <Badge type="success" /> );
    expect( badge.find( '.badge.badge--success' )).toHaveLength(1);
  } );

  test( 'should have proper type class (default)', () => {
    const badge = shallow( <Badge /> );
    expect( badge.find( '.badge.badge--warning' )).toHaveLength(1);
  } );
});