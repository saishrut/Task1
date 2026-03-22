import React from "react";

function ExpenseItem({ expense }) {
  return (
    <div>
      <h3>{expense.title}</h3>
      <p>₹{expense.amount}</p>
      <div className="expense-item"></div>
    </div>
  );
}

export default ExpenseItem;