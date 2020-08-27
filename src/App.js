import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {Expenses} from './components/Expenses';
import {Transactions} from './components/Transactions';
import {NewTransaction} from './components/NewTransaction';

import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Expenses />
        <Transactions />
        <NewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
