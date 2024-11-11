import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import GenrePage from './pages/GenrePage';
import CarouselPage from './pages/CarouselPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/genres" element={<GenrePage />} />
        <Route path="/carousel" element={<CarouselPage />} />
        <Route path="/dashboard" element={<RegisterPage />} />
        <Route path="/movies" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
