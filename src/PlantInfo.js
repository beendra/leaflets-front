import React from 'react';
import AllLogs from './AllLogs';
import AddLogForm from './AddLogForm';
import { useState } from 'react';

function PlantInfo({ plant, currentUser, handleAddPlant, handleAddLog, logs, setLogs }){
    const [showLogs, setShowLogs]= useState(null);

    function handleLogs(){
        setShowLogs(!showLogs);
    }

    return(
        <div className="one-plant">
        <p>{plant.plant_name}</p>
        <img src={plant.image} alt={plant.plant_name}/>
        <br />
        <button onClick={handleLogs}>Logs</button>
        { showLogs ? 
        <div className="logs-div">
        <AllLogs plant={plant} currentUser={currentUser} handleAddLog={handleAddLog} logs={logs} setLogs={setLogs}/>
        <AddLogForm plant={plant} currentUser={currentUser} handleAddLog={handleAddLog}/>
        </div>
        : null }
        
        </div>
    )
}

export default PlantInfo;