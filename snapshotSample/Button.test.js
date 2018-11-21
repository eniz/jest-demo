import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';


it('renders correctly a tag', () => {
  const tree = renderer
    .create(<Button href="https://www.otel.com">Otel.com</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders correctly button tag', () => {
  const tree = renderer
    .create(<Button type="submit">Send</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
