import Navbar from './components/Navbar';
import Inputs from './components/Inputs'
import './App.scss';
import './components/Navbar.scss';
import './components/Inputs.scss';


function App() {

  return (
    <div>
      <Navbar title='Project' spanTitle='Rewind' />
      <Inputs Username="Your mama's name" />
    </div>
  );
}

export default App;
