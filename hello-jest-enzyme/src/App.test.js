import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// EE
import { shallow } from "enzyme";
import Calculator from "./components/Calculator";

/* EE
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); **/

// EE
test('should render calculator component', () => {
    const wrapper = shallow(<App />);
    const calculator = wrapper.find(Calculator);

    expect(calculator.exists()).toBe(true);
})