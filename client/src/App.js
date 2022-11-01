import React from 'react'
//import axios from 'axios'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import SecretPage from './components/SecretPage';
function App(){

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/login' element={<LoginPage />}>
      </Route>
      <Route path='/register' element={<RegisterPage />}></Route>
      <Route path='/secret' element={<SecretPage />}> </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App