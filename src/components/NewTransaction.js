import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const NewTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const { addTransaction } = useContext(GlobalContext);

    const handleSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
        setText('');
        setAmount('');
    }

    return (
        <>
            <h3>Add a new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={e=>setText(e.target.value)} placeholder="Type..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Enter amount..."/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default NewTransaction
