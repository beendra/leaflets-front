import React from 'react';
import PlantInfo from './PlantInfo';

function PlantContainer({ currentUser, plants, setPlants, handleAddPlant }){

    const plantList = Array.from(plants)
    console.log(plants)

    const allPlants = plantList.map((plant) =>{
        return(
        <div className="each-plant">
        <PlantInfo 
        key={plant.id}
        setPlants={setPlants}
        handleAddPlant={handleAddPlant}
        {...plant}
        plant={plant}
        />
        </div>
    )
    })

    return (
        <div className="container">
        <p>Plant Container</p>
            {allPlants}
        </div>
    )
    
}

export default PlantContainer;