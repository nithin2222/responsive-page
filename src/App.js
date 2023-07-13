
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services'
import Product from './components/pages/Product'
import SignUp from './components/pages/SignUp'
function App() {
  return (
    <>
        <Router>
         <NavBar/>
         <Routes>
          <Route path='/'exact Component={Home}/>
          <Route path='/services'exact Component={Services}/>
          <Route path="/product"exact Component={Product}/>
          <Route path="/sign-up"exact Component={SignUp}/>
         </Routes>
         </Router>
    </>
   
  );
}

export default App;
