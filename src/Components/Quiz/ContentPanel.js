import React from "react";

function ContentPanel(props) {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <div style={{ display: "flex" }}>
          <div className="text text-primary">
            <strong>Name:</strong>{" "}
          </div>
          <div>{props.name}</div>
        </div>
        <div className="text text-primary">
          <strong>Description:</strong>{" "}
        </div>
        <div>{props.description}</div>
      </div>
      <div>
        <img src="" alt="QueryImage" />
      </div>
    </div>
  );
}

export default ContentPanel;
