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
        item:{id:task.id},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        <div ref={drag} className={task.color} style={{ border: isDragging ? '1px solid pink': ''}}>{task.id}</div>
    )
}

export default Card;
