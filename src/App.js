import React, {Component} from 'react';
import Layout from './components/Layout/Layout.js';
import './App.css';
import BurgerBuilder from './containers/burgerBuilder/BurgerBuilder.js';
function App() {
  return (
    <div>
    		<Layout>
    		
   			<BurgerBuilder />

   			</Layout>
    </div>
  );
}

export default App;
