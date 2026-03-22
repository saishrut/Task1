import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  return (
    <div>
      {expenses.map(exp => (
        <ExpenseItem key={exp.id} expense={exp} />
      ))}
      <div className="expense-list">

      </div>
    </div>
    
  );
}

export default ExpenseList;