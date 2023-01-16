import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './modules/HeaderHome';
import Footer from './modules/Footer';
import Home from './modules/pages/Home';
import PaletteRus from './modules/pages/PalettePages/PaletteRus';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/palette-rus' element={<PaletteRus/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
