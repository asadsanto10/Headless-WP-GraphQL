import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Headless wordpress testing</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <Routes>
          <Route path="/" element={<h2>welcome</h2>} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
