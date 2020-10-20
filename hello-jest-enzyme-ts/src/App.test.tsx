// src/App.test.tsx

import React from 'react'
import App from './App'
import { shallow } from "enzyme";
import Calculator from "./components/Calculator/Calculator";

test('should render Calculator', () => {
  const wrapper = shallow(<App />);
  const calculator = wrapper.find(Calculator);
  expect(calculator.exists()).toBe(true);
})

