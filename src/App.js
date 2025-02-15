import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/view/Home';
import About from './components/view/About';
import Loader from './components/view/Loader';
import Movement from './components/view/Movement';
import AnimationGsap from './components/view/AnimationGsap';
import MouseMovement from './components/animation/MouseMovement';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/loader' element={<Loader />} />
          <Route path='/movement' element={<Movement />} />
          <Route path='/animation-gsap' element={<AnimationGsap />} />
          <Route path='/mouse-move' element={<MouseMovement />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
