import React from "react";
import Brandbutton from "./Brandbutton";
import Buttoncard from "./Buttoncard";
import LeafBrandBotton from "./LeafBrandBotton";

function Buttons() {
  const Buttons = [
    {
      heading: "Circle Buttons",
      subHeading:
        " Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!",
      type: [
        {
          type: ".btn-circle",
          detail: "",
        },
        {
          type: ".btn-circle .btn-sm",
          detail: "btn-sm",
        },
        {
          type: ".btn-circle .btn-lg",
          detail: "btn-lg",
        },
      ],
    },
    {
      heading: "Brand Buttons",
      subHeading:
        " Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.",
      details:
        "You can create more custom buttons by adding a new color variable in the variables.scss file and then using the Bootstrap button variant mixin to create a new style,as demonstrated in the _buttons.scss file.",
    },
    {
      heading: "Split Buttons with Icon",
      subHeading:
        " Works with any button colors, just use the <code>.btn-icon-split</code> class and the markup in the examples below. The examples below also use the <code>.text-white-50</code helper class on the icons for additional styling, but it is not required",
      split: [
        {
          type: "btn btn-primary btn-icon-split",
          text: "text-white",
          detail: "Split Button Primary",
          icon: "fas fa-flag",
        },
        {
          type: "btn btn-success btn-icon-split",
          text: "text-white",
          detail: "Split Button Success",
          icon: "fas fa-check",
        },
        {
          type: "btn btn-info btn-icon-split",
          text: "text-white",
          detail: "Split Button Info",
          icon: "fas fa-info-circle",
        },
        {
          type: "btn btn-warning btn-icon-split",
          text: "text-white",
          detail: "Split Button Warning",
          icon: "fas fa-exclamation-triangle",
        },
        {
          type: "btn btn-danger btn-icon-split",
          text: "text-white",
          detail: "Split Button Danger",
          icon: "fas fa-trash",
        },
        {
          type: "btn btn-secondary btn-icon-split",
          text: "text-white",
          detail: "Split Button Secondary",
          icon: "fas fa-arrow-right",
        },
        {
          type: "btn btn-light btn-icon-split",
          text: "text-white",
          detail: "Split Button Light",
          icon: "fas fa-arrow-right",
        },
        {
          type: "btn btn-primary btn-icon-split btn-sm",
          text: "text-white",
          detail: "Split Button Light",
          icon: "fas fa-flag",
        },

        {
          type: "btn btn-primary btn-icon-split btn-lg",
          text: "text-white",
          detail: "Split Button Large",
          icon: "fas fa-flag",
        },
      ],
    },
  ];

  return (
    <div class="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 class="h3 mb-4 text-gray-800">Buttons</h1>
      <div class="row">
        {/* <!-- Circle Buttons --> */}
        {Buttons.map((item) => {
          return (
            <div className="col-lg-6">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    {item.heading}
                  </h6>
                </div>
                <div class="card-body">
                  <p>{item.subHeading}</p>
                  {item.type ? <Buttoncard data={item.type} /> : " "}
                  {item.details ? (
                    <>
                      {" "}
                      <p> {item.details} </p> <Brandbutton />{" "}
                    </>
                  ) : (
                    " "
                  )}
                  {item.split ? <LeafBrandBotton data={item.split} /> : ""}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Buttons;
