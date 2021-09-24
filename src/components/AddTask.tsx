import React, {ChangeEvent, useContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {TaskContext} from "../context/TaskContext";

const AddTask: React.FC = () => {
        const [taskList, setTaskList] = useContext(TaskContext)

        const [name, setName] = useState<string>()

        const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value)
        }
        const handleAdd = () => {
            console.warn('add', name);
            setTaskList([...taskList, {id: uuidv4(), name}])

        }

        return (

            <div className="addTask padding-x">
                <h2>test</h2>
                <input type="text" placeholder="new task" value={name} onChange={handleInput}/>
                <button onClick={handleAdd}>add</button>
            </div>

        )
    }
;

export default AddTask;
