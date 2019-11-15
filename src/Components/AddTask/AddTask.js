import React from 'react';

const AddTask = ({key,text,removeTask}) => {

    return (
        <div key={key} className="div">
            <p>{text}</p>
            <button onClick={removeTask} className="fas fa-trash-alt"> ></button>

        </div>
    );
};



export default AddTask;