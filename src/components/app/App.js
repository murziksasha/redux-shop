import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import {HomePage, CartPage} from '../pages/index';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </>

  );
}

export default App;
