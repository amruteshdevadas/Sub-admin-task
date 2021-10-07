import React, { useState } from "react";
import Leafcard from "./Leafcard";
import Progressleafcard from "./Progressleafcard";
import Rotateleaf from "./Rotateleaf";

function Other() {
  const [drop, setDrop] = useState(false);
  const handleClick = () => {
    setDrop(!drop);
  };
  const heading =[
    {
      
    }
  ]
  const otherDetails = [
    {
      header: "Overflow Hidden Utilty",
      detail:
        "Use <code>.o-hidden</code> to set the overflow property of any element to hidden.",
    },
    {
      header: "Progress Small Utility",
      detail:
        " Use the <code>.progress-sm</code> class along with <code>.progress</code>.",
      progressBars: [
        {
          type: "progress mb-4",
          detail: "Normal Progress Bar",
        },
        {
          type: "progress progress-sm mb-2",
          detail: "Small Progress Bar",
        },
      ],
    },
    {
      header: "Dropdown - No Arrow",
      detail:
        "Add the <code>.no-arrow</code> class alongside the <code>.dropdown</code>",
      dropdownHeader: "Dropdown",
      subNav: [
        {
          type: "dropdown-item",
          header: "Action",
        },
        {
          type: "dropdown-item",
          header: "Another action",
        },
        {
          type: "dropdown-item",
          header: "Something else here",
        },
      ],
    },
    {
      header: "Rotation Utilities",
      rotate: [
        {
          type: "bg-primary text-white p-3 rotate-15 d-inline-block my-4",
          header: ".rotate-15",
        },
        {
          type: "bg-primary text-white p-3 rotate-n-15 d-inline-block my-4",
          header: ".rotate-n-15",
        },
      ],
    },
  ];
  return (
    <div class="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 class="h3 mb-1 text-gray-800">Other Utilities</h1>
      <p class="mb-4">
        Bootstrap's default utility classes can be found on the official{" "}
        <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
        page. The custom utilities below were created to extend this theme past
        the default utility classes built into Bootstrap's framework.
      </p>

      {/* <!-- Content Row --> */}
      <div class="row">
        <div class="col-lg-6">
          {/* <!-- Overflow Hidden --> */}

          {otherDetails.map((item) => {
            return (
              <div class="card mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    {item.header}
                  </h6>
                </div>
                {item.progressBars ? (
                  <>
                    <Progressleafcard data={item.progressBars} />
                  </>
                ) : (
                  ""
                )}
                {item.dropdownHeader ? (
                  <div class="card-body">
                    <div class="dropdown no-arrow mb-4">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={handleClick}
                      >
                        {item.header}
                      </button>
                      {drop ? (
                        <div aria-labelledby="dropdownMenuButton">
                          <Leafcard data={item.subNav} />
                        </div>
                      ) : (
                        " "
                      )}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {item.detail ? <div class="card-body">{item.detail}</div> : " "}
                {item.rotate ? (
                  <div class="card-body text-center">
                    <Rotateleaf data={item.rotate} />
                  </div>
                ) : (
                  " "
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Other;
