import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './modules/pages/Home';
import PaletteRus from './modules/pages/PalettePages/rus/PaletteRus';
import PaletteAus from './modules/pages/PalettePages/aus/PaletteAus';
import PaletteCA from './modules/pages/PalettePages/canadian/PaletteCA';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/palette-rus' element={<PaletteRus/>} />
        <Route path='/palette-aus' element={<PaletteAus/>} />
        <Route path='/palette-ca' element={<PaletteCA/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
