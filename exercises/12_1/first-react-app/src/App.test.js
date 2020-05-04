import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(task(10), document.getElementById('root'))