import React from "react";

function Leafbutton(props) {
  console.log(props.data);
  const buttonData = [
    {
      style: "primary",
      icon: "fab fa-facebook-f",
    },
    {
      style: "success",
      icon: "fas fa-check",
    },
    {
      style: "info",
      icon: "fas fa-info-circle",
    },
    {
      style: "warning",
      icon: "fas fa-exclamation-triangle",
    },
    {
      style: "danger",
      icon: "fas fa-trash",
    },
  ];
  return (
    <>
      {buttonData.map((item) => {
        return (
          <a
            href="#"
            className={`btn btn-${item.style} ${props.data}  btn-circle`}
          >
            <i className={item.icon}></i>
          </a>
        );
      })}
    </>
  );
}

export default Leafbutton;
