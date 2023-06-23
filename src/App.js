import Navbar from './components/Navbar';
import Inputs from './components/Inputs';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
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
          {/* <Route path='/Footer' element={<Footer />} /> */}
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
