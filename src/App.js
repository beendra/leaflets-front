import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Account from './Account';
import Profile from './Profile';
import Guides from './Guides';
import { useState, useEffect } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [db, setDb] = useState([]);

  // console.log(db[0].id)
    const userId = localStorage.getItem('userId');

  useEffect(() => {
    console.log("localStorage UserId", userId);

    if (userId) {
    fetch(`http://localhost:4000/my-account/${parseInt(userId)}`)
    .then((r) => r.json())
    .then((user) => {
      setCurrentUser(user);
    })
    }
  }, [userId]);

  useEffect(() => {
    fetch("http://localhost:4000/databases")
    .then((r) => r.json())
    .then((data) => setDb(data))
}, []);

  function newAccount(newAccountFromForm){
    console.log(newAccountFromForm)
    setCurrentUser(newAccountFromForm)
  }

  function editAccount(updatedAccount){
    setCurrentUser(updatedAccount)
  }


  return (
    <div className="App">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Switch>
        <Route exact path="/login">
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/create-account">
          <CreateAccount currentUser={currentUser} newAccount={newAccount}/>
        </Route>
        <Route exact path="/my-account">
          <Account currentUser={currentUser} db={db} setDb={setDb}/>
        </Route>
        <Route exact path="/guides">
          <Guides db={db} setDb={setDb}/>
        </Route>
        <Route exact path="/profile">
          <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} editAccount={editAccount} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
