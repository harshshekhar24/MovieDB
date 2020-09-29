import React from 'react';
import Header from './components/Header';
import Layout from './components/home/Layout';
import './app.css';
import {Provider} from 'react-redux';
import store from '../store'; 

export const App = () => {

  return (
    <Provider store={store}>
      <Header />
      <Layout/>
    </Provider>
  );
};

export default App;
