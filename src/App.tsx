import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;