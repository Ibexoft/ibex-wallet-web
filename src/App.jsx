import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from './components/Header.jsx';
import './App.css'
import './assets/css/style.css'

const Home = lazy(() => import('./pages/Home.jsx'));
const Transactions = lazy(() => import('./pages/Transactions.jsx'));
const Accounts = lazy(() => import('./pages/Accounts.jsx'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/accounts" element={<Accounts />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
