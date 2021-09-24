import React, {ChangeEvent, useContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {TaskContext} from "../context/TaskContext";
import {IDropElement} from "./Board";

const AddTask: React.FC = () => {
    const [taskList, setTaskList] = useContext(TaskContext)

    const [task, setTask] = useState<IDropElement>()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask({id: uuidv4(), name: e.target.value})
    }
    const handleAdd = () => {
        setTaskList([...taskList, task])
    }

    return (
        <div className="addTask padding-x">
            <h2 className="addTask__title">Add a new task</h2>
            <input
                className="addTask__input"
                type="text"
                placeholder="new task"
                value={task?.name}
                onChange={handleChange}
            />
            <button onClick={handleAdd} className="addTask__btn">
                add
            </button>
        </div>
    )
}

export default AddTask;
