import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/view/Home';
import About from './components/view/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
