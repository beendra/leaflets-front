import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Account from './Account';
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

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/create-account">
          <CreateAccount />
        </Route>
        <Route exact path="/my-account">
          <Account />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
