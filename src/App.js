import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/view/Home';
import About from './components/view/About';
import Loader from './components/view/Loader';
import Movement from './components/view/Movement';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/loader' element={<Loader />} />
          <Route path='/movement' element={<Movement />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
