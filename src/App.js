import React from 'react';
import { Routes , Route, Link } from 'react-router-dom';
import { Layout, Typography } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
import './App.css'
import ExchangeDetails from './components/ExchangeDetails';

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='main'>
            <Layout>
              <div className='routes'>
                <Routes>
                  <Route exact path='/' element={<Homepage />} />
                  <Route exact path='/exchanges' element={<Exchanges />} />
                  <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
                  <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
                  <Route exact path='/exchanges/:coinId' element={<ExchangeDetails />} />
                  <Route exact path='/news' element={<News />} />
                </Routes>
              </div>
            </Layout>
        
          <div className='footer'>
              <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
                  Cryptoverse <br />
                  All rights reserved
              </Typography.Title>
              <div style={{ margin: '10px 0' }}>
                <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>HOME</Link>
                <span style={{color: 'white', margin: '0 10px' }}> | </span>
                <Link to='/exchanges'  style={{ color: 'white', textDecoration: 'none'}}>EXCHANGES</Link>
                <span style={{color: 'white', margin: '0 10px' }}> | </span>
                <Link to='/news'  style={{ color: 'white', textDecoration: 'none' }}>NEWS</Link>
            </div>
            </div>
        </div>
    </div>
  );
}

export default App