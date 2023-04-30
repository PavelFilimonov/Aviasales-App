import React from 'react';

import './index.scss';
import Header from './components/Header';
import Filter from './components/Filter';
import Tabs from './components/Tabs';

export default function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Filter />
        <Tabs />
      </main>
      <footer></footer>
    </>
  );
}
