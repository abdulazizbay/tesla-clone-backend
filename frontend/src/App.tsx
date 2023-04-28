import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './components/home/Home'
import React,{FC, useEffect} from 'react';
import { NavBar } from './components/navbar/NavBar';
import { ModelInfo } from './components/modelInfo/ModelInfo';
import AOS from "aos";
import "aos/dist/aos.css";
import { Login } from './components/account/Login';
import { Registration } from './components/account/Registration';
function App (){
  useEffect(()=>{
    AOS.init({  duration:1500  })
  },[])
  return (

    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/models' element={<ModelInfo/>}/>
        <Route path='/model3' element={<ModelInfo/>}/>
        <Route path='/modelx' element={<ModelInfo/>}/>
        <Route path='/modely' element={<ModelInfo/>}/>
        <Route path='/solar-roof' element={<ModelInfo/>}/>
        <Route path='/solar-panels' element={<ModelInfo/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
