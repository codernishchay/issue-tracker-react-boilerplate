import React  from "react";
import "./issue-card.css";
export default function IssueCard({}) {
  
  const handleClose = () => {
      //TODO : show Closed tag on card if clicked and remove close button from card 
  };

  const handleDelete = () => {
    // TODO : Delete current card on clicked 
  };

  return (
    <div className="card-container" data-tag="card-container">
      {issue !== undefined && (
        <ul classname="issue-form-list">
          <li className="issue-id"> Issue ID : "Add Issue ID here"</li>
      
      
              <div className="close-tag" data-tag="close-tag">
                Show Closed here, if close button clicked 
              </div>
      
          <h2 data-tag="issue-description">"Show description here"</h2>

          <p className="severity-name" data-tag="assigned-to">
            {/* TODO :Show severity, and assigned to here  */}
          </p>

          <li>
               {/* Remove close button , once clicked  */}
              <button
                className="close-btn"
                data-tag="close-btn"
                onClick={handleClose}
              >
                Close
              </button>
            {"  "}
            <button
              className="delete-btn"
              data-tag="delete-btn"
              onClick={handleDelete}
            >
              Delete
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
