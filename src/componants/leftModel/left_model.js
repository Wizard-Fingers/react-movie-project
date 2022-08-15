import React from "react";
import "./left_model.css";
// import example from "./assets/images/example.png";

function LeftModal({ setOpenLeftModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenLeftModal(false);
            }}
          >
            X
          </button>
        </div>
              <div className="body">
                  <div className="inner-body">
                  <p>Left</p>
                  <p>this mobile-first project is based off the following image with personal style changes</p>
                      {/*<img src={example} alt="example of the project" />*/}
                  </div>
        </div>
        <div className="footer">
        </div>
      </div>
    </div>
  );
}
export default LeftModal;
