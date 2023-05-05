import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './index.scss';
import Header from './components/Header';
import Filter from './components/Filter';
import Tabs from './components/Tabs';
import Footer from './components/Footer';
import { getTickets } from './store/appSlice';

export default function App() {
  const dispatch = useDispatch();
  const isStop = useSelector((state) => state.isStop);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch, isStop]);

  return (
    <>
      <Header />
      <main className='main'>
        <Filter />
        <Tabs />
      </main>
      <Footer />
    </>
  );
}
