import React from "react";

function BoxComponent(props) {
  const { color } = props;
  return (
    <div>
      <div className="box" style={{ backgroundColor: color }}>
        Box
      </div>
    </div>
  );
}

export default BoxComponent;
