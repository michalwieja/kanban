import React, {createContext, useState} from 'react';
import {v4 as uuidv4} from "uuid";
import {IDropElement} from "../components/Board";

export const TaskContext = createContext<any>([[], () => null])

export const TaskProvider = (props: any) => {

    const [taskList, setTaskList] = useState<IDropElement[]>([
        {id: uuidv4(), name: 'apple', status: 'open'},
        {id: uuidv4(), name: 'lightblue', status:'closed'},
        {id: uuidv4(), name: 'coral', status: 'open'}
    ]);

    return (
        <TaskContext.Provider value={[taskList, setTaskList]}>
            {props.children}
        </TaskContext.Provider>
    )
}

