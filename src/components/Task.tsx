import React from 'react';
import {useDrag} from "react-dnd";
import {IDropElement} from "./Board";


interface ITask {
    task: IDropElement
}

const Task: React.FC<ITask> = ({task}): JSX.Element => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'task',
        item: task,
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
            style={{opacity: isDragging ? 0 : 1}}
        >
            {task.name}
            <button className="task__btn" onClick={handleRemove}>x</button>
        </div>
    )
}

export default Task;
