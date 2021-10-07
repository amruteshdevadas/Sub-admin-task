import React from "react";
function ColorLeaf(props) {
  const color = props.data;
  return color.map((item) => {
    return <p className={item.type}> {item.detail}</p>;
  });
}

export default ColorLeaf;
