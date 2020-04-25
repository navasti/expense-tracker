import React from 'react'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TrnasactionList from './components/TransactionList'
import NewTransaction from './components/NewTransaction'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <main className="container">
        <Balance/>
        <IncomeExpenses/>
        <TrnasactionList/>
        <NewTransaction/>
      </main>
    </GlobalProvider>
  );
}

export default App;
