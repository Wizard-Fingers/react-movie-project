import React from "react";
function RightModal({ setOpenRightModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenRightModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="body">
          <div className="inner-body">
            <p>Right</p>
            <p>
              this project is based off the following image with personal style
              changes
            </p>
            {/*<img src={example} alt="example of the project" />*/}
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}
export default RightModal;