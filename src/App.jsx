import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MapComponent from './components/MapComponent'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/service_areas" element={<MapComponent />} />
      </Routes>
    </BrowserRouter>
  )
}




