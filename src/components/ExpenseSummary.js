import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => (
  <div className='page-header'>
    <div className='content-container'>
      {
        (expenseCount > 0)  && 
        (
          <h1 className='page-header__title'>
            Viewing <span>{expenseCount}</span> 
            {expenseCount === 1 ? ' expense ' : ' expenses '}
            totalling: <span>{numeral(expenseTotal / 100).format('$0,0.00')}</span>
          </h1>
        )
      }
      <div className='page-header__actions'>
        <Link className='button' to='/create'>Add Expense</Link>
      </div>
    </div>
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