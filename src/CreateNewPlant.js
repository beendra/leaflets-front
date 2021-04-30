import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreateNewPlant({ currentUser, handleAddPlant }){
    const history = useHistory()
    // const { photo, name } = currentUser.plants
    const [formData, setFormData] = useState({
        name: "",
        photo: null,
        user_id: currentUser
    })

    function handleSubmit(e) {
        e.preventDefault();

        setFormData ({ 
            name: "", 
            photo: ""
        })

        fetch('http://localhost:4000/plants', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then((plant) => {
            localStorage.setItem("plantId", plant.id)
            // console.log("LOCAL", localStorage.getItem("postId"));
            handleAddPlant(plant)
            // console.log(post)
            history.push('/my-account')
        })
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
        <div className="new-plant-form">
        <p>Add a Plant</p>
        <form onSubmit={handleSubmit}>
        <label>Name: </label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <br />
        <label>Photo: </label>
            <input 
                type='file' 
                name='photo'
                value={formData.photo}
                onChange={handleChange}
            /> 
            <input type="submit" value="Submit" /> 
        </form> 
        <br/>
    </div>
    )
}

export default CreateNewPlant;