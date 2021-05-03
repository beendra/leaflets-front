import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreateNewPlant({ currentUser, handleAddPlant, db, setDb }){
    const history = useHistory();
    const [createState, setCreateState] = useState({
        plant_name: "",
        photo: null,
        user_id: 1,
        database_id: db.id
    })

    console.log(currentUser.id)
    console.log(db)

    function handleSubmit(e) {
        e.preventDefault();

        // const formData = new FormData();
        // formData.append('plant_name', createState.plant_name);
        // formData.append('photo', createState.photo);
        // formData.append('user_id', currentUser.id);
        // formData.append('database_id', 1)
        // debugger
        fetch('http://localhost:4000/plants', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(createState),
        })
        .then((r) => r.json())
        .then((plant) => {
            // localStorage.setItem("plantId", plant.id)
            // console.log("LOCAL", localStorage.getItem("plantId"));
            // debugger
            handleAddPlant(plant)
            // console.log(plant)
            history.push('/my-account')
        
        })
    }

    function handleChange(e){
        setCreateState({...createState, [e.target.name]: e.target.value})
    }

    // function onImageChange(e){
    //     setCreateState({...createState, photo: e.target.files[0] })
    // }

    return(
        <div className="new-plant-form">
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                    <input
                        type="text"
                        name="plant_name"
                        value={createState.plant_name}
                        onChange={handleChange}
                    />
            <br />
                <label>Plant Type: </label>
                    <select>
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
                <input type="submit" value="Submit" /> 
            </form> 
            <br/>
        </div>
    )
}

export default CreateNewPlant;