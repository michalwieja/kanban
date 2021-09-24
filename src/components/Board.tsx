import React, {useState} from 'react';
import Card from "./Card";
import {useDrop} from "react-dnd";

interface IDropElement {
    id: number,
    color: string
}


const Board: React.FC = (): JSX.Element => {

    const [taskList, setTaskList] = useState<IDropElement[]>([
        {id: 1, color: 'pink'},
        {id: 2, color: 'lightblue'},
        {id: 3, color: 'coral'},]);

    const [open, setOpen] = useState<IDropElement[]>([]);

    const [{isOver}, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => dropTask(item as IDropElement),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    }))

    const dropTask = (item: IDropElement) => {
        setOpen(open => [...open, item])
        setTaskList(taskList => taskList.filter(task => task.id !== item.id))

    }

    return (
        <div className="board padding-x">
            <div className="picker">
                {taskList.map(task => (<Card key={task.id} task={task}/>))}
            </div>
            <div className={`drop ${isOver && "hover"}`} ref={drop}>
                {open.map(el => (<Card key={el.id} task={el}/>))}
            </div>

        </div>
    )
}

export default Board;


