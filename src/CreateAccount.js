import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function CreateAccount({ setCurrentUser, newAccount}){
    const [formData, setFormData] = useState({
        username: "", 
        password: "",
        name: "",
        avatar: null
    })

    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        fetch("http://localhost:4000/users", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then(user => {
            localStorage.setItem("userId", user.id)
            // console.log("LOCAL", localStorage.getItem("userId"));
            newAccount(user)
            console.log(user)
            history.push("/my-account")
        })
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }


    return (
        <div className="create-user-form">
        <h2>Create Account</h2>
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
                <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                    />
                    <br />
                <label>Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <br />
                <label>Avatar: </label>
                    <input 
                    type='file' 
                    name='avatar'
                    value={formData.image}
                    onChange={handleChange}
                    /> 
                    <br />
                {/* {errors.map((error) => (
                <p style={{ color: "red" }} key={error}>
                    {error}
                </p>
                ))} */}
                    <input type="submit" value="Submit" className="butt"/>
            </form>
        </div>
    )
}

export default CreateAccount;