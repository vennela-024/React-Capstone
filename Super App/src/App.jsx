import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        //www.abc-xyz.com
        
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;