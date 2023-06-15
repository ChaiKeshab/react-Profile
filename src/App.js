import Navbar from './components/Navbar';
import Inputs from './components/Inputs';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <>
        <Navbar title='Chai' spanTitle='Keshab' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Inputs' element={<Inputs Username="Your mama's name" />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Blog' element={<Blog />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
