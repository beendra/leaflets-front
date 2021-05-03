import React from 'react';
import AllLogs from './AllLogs';
import EditPlant from './EditPlant';
import { useState } from 'react';


function PlantInfo({ id, plant, currentUser, handleAddPlant, handleAddLog, logs, setLogs, handleDelete, db, setDb, handleDeletePlant, handleUpdatePlant }){
    const [showLogs, setShowLogs] = useState(false);
    const [showEditPlant, setShowEditPlant] = useState(false);
    const [editPlant, setEditPlant] = useState("");

    function handleLogs(){
        setShowLogs(!showLogs);
    }

    function handleShowEditPlants(){
        setShowEditPlant(!showEditPlant);
    }

    return(
        <div className="one-plant">
        {/* <p>{plant.id}</p> */}
        <p>{editPlant}</p>
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
        <EditPlant db={db} setDb={setDb} handleDeletePlant={handleDeletePlant} plant={plant} showEditPlant={showEditPlant} setShowEditPlant={setShowEditPlant} id={id} currentUser={currentUser} editPlant={editPlant} setEditPlant={setEditPlant} handleUpdatePlant={handleUpdatePlant}/>
        : null }
        </div>
    )
}

export default PlantInfo;