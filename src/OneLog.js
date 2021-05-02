import React from 'react';
import { useState } from 'react';
import EditLogForm from './EditLogForm';

function OneLog({ currentUser, log, plantId, plant, entry, handleDelete }){
    const [showEditForm, setShowEditForm] = useState(false);
    const [edit, setEdit] = useState(entry);

    function handleEditClick(){
        setShowEditForm(!showEditForm);
    }

        return (
        <div className="each-log">
            <p>{log.date}</p>
            <p>{edit}</p>

            <button onClick={handleEditClick}>Edit</button>
            { showEditForm ? 
            <div className="edit-log">
            <EditLogForm currentUser={currentUser} log={log} plantId={plantId} plant={plant} entry={edit} setEdit={setEdit} edit={edit} handleDelete={handleDelete} showEditForm={showEditForm} setShowEditForm={setShowEditForm}/> 
            </div>
            : null}

        </div>
        )
    
}

export default OneLog;