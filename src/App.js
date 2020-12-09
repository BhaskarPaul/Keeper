import React from "react";
import Header from "./assets/components/Header";
import "./App.css";
import Footer from "./assets/components/Footer";
import Note from "./assets/components/Note";
import notes from "./assets/data/notes";
import Addtodo from "./assets/components/Addtodo";

notes.reverse();
const len = notes.length;

function App() {

    return (
        <div className="App">
            <Header />
            <div className="note-main">
                {notes.map((v, i) => (
                    <Note
                        title={v.title}
                        content={v.content}
                        id={len - i - 1}
                    />
                ))}
            </div>
            <div className='todo'>
                <Addtodo />
            </div>
            <Footer />
        </div>
    );
}

export default App;
