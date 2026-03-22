import React, { useState, useEffect, useMemo, useCallback } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        const fakeExpenses = data.slice(0, 5).map(item => ({
          id: item.id,
          title: item.title,
          amount: Math.floor(Math.random() * 1000)
        }));
        setExpenses(fakeExpenses);
      });
  }, []);

  
  const addExpense = useCallback((expense) => {
    setExpenses(prev => [...prev, expense]);
  }, []);

  
  const total = useMemo(() => {
    console.log("Calculating...");
    return expenses.reduce((acc, curr) => acc + Number(curr.amount), 0);
  }, [expenses]);

  return (
    <div>
      <h1>Expense Tracker</h1>

      {/* 👇 Show Total */}
      <h2>Total: ₹{total}</h2>

      {/* 👇 PASS addExpense INSTEAD of setExpenses */}
      <ExpenseForm addExpense={addExpense} />

      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;