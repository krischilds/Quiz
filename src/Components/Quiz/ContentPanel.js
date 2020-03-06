import React from "react";
import PropTypes from "prop-types";

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

ContentPanel.propTypes = {};

export default ContentPanel;
