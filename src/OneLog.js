import React from 'react';

function OneLog({ currentUser, log, plantId }){
         return (
        <div className="each-log">
            <p>{log.date}</p>
            <p>{log.entry}</p>
        </div>
        )
    
}

export default OneLog;