import React from 'react';
import {useDrag} from "react-dnd";
import {IDropElement} from "./Board";


interface ITask {
    task: IDropElement
}

const Task: React.FC<ITask> = ({task}): JSX.Element => {
    const [{isDragging},drag] = useDrag(()=>({
        type:'task',
        item:{id:task.id, name: task.name},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        <div ref={drag} className="task" style={{ display: isDragging ? 'none': ''}}>{task.name}</div>
    )
}

export default Task;
