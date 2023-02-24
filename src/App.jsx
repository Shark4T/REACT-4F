//control + j -> apparizione del terminale

import Footer from './components/Footer';
import './styles/App.scss';  
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ChiSono from './pages/ChiSono';
import Blog from './pages/Blog';
import Contatti from './pages/Contatti';
import{
  BrowserRouter as Router,
  Routes, 
  Route,

}from 'react-router-dom';



const App = () =>  {
  return (
    <Router>
    <div className = 'App'>
      
      <Navbar />
      <Routes>
        <Route exact path='/' element = {<Home />}/>
        <Route exact path='/chi-sono' element = {<ChiSono />}/>
        <Route exact path='/blog' element = {<Blog />}/>
        <Route exact path='/contatti' element = {<Contatti />}/>
      </Routes>
      <Footer /> 
   
</div>
   </Router>
  );

}

export default App;
