import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = props => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onRemoveExpense={props.onRemoveExpense}
        />
      ))}
    </ul>
  )
}

export default ExpensesList
