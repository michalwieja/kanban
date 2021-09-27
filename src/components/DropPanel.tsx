import React, {useContext} from 'react';
import Task from "./Task";
import {IDropElement} from "./Board";
import {useDrop} from "react-dnd";
import {TaskContext} from "../context/TaskContext";

const DropPanel: React.FC<{ title: string }> = ({title}) => {
    const [taskList, setTaskList] = useContext(TaskContext)


    const [{isOver}, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => dropTask(item as IDropElement),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    }))

    const dropTask = (item: IDropElement) => {

        setTaskList((prev: IDropElement[]) => prev.map((task: IDropElement) => {
            if (task.id === item.id) {
                return {...task, status: title}
            }
            return task
        }))

    }

    const filteredTask = taskList.filter((el: IDropElement) => el.status === title)

    return (
        <div className={`panel ${isOver && "hover"}`} ref={drop}>
            <div className="panel__title">{title}</div>
            {filteredTask.map((el: IDropElement) => (<Task key={el.id} task={el}/>))}
        </div>
    )
}

export default DropPanel;
