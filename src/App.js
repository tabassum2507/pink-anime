import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      < Router>
          <Navbar />
          <Switch >
            <Router path='/' exact />
          </Switch>
      </Router>
      
    </>
  );
}

export default App;
