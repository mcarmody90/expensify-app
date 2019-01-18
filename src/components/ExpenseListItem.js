import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, count, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{ description }</h3>
    </Link>
    <p>Amount: { (amount/100).toLocaleString("en-US", { style:"currency", currency:"USD" }) }</p>
    <p>Created: { createdAt }</p>
  </div>
);

export default ExpenseListItem;