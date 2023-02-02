import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import {HomePage, CartPage} from '../pages/index';
import ShopHeader from '../shop-header.js/shop-header';

function App() {

  return (
    <main role="main" className='container'>
      <ShopHeader numItems={5} total={210}/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </main>

  );
}

export default App;
