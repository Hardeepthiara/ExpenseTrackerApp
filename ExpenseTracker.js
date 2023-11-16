const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let expenses = [];

// Get all expenses
app.get('/expenses', (req, res) => {
  res.json(expenses);
});

// Add a new expense
app.post('/expenses', (req, res) => {
  const { description, amount } = req.body;

  if (!description || !amount) {
    return res.status(400).json({ error: 'Both description and amount are required.' });
  }

  const newExpense = {
    id: expenses.length + 1,
    description,
    amount
  };

  expenses.push(newExpense);
  res.status(201).json(newExpense);
});

// Get a specific expense by ID
app.get('/expenses/:id', (req, res) => {
  const expenseId = parseInt(req.params.id);
  const expense = expenses.find(expense => expense.id === expenseId);

  if (!expense) {
    return res.status(404).json({ error: 'Expense not found' });
  }

  res.json(expense);
});

// Start the server
app.listen(port, () => {
  console.log(`Expense Tracker app listening at http://localhost:${port}`);
});
