import React from 'react';
import OneLog from './OneLog';
import AddLogForm from './AddLogForm';
import { useState } from 'react';


function AllLogs({ plant, currentUser, handleAddLog, logs, setLogs, handleDelete }){
    const [showAddLogForm, setShowAddLogForm] = useState(null);

    const logList = Array.from(logs)
    // console.log(logs)

    function handleAddLogForm(){
        setShowAddLogForm(!showAddLogForm);
    }

    // eslint-disable-next-line array-callback-return
    const allLogs = logList.map((log) => {

        if (plant.id && log.plant.id === plant.id ) {

        return (
        <OneLog 
        key={log.id}
        setLogs={setLogs}
        handleAddLog={handleAddLog}
        {...log}
        log={log}
        currentUser={currentUser}
        plant={plant}
        plantId={plant.id}
        handleDelete={handleDelete}
        entry={log.entry}
        />
        )
    }})

    return (
        <ul className="logs">
            <button onClick={handleAddLogForm}>New Log</button>
            { showAddLogForm ?
            <AddLogForm plant={plant} currentUser={currentUser} handleAddLog={handleAddLog}/>
            : null  }
            {allLogs}
        </ul>
    )
}


export default AllLogs;