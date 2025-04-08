import { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  const [icaoCode, setIcaoCode] = useState("");

  function handleIcaoChange(event: ChangeEvent<HTMLInputElement>) {
    setIcaoCode(event.target.value);
  }

  return (
    <>
      <h1>Aviator App</h1>
      <div className="search-container">
        <input
          maxLength={4}
          placeholder="ICAO Code"
          type="text"
          value={icaoCode}
          onChange={handleIcaoChange}
        />
        <button>Submit</button>
      </div>
    </>
  );
}

export default App;
