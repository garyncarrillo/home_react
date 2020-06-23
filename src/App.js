import React from 'react';
import './App.css';

//import component
import Header from './components/shared/head'

function App() {
  return (
    <div className="App">
      <Header menu={[{name: 'Home'}, {name:'Blog'}, {name: 'Productos'}, {name: 'Contactanos'}]}/>
    </div>
  );
}

export default App;
