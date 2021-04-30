import React from 'react';
import { useState } from 'react';
import CreateNewPlant from './CreateNewPlant';
import PlantContainer from './PlantContainer';

function Account({ currentUser }){
    const [plants, setPlants] = useState([])

    function handleAddPlant(newPlant) { 
        const updatedPlantList = [...plants, newPlant] 
        setPlants(updatedPlantList) 
    }


    return(
        <div className="main">
        <p>Account</p>
            <CreateNewPlant currentUser={currentUser} handleAddPlant={handleAddPlant}/>
            <PlantContainer />

        </div>
    )
}

export default Account;