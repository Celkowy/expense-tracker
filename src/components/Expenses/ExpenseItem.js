import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button
            className="expense-item__remove"
            onClick={() => {
              props.onRemoveExpense(props)
            }}
          >
            x
          </button>
        </div>
      </Card>
    </li>
  )
}

export default ExpenseItem
