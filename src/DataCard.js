import React from 'react'

const DataCard = ({ id, image, common_name, scientific_name, lighting, watering, humidity, pet_friendly }) => {
    return (
        <div className="each-db-card">
            <img src={image} alt={common_name} className="db-card-image"/>
            <h3>{common_name}</h3>
            <p className="sci-name">{scientific_name}</p>
                {/* <div className="info"> */}
                    <p style={ {fontWeight: 'bold'} }>Lighting:</p>
                        <p>{lighting}</p>
                    <p style={ {fontWeight: 'bold'} }>Watering:</p>
                        <p>{watering}</p>
                    <p style={ {fontWeight: 'bold'} }>Humidity:</p>
                        <p>{humidity}</p>
                    {/* <p style={ {fontWeight: 'bold'} }>Pet Friendly:</p>
                        <p>if {pet_friendly} ? </p>*/} 
                {/* </div>   */}
            <hr />
        </div>
    )
}

export default DataCard;
