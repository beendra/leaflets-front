import React from 'react';
import NavBar from './NavBar';

function Header({ currentUser }){
    return (
        <div className="header">
        <h1>Header</h1>
        {currentUser ? (
        <p className="welcome-text">Welcome {currentUser.username} </p>
        ): (
        <p>Please Login or Sign Up.</p>
        )}
        <NavBar currentUser={currentUser}/>
        </div>
    )
}

export default Header;