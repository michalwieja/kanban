import React, { useContext} from 'react';
import AddTask from "./AddTask";
import Task from "./Task";
import {TaskContext} from "../context/TaskContext";
import DropPanel from "./DropPanel";

export interface IDropElement {
    id: number | string,
    name: string
}

const Board: React.FC = (): JSX.Element => {

    const [taskList, setTaskList] = useContext(TaskContext)

    return (<>
            <AddTask/>
            <div className="board padding-x">
                <div className="picker">
                    {taskList.map((task: IDropElement) => (<Task key={task.id} task={task}/>))}
                </div>

                <DropPanel title={'open'}/>
                <DropPanel title={'in progress'}/>
                <DropPanel title={'closed'}/>
            </div>
        </>
    )
}

export default Board;


