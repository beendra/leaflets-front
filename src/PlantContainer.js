import React from 'react';
import PlantInfo from './PlantInfo';

function PlantContainer({ currentUser, plants, setPlants, handleAddPlant, handleAddLog, logs, setLogs, handleDelete }){

    const plantList = Array.from(plants)
    console.log(plants)

    const allPlants = plantList.map((plant) =>{
        return(
        <>
        <PlantInfo 
        key={plant.id}
        setPlants={setPlants}
        handleAddPlant={handleAddPlant}
        handleAddLog={handleAddLog}
        {...plant}
        plant={plant}
        currentUser={currentUser}
        logs={logs}
        setLogs={setLogs}
        handleDelete={handleDelete}
        />
        </>
    )
    })

    return (
        <div className="container">
        <p>My Plants</p>
            {allPlants}
        </div>
    )
    
}

export default PlantContainer;