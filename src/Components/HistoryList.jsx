import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const HistoryList = ({transaction, keys}) => {
    const { deleteTransactions } = useContext(GlobalContext);
    const sign = transaction.amount > 0 ? "+" : "-";

  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"} key={keys}>
        {transaction.text} <span>{sign}₹{Math.abs(transaction.amount)}</span>
        <button onClick={() => deleteTransactions(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}
