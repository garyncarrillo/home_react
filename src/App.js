import React from 'react';
import './App.css';

//import component
import Header from './components/shared/head';
import Slider from './components/shared/slider';

function App() {
  return (
    <div className="App">
      <Header
        tittle='my_web'
        menu={[{name: 'Home'}, {name:'Blog'}, {name: 'Productos'}, {name: 'Contactanos'}]}
      />
      <Slider />
    </div>
  );
}

export default App;
