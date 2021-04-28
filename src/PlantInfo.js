import React from 'react';
import Logs from './Logs';
import AddLogForm from './AddLogForm';

function PlantInfo(){
    return(
        <div className="one-plant">
        <p>One Plant's Information</p>
        <Logs />
        <AddLogForm />
        </div>
    )
}

export default PlantInfo;