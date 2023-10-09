/* eslint-disable react/prop-types */
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  let amount = transaction.amt > 0 ? "+" : "-";
  amount = amount + "₹" + Math.abs(transaction.amt).toFixed(2);

  return (
    <li className={transaction.amt > 0 ? "plus" : "minus"}>
      {transaction.text} <span>{amount}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
};
