import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export const IncomeExpenses = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts_inc = transactions.map(transaction => transaction.amt > 0 ? transaction.amt : 0);
    const amounts_exp = transactions.map(transaction => transaction.amt < 0 ? -transaction.amt : 0);

    const income = amounts_inc.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = amounts_exp.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">+₹{income}</p>
        </div>
        <div>
            <h4>Expenses</h4>
            <p id="money-minus" className="money minus">-₹{expense}</p>
        </div>
    </div>
    )
}
