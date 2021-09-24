import React, {useContext, useState} from 'react';
import Task from "./Task";
import {IDropElement} from "./Board";
import {useDrop} from "react-dnd";
import {TaskContext} from "../context/TaskContext";

const DropPanel: React.FC<{ title: string }> = ({title}) => {
    const [taskList, setTaskList] = useContext(TaskContext)

    const [task, setTask] = useState<IDropElement[]>([]);

    const [{isOver}, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => dropTask(item as IDropElement),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    }))

    const dropTask = (item: IDropElement) => {
        setTask(task => [...task, item])
        setTaskList((taskList: IDropElement[]) => taskList.filter(task => task.id !== item.id))
    }

    return (
        <div className={`panel ${isOver && "hover"}`} ref={drop}>
            <div className="panel__title">{title}</div>
            {task.map(el => (<Task key={el.id} task={el}/>))}
        </div>
    )
}

export default DropPanel;
