import React from "react";
import Nav from "./Nav";
import HogList from "./HogList"; // Import the HogList component
import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      <HogList hogs={hogs} /> {/* Pass hogs to HogList */}
    </div>
  );
}

export default App;
