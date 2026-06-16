import React from 'react'
import SindiraDemo from './Components/DemoPage/SindiraDemo'
import "./App.css";
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import RangDressesDemo from './Components/DemoPage/RangDressesDemo';
function App() {
  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh', 
      background: '#1a1a1a', // Premium dark background for desktop viewers
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'flex-start' 
    }}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SindiraDemo/>}/>
        <Route path="/rang-dresses-demo" element={<RangDressesDemo/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



//Rang Dresses Salwar Co ord sets