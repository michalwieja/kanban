import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Board from "./components/Board";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {TaskProvider} from "./context/TaskContext";

const App = (): JSX.Element => {
    return (
        <TaskProvider>
            <DndProvider backend={HTML5Backend}>
                <div className="app">
                    {/*<Header/>*/}
                    <Board/>
                    {/*<Footer/>*/}
                </div>
            </DndProvider>
        </TaskProvider>
    );
}

export default App;
