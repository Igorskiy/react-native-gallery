import React from 'react';
import { AppNavigation } from './AppNavigation';
import  { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}
