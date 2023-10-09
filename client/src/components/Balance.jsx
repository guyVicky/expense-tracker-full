import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export const Balance = () => {

  const {transactions} = useContext(GlobalContext);

  const amts = transactions.map(transaction => transaction.amt);

  const total = amts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
        <h4>Your Balance</h4>
        <h1 id="balance">₹ {total}</h1>
    </>
  )
}
