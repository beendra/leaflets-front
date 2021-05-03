import React from 'react'

const DataCard = ({ id, image, common_name, scientific_name, lighting, watering, humidity, pet_friendly }) => {
    return (
        <div className="each-db-card">
            <img src={image} alt={common_name} className="db-card-image"/>
            <p>{common_name}</p>
            <p className="sci-name">{scientific_name}</p>
            {/* <p>{lighting}</p>
            <p>{watering}</p>
            <p>{humidity}</p>
            <p>{pet_friendly}</p> */}
        </div>
    )
}

export default DataCard;
