import './App.scss';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    {/* component names should start with capital everywhere. Passing prop to component   */}
      <Navbar title = 'Project' spanTitle = 'Rewind'/>
    </>
  );
}

export default App;  
