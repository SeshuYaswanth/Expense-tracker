import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const AddNotes = () => {
    const { addTransaction } = useContext(GlobalContext);
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const onSubmit = event => {
        event.preventDefault();

        const newtransaction = {
            id: Math.floor(Math.random() * 10000000),
            text, 
            amount: parseInt(amount)
        }
        setText("");
        setAmount("");
        addTransaction(newtransaction);
    }
  return (
    <div>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </div>
  )
}
