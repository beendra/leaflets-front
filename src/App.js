import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Account from './Account';
import Guides from './Guides';
import { useState, useEffect } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/my-account")
    .then((r) => r.json())
    .then((user) => {
      setCurrentUser(user);
    })
  }, []);

  function newAccount(newAccountFromForm){
    console.log(newAccountFromForm)
    setCurrentUser(newAccountFromForm)
  }

  return (
    <div className="App">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/create-account">
          <CreateAccount currentUser={currentUser} newAccount={newAccount}/>
        </Route>
        <Route exact path="/my-account">
          <Account currentUser={currentUser}/>
        </Route>
        <Route exact path="/guides">
          <Guides />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
