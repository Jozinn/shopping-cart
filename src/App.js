import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Shoppingcart from './components/Shoppingcart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart' element={<Shoppingcart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
