import React, { useState } from 'react'

const NewTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    return (
        <div className="new-transaction">
            <h3>Add a new transaction</h3>
            <form>
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
        </div>
    )
}

export default NewTransaction
