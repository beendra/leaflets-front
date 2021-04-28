import React from 'react';
import CreateNewPlant from './CreateNewPlant';
import PlantContainer from './PlantContainer';

function Account(){
    return(
        <div className="main">
        <p>Account</p>
        <CreateNewPlant />
        <PlantContainer />
        </div>
    )
}

export default Account;