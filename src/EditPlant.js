import React from 'react';

function EditPlant({ db, setDb }){

    return (
        <div className="edit-plant-form">
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
            <button>Delete</button>
        </div>
    )   
}

export default EditPlant;