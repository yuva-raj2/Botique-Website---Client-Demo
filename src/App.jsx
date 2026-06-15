import React from 'react'
import SindiraDemo from './Components/DemoPage/SindiraDemo'
import "./App.css";
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
      <SindiraDemo/>
    </div>
  )
}

export default App