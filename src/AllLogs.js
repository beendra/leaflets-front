import React from 'react';
import OneLog from './OneLog';

function AllLogs({ plant, currentUser, handleAddLog, logs, setLogs }){
    const logList = Array.from(logs)
    // console.log(logs)

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
        plantId={plant.id}
        />
        )
    }})

    return (
        <ul className="logs">
            {allLogs}
        </ul>
    )
}


export default AllLogs;