import Navbar from './components/Navbar';
import Inputs from './components/Inputs';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <>
        <Navbar title='CHAI ' spanTitle='KESHAB' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Inputs' element={<Inputs Username="Your mama's name" />} />
          <Route path='/About' element={<About />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Blog' element={<Blog />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
