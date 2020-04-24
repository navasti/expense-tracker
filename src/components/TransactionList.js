import React from 'react'

const TransactionList = () => {
    return (
        <div className="transactions">
            <ul className="list">
                <li className="minus">
                    Text <span>-400$</span><button className="delete-btn">x</button>
                </li>
            </ul>
        </div>
    )
}

export default TransactionList
