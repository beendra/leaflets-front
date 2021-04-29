import React from 'react';
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login( {currentUser, setCurrentUser} ){
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    }) 
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        fetch('http://localhost:4000/login', {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then((user) => {
            localStorage.setItem("userId", user.id)
            setCurrentUser(user)
            history.push("/my-account")
        })
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div className="login">
        <h2 className="login-h2">Login</h2>
        <form onSubmit={handleSubmit}>
                <label>Username: </label>
                    <input
                        type="text"
                        name="username"
                        autoComplete="off"
                        value={formData.username}
                        onChange={handleChange}
                />
                <br />
                <br />
                <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                />
                {/* {errors.map((error) => (
                <p style={{ color: "red" }} key={error}>
                    {error}
                </p>
                ))} */}
                    <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;