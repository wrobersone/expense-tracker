import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const NewTransaction = () => {
  const [text, setText] = useState(' ');
  const [amount, setAmount] = useState(0);

  const {newTransaction} = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const addTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    newTransaction(addTransaction);
  }
  
    return (
        <>
            <h3>Add new transaction below</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Enter text here</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (- Expense, + Income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </>
    )
}
