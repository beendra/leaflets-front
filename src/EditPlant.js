import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function EditPlant({ currentUser, db, setDb, handleDeletePlant, plant, showEditPlant, setShowEditPlant, editPlant, setEditPlant, handleUpdatePlant }){
    const history = useHistory();
    const [editPlantForm, setEditPlantForm] = useState({
        id: "",
        plant_name: "",
        photo: null,
        user_id: 1,
        database_id: db.id
    });

    function handleSubmit(e){
        e.preventDefault()


        fetch(`http://localhost:4000/plants/${plant.id}`, {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(editPlantForm)
        })
        .then((r) => r.json())
        .then((editedPlant) => {
            localStorage.setItem("plantId", plant.id)
            // console.log("LOCAL", localStorage.getItem("plantId"));
            // setEditPlant(editedPlant)
            handleUpdatePlant(editedPlant)
            // console.log(plant)
            history.push('./my-account');
        })

        setShowEditPlant(!showEditPlant)

    }

    function handleChange(e){
        setEditPlantForm({...editPlantForm, [e.target.name]: e.target.value})
    }

    function handleDeleteFetch(id){
        fetch(`http://localhost:4000/plants/${plant.id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then((plant) => {
            handleDeletePlant(plant);
            history.push("/my-account");
        })
            
        }

    return (
        <div className="edit-plant-form">
            <form onSubmit={handleSubmit}>
                <label>Edit Name: </label>
                    <input
                        type="text"
                        name="plant_name"
                        value={editPlantForm.plant_name}
                        onChange={handleChange}
                    />
            <br />
                <label>Edit Plant Type: </label>
                    <select
                    value={editPlantForm.database_id}
                    onChange={handleChange}>
                        { db.map((plant) => <option key={plant.id}>{plant.common_name}</option>) }
                    </select>
            <br />
                {/* <label>Photo: </label>
                    <input 
                        type="file" 
                        accept="image/*" 
                        multiple={false} 
                        onChange={onImageChange} 
                    /> */}
                <input type="submit" value="Submit" className="butt"/> 
            </form> 
            <br/>
            <button onClick={handleDeleteFetch} className="butt">Delete</button>
        </div>
    )   
}

export default EditPlant;