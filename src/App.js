import React  from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Home/Login/Login';
import Admin from './pages/Home/Admin/Admin';
import Navbar from './component/Navbar/Navbar'
import Auth from './pages/Home/Auth/Auth';
import SengleRout from './pages/Home/SengleRout/SengleRout';



function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
     <Route path='/' element ={<Home/>}/>
     <Route path='/products:id' element ={<SengleRout/>}/>
     <Route path='/Login' element ={<Login/>}/>
     <Route path='/' element={<Auth/>}>
     <Route path='/Admin' element ={<Admin/>}/>
     </Route>
     </Routes>
    </div>
  );
}

export default App;
