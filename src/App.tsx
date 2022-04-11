import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { SearchBox } from "./components/searchbox";
import { AppBar } from "./components/appbar";

function App() {
    return (
        <div className="App">
            <header>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <AppBar />
            </header>
        </div>
    );
}

export default App;
