import React from 'react';
import { useState, useEffect } from 'react';
import CreateNewPlant from './CreateNewPlant';
import PlantContainer from './PlantContainer';

function Account({ currentUser, db, setDb }){
    const [plants, setPlants] = useState([]);
    const [logs, setLogs] = useState([]);
    const [showAdd, setShowAdd] = useState(false);

    useEffect(() => {
        fetch("http://localhost:4000/plants")
        .then((r) => r.json())
        .then((data) => setPlants(data))
    }, []);

    useEffect(() => {
        fetch("http://localhost:4000/logs")
        .then((r) => r.json())
        .then((data) => setLogs(data))
    }, []);

    function handleShowAddPlant(){
        setShowAdd(!showAdd)
    }

    function handleAddPlant(newPlant){ 
        const updatedPlantList = [...plants, newPlant] 
        setPlants(updatedPlantList) 
    }

    function handleAddLog(newLog){
        const updatedLogList = [...logs, newLog]
        setLogs(updatedLogList)
    }

    function handleDelete(deleteLog){
        const updateLogs = logs.filter((log) => log.id !== deleteLog.id)
        setLogs(updateLogs)
    }

    return(
        <div className="main">
        <p>Account</p>
            <button onClick={handleShowAddPlant}>Add a Plant</button>
            { showAdd ? <CreateNewPlant currentUser={currentUser} handleAddPlant={handleAddPlant} db={db} setDb={setDb}/> : null}
            

            {currentUser ? (
            <PlantContainer currentUser={currentUser} plants={plants} setPlants={setPlants} handleAddPlant={handleAddPlant} logs={logs} setLogs={setLogs} handleAddLog={handleAddLog} handleDelete={handleDelete} db={db} setDb={setDb}/>
            ) : (null) }
        </div>
    )
}

export default Account;