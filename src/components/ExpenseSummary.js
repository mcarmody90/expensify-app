import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => (
  <div>
    {
      (expenseCount > 0)  && 
      (
        <p>
          Viewing {expenseCount} 
          {expenseCount === 1 ? ' expense ' : ' expenses '}
          totalling: {numeral(expenseTotal / 100).format('$0,0.00')}.
        </p>
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);