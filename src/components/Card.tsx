import React from 'react';
import {useDrag} from "react-dnd";


interface ITask {
    task: {
        id: number,
        color: string
    }
}

const Card: React.FC<ITask> = ({task}): JSX.Element => {
    const [{isDragging},drag] = useDrag(()=>({
        type:'task',
        item:{id:task.id, color: task.color},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        <div ref={drag} className={`task ${task.color}`} style={{ backgroundColor: isDragging ? 'red': ''}}>{task.id}</div>
    )
}

export default Card;
