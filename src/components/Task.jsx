import React from 'react';

function Task({ inputText, handleDelete, id, handleEdit }) {
    return (
        <div className='display'>
            <div className='task'>  {inputText}</div>
            <div> <button className="deletebtn" onClick={() => handleDelete(id)}>Delete</button> </div>
            <div> <button className="editbtn" onClick={() => handleEdit(id)}>Edit</button> </div>
        </div>
    )
}

export default Task;