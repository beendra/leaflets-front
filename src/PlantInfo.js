import React from 'react';
import AllLogs from './AllLogs';
import EditPlant from './EditPlant';
import { useState } from 'react';


function PlantInfo({ plant, currentUser, handleAddPlant, handleAddLog, logs, setLogs, handleDelete, db, setDb }){
    const [showLogs, setShowLogs] = useState(false);
    const [showEditPlant, setShowEditPlant] = useState(false);

    function handleLogs(){
        setShowLogs(!showLogs);
    }

    function handleShowEditPlants(){
        setShowEditPlant(!showEditPlant);
    }

    return(
        <div className="one-plant">
        <p>{plant.plant_name}</p>
        <img src={plant.image} alt={plant.plant_name}/>
        <br />
        <button onClick={handleLogs}>Logs</button>
        { showLogs ? 
        <div className="logs-div">
        <AllLogs plant={plant} currentUser={currentUser} handleAddLog={handleAddLog} logs={logs} setLogs={setLogs} handleDelete={handleDelete}/>
        </div>
        : null }
        <br />

        <button onClick={handleShowEditPlants}>Edit</button>
        { showEditPlant ?
        <EditPlant db={db} setDb={setDb}/>
        : null }
        </div>
    )
}

export default PlantInfo;