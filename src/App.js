import "./App.css";
import { HandleDebounce } from "./Components/HandleDebounce";
import { HandleLocalStorage } from "./Components/HandleLocalStorage";

function App() {
  return (
    <div className="App">
      {/* <HandleLocalStorage />{" "} */}
      <HandleDebounce />
    </div>
  );
}

export default App;
