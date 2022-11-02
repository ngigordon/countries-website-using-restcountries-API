import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import RegionPicker from "./components/RegionPicker";
import Countries from "./components/Countries";

const App = () => {
  const [selectedRgion, setSelectedRgion] = useState(null);
  const onRegionPickHandler = (region) => {
    setSelectedRgion(region);
    console.log(selectedRgion);
  };

  const clearSelectedRegion = () => {
    setSelectedRgion(null);
  };

  return (
    <div className="App">
      <NavBar />
      {selectedRgion ? (
        <Countries
          clearSelectedRegion={clearSelectedRegion}
          selectedRgion={selectedRgion}
        />
      ) : (
        <RegionPicker onRegionPickHandler={onRegionPickHandler} />
      )}
    </div>
  );
};

export default App;
