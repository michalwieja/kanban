import React from 'react';
import AddTask from "./AddTask";
import DropPanel from "./DropPanel";

export interface IDropElement {
    id: string | null,
    name: string,
    status: string
}

enum title {
    open = 1,
    inProgress = 2,
    closed = 3
}


const Board: React.FC = (): JSX.Element => {

    return (<>
            <AddTask/>
            <div className="board padding-x">
                <DropPanel title={'open'}/>
                <DropPanel title={'in progress'}/>
                <DropPanel title={'closed'}/>
            </div>
        </>
    )
}

export default Board;


