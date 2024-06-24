import React from 'react'
import Slider from './coponents/Slider'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './coponents/Admin';
import Fees from './coponents/Fees';
import Home from './coponents/Home';
import Student from './coponents/Student';
import Aboutus from './coponents/Aboutus';
import Form from './coponents/Form';
import Mem from './coponents/Mem';
import Events from './coponents/Events';
import Interview from './coponents/Interview';
import In from './coponents/In';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
    <Route path='/' exact element={<Home/>}></Route>
    <Route path='/fees' exact element={<Fees/>}></Route>
    <Route path='/student' exact element={<Student/>}></Route>
    <Route path='/Aboutus' exact element={<Aboutus/>}></Route>
    <Route path='/public' exact element={<Interview/>}></Route>
    <Route path='/formm' exact element={<Form/>}></Route>
    <Route path='/team' exact element={<Events/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
