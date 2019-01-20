import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary with no expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={0} expenseTotal={999} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={3} expenseTotal={20} />);
  expect(wrapper).toMatchSnapshot();
});