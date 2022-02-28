// import dotenv from 'dotenv';
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Posts from './Component/Posts';
import client from './Query/ClientConfig';

// dotenv.config();
function App() {
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <div className="App">
          <Helmet>
            <title>Headless wordpress testing</title>
            <link rel="canonical" href="https://www.tacobell.com/" />
          </Helmet>
          <Routes>
            <Route path="/" element={<Posts />} />
          </Routes>
        </div>{' '}
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
