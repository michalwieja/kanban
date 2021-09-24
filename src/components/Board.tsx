import React, {useState} from 'react';
import Card from "./Card";
import {useDrop} from "react-dnd";


interface ITask {
    id: number,
    color: string
}

const task_list: ITask[] = [
    {id: 1, color: 'pink'},
    {id: 2, color: 'lightblue'},
    {id: 3, color: 'coral'},
]


const Board: React.FC = (): JSX.Element => {

    const [open, setOpen] = useState([]);
    const [{isOver},drop] = useDrop(()=>({
        accept: "task",
    }))




    return (
        <div className="board padding-x">
            <div className="picker">
                {task_list.map(task => (<Card key={task.id} task={task}/>))}
            </div>
            <div className="drop">open</div>
        </div>
    )
}

export default Board;


