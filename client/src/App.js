import React from 'react'
//import axios from 'axios'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
function App(){
  // const [data,setData]=useState();
  // const getData= async()=>{
  //   const response= await axios.get('http://localhost:3001/')
  //   setData(response.data);
  // }

  // useEffect(()=> {getData()},[]);
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/login' element={<LoginPage />}>
      </Route>
      <Route path='/register' element={<RegisterPage />}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App