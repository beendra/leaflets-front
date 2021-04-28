import './App.css';
// import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Account from './Account';
import CreateAccount from './CreateAccount';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Account />
      <CreateAccount />
    </div>
  )
}

export default App;
