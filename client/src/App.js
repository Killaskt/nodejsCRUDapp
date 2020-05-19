import React from 'react';
import AppNavBar from './components/AppNavBar'
import ShoppingList from './components/ShoppingList'
import ItemModal from './components/itemModel'
import { Container } from "reactstrap";

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <AppNavBar/>
        {/* <h1>hello ShaZam!</h1> */}
        <Container>
          <ItemModal/>
          <ShoppingList/>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
