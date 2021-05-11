import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Profile({ currentUser, setCurrentUser, editAccount }){
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        name: ""
    })
    const history = useHistory();



    console.log(currentUser)

    function handleSubmit(e){
        fetch(`http://localhost:4000/users/${currentUser.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                },
            body: JSON.stringify(formData)
            })
            .then((r) => r.json())
            .then(user => {
                setCurrentUser(user);
                editAccount(user);
                console.log(user);
        })
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleDelete(id){
        fetch(`http://localhost:4000/users/${currentUser.id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then(() => {
            setCurrentUser(null)
            history.push("/")
        })
        
    }

    return (
        <div className="profile-main">
            <div className="profile-content">
                {/* <p>Username: </p> */}
                {/* <p>{currentUser.username}</p> */}
                {/* <p>Name: </p> */}
                {/* <p>{.name}</p>*/}
                <img src = "https://res.cloudinary.com/beendra/image/upload/v1620062861/AlocasiaAmazonica_oqgqc8.jpg" alt="amazonica" style={{ height: 200, width: 200}}/> 

            </div>
            <div className="vert"></div>
            <div className="edit-profile">
                <h3>Edit Profile</h3>
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
                        <input type="submit" value="Submit" />
                </form>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Profile;