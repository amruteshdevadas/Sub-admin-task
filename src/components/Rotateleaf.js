import React from "react";

function Rotateleaf(props) {
  const rotate = props.data;
  return rotate.map((item) => {
    return (
      <>
        <div className={item.type}>{item.header}</div>
        <hr />
      </>
    );
  });
}

export default Rotateleaf;
