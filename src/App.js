
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/home/Home'
import Header from './component/header/Header';
import Menu from './component/menu/Menu';
import Checkout from './component/checkout/Checkout';



function App() {
  return (
    <>
      <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
