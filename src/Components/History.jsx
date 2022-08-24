import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { HistoryList } from './HistoryList';

export const History = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
      {transactions.map((transaction, keys) => {
        return(
          <HistoryList transaction={transaction} key={keys}/>
        )
      })}
      </ul>
    </>
  )
}
