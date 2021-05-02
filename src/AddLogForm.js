import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddLogForm({ plant, currentUser, handleAddLog }){
    const history = useHistory();
    const [logForm, setLogForm] = useState({
        date: "",
        entry: "",
        plant_id: plant.id
    });

    function handleSubmit(e){
        e.preventDefault()

        setLogForm ({ 
            date: "", 
            entry: ""
        })

        fetch('http://localhost:4000/logs', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(logForm)
        })
        .then((r) => r.json())
        .then((data) => {
            localStorage.setItem("logId", data.id)
            // console.log("LOCAL", localStorage.getItem("postId"));
            handleAddLog(data)
            // console.log(post)
            history.push('/my-account')
        })
    }

    function handleChange(e){
        setLogForm({...logForm, [e.target.name]: e.target.value})
    }

    return(
        <div>
            <p>New Log</p>
                <form onSubmit={handleSubmit}>
                    <label>Date: </label>
                        <input
                            type="text"
                            name="date"
                            value={logForm.date}
                            onChange={handleChange}
                        />
                    <label>Entry: </label>
                        <input
                            type="textarea"
                            name="entry"
                            value={logForm.entry}
                            onChange={handleChange}
                        />
                        <input type="submit" value="Submit" /> 
                </form> 
        </div>
    )
}

export default AddLogForm;