import React from 'react';
import Logs from './Logs';
import AddLogForm from './AddLogForm';

function PlantInfo({ plant }){
    return(
        <div className="one-plant">
        <p>{plant.plant_name}</p>
        <img src={plant.image} alt={plant.plant_name}/>
        <Logs plant={plant}/>
        <AddLogForm plant={plant}/>
        </div>
    )
}

export default PlantInfo;