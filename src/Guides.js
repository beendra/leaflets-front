import React from 'react';
import DataCard from './DataCard';

function Guides({ db, setDb }){
    const eachCard = db.map((card) => {
        return (
            <>
            <DataCard 
                key={card.id}
                id={card.id}
                image={card.image}
                common_name={card.common_name}
                scientific_name={card.scientific_name}
                lighting={card.lighting}
                watering={card.watering}
                humidity={card.humidity}
                pet_friendly={card.pet_friendly}
                />
            </>
        )
    })
    return (
        <div className="db-container">
        {eachCard}
        </div>
    )
}

export default Guides;