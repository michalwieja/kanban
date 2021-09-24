import React from 'react';
import {useDrag} from "react-dnd";
import {IDropElement} from "./Board";


interface ITask {
    task: IDropElement
}

const Task: React.FC<ITask> = ({task}): JSX.Element => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'task',
        item: {id: task.id, name: task.name},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const handleRemove = () => {
        console.warn('x');

    }
    return (
        <div
            ref={drag}
            className="task"
            style={{display: isDragging ? 'none' : ''}}
        >
            {task.name}
            <button className="task__btn" onClick={handleRemove}>x</button>
        </div>
    )
}

export default Task;
