import React from "react";

function Leafcard(props) {
  let card = props.data;
  // console.log(card)
//   const handleSelect = (e) =>{
//     console.log(e.target.id)
// }
  return (
    <>
      {card.map((item) => {
        return <i className={item.type} >{item.header}</i>;
      })}
    </>
  );
}

export default Leafcard;
