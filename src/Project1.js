import logo from './logo.svg';
import './App.css';
import Flow from './Flow-1';
import Nodeslist from './Nodeslist';
import  Navbar  from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <div className='flow'><Flow/></div>
     <div className='Nodeslist'><Nodeslist/></div>
    </div>
  );
}

export default App;
