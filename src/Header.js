import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function Header({ currentUser, setCurrentUser }){

    const handleLogout = () => {
        localStorage.setItem("userId", null)
        setCurrentUser(null)
    }

    return (
        <div className="header">
        {currentUser ? (
        <p className="welcome-text">Welcome {currentUser.username}. </p>
        ): (
        <p>Please <Link to="/login">Login</Link> or <Link to="/create-account">Sign Up</Link></p>
        )}
        <p className="logout-button">
        <Link to="/login" onClick={() => handleLogout()}>Logout</Link>
        </p>
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </div>
    )
}

export default Header;