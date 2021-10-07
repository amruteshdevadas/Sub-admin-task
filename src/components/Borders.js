import React from "react";

function Borders() {
  const borderCard = {
    heading: "Border Utilities",
    description:
      " Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework",
    card: [
      {
        type: "border-left-primary",
        detail: ".border-left-primary",
      },
      {
        type: "border-left-primary",
        detail: ".border-left-secondary",
      },
      {
        type: "border-left-success",
        detail: ".border-left-success",
      },
      {
        type: "border-left-info",
        detail: ".border-left-info",
      },
      {
        type: "border-left-warning",
        detail: ".border-left-warning",
      },
      {
        type: "border-left-danger",
        detail: ".border-left-danger",
      },
      {
        type: "border-left-dark",
        detail: ".border-left-dark",
      },
      {
        type: "border-bottom-primary",
        detail: ".border-bottom-primary",
      },
      {
        type: "border-bottom-primary",
        detail: ".border-bottom-secondary",
      },
      {
        type: "border-bottom-success",
        detail: ".border-bottom-success",
      },
      {
        type: "border-bottom-info",
        detail: ".border-bottom-info",
      },
      {
        type: "border-bottom-warning",
        detail: ".border-bottom-warning",
      },
      {
        type: "border-bottom-danger",
        detail: ".border-left-danger",
      },
      {
        type: "border-bottom-dark",
        detail: ".border-bottom-dark",
      },
    ],
  };
  return (
    <div class="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 class="h3 mb-1 text-gray-800">{borderCard.heading}</h1>
      <p class="mb-4">{borderCard.description}</p>

      {/* <!-- Content Row --> */}
      {/* <div class="row"> */}
        {/* <!-- Border Left Utilities --> */}
        {/* <div class="col-lg-6"> */}
          {borderCard.card.map((item) => {
            return (
                // <div class="row">
                <div class="col-lg-6">
              <div className={`card mb-4 py-3 ${item.type}`}>
                <div class="card-body">{item.detail}</div>
              </div>
              </div>
            //   </div>

            );
          })}
        </div>
    //   </div>
    // </div>
  );
}

export default Borders;
