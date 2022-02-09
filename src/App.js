import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Product from './components/pages/Product';
import Sign_up from './components/pages/Sign_up';
function App() {
  return (
    <>
     <Router>
       <Routes>
         <Route path='/' element={<Home />} ></Route>
         <Route path='/services' element={<Services/>} ></Route>
         <Route path='/products' element={<Product/>} ></Route>
         <Route path='/sign-up' element={<Sign_up/>} ></Route>
       </Routes>
     </Router>
    </>
  );
}

export default App;
