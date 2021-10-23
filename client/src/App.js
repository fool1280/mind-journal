import './styles/App.css';
import Navbar from "./Navbar";
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className='container'>
      <Navbar/>
      <Home/>
        {/* <main className='main'>
          <h1 className='title'>
            Welcome to <a href='#'>Mind Journal!</a>
          </h1>
        </main> */}
      </div>
    </Router>
  );
}

export default App;
