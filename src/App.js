import Searchbar from "./componants/searchbar/searchbar";
import LeftModel from "./componants/leftModel/left_model";
import RightModal from "./componants/rightModel/right_model";

// setting state
import React, { useState } from "react";
//img
import settings from "./assets/images/settings.png";
import info from "./assets/images/info.png";

import "./App.css";

function App() {
  const [leftModalOpen, setLeftModalOpen] = useState(false);
  if (leftModalOpen) {
    document.body.style.overflow = "hidden";
  }
  const [rightModalOpen, setRightModalOpen] = useState(false);
  if (rightModalOpen) {
    document.body.style.overflow = "hidden";
  }
  return (
    <main>
      <div className="App">
        <header className="Navbar">
          <div className="info">
            <img
              src={info}
              className="openLeftModal"
              onClick={() => {
                setLeftModalOpen(true);
              }}
              alt="information about the project"
            />
          </div>

          <div className="results">
            <h2> Movie Results</h2>
            <h4>for</h4>
          </div>

          <div className="settings">
            <img
              src={settings}
              className="openRightModal"
              onClick={() => {
                setRightModalOpen(true);
              }}
              alt="settings"
            />
          </div>
        </header>

        <div className="searchbar">
          <Searchbar />
          <div className="when-model-open">
            {leftModalOpen && <LeftModel setOpenLeftModal={setLeftModalOpen} />}
            {rightModalOpen && (
              <RightModal setOpenRightModal={setRightModalOpen} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
