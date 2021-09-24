import React, {ChangeEvent, useState} from 'react';
import {useDrop} from "react-dnd";
import AddTask from "./AddTask";
import { v4 as uuidv4 } from 'uuid';
import Task from "./Task";

export interface IDropElement {
    id: number | string,
    name: string
}

const Board: React.FC = (): JSX.Element => {

    const [taskList, setTaskList] = useState<IDropElement[]>([
        {id: uuidv4(), name: 'apple'},
        {id: uuidv4(), name: 'lightblue'},
        {id: uuidv4(), name: 'coral'},]);

    const [open, setOpen] = useState<IDropElement[]>([]);

    const [task, setTask] = useState<IDropElement>()

    const [{isOver}, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => dropTask(item as IDropElement),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    }))


    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    }
    const handleAdd = () => {
        setTaskList([...taskList, {id:1, name:'dupa'}])
    }

    const dropTask = (item: IDropElement) => {
        setOpen(open => [...open, item])
        setTaskList(taskList => taskList.filter(task => task.id !== item.id))
    }

    return (<>
            {/*<AddTask/>*/}

            <div className="board padding-x">
                <div className="picker">
                    <input type="text" placeholder="new task" value={task?.name} onChange={handleChange}/>
                    <button onClick={handleAdd}>add</button>


                    {taskList.map(task => (<Task key={task.id} task={task}/>))}
                </div>
                <div className={`drop ${isOver && "hover"}`} ref={drop}>
                    {open.map(el => (<Task key={el.id} task={el}/>))}
                </div>

            </div>
        </>
    )
}

export default Board;


