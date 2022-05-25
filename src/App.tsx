import "./App.scss";
import { AppBar } from "./components/universal/appbar";

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
