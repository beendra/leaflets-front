import React from 'react';
import PlantInfo from './PlantInfo';

function PlantContainer({ currentUser, plants, setPlants, handleAddPlant, handleAddLog, logs, setLogs, handleDelete, db, setDb, handleDeletePlant, handleUpdatePlant }){

    // const plantList = Array.from(plants)
    console.log(plants)

    const allPlants = plants.map((plant) =>{
        
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
        db={db}
        setDb={setDb}
        handleDeletePlant={handleDeletePlant}
        handleUpdatePlant={handleUpdatePlant}
        />
        </>
    )
    })

    return (
        <div className="container">
        <h2>My Plants</h2>
            {allPlants}
        </div>
    )
    
}

export default PlantContainer;