import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Board from "./components/Board";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import AddTask from "./components/AddTask";

const App = (): JSX.Element => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="app">
                <Header/>
                <AddTask/>
                <Board/>
                <Footer/>
            </div>
        </DndProvider>
    );
}

export default App;
