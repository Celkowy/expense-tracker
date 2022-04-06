import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(true)

  const onSaveExpenseData = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
    setIsEditing(true)
  }

  function startEditingHandler() {
    setIsEditing(false)
  }

  function stopEditingHandler() {
    setIsEditing(true)
  }

  const newExpense = isEditing ? (
    <button onClick={startEditingHandler}>Add New Expense</button>
  ) : (
    <ExpenseForm onSaveExpenseData={onSaveExpenseData} stopEditingHandler={stopEditingHandler} />
  )

  return <div className="new-expense">{newExpense}</div>
}

export default NewExpense
