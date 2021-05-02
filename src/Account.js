import React from 'react';
import { useState, useEffect } from 'react';
import CreateNewPlant from './CreateNewPlant';
import PlantContainer from './PlantContainer';

function Account({ currentUser }){
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

    return(
        <div className="main">
        <p>Account</p>
            <button onClick={handleShowAddPlant}>Add a Plant</button>
            { showAdd ? <CreateNewPlant currentUser={currentUser} handleAddPlant={handleAddPlant}/> : null}
            

            {currentUser ? (
            <PlantContainer currentUser={currentUser} plants={plants} setPlants={setPlants} handleAddPlant={handleAddPlant} logs={logs} setLogs={setLogs} handleAddLog={handleAddLog}/>
            ) : (null) }
        </div>
    )
}

export default Account;