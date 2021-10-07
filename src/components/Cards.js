import React, { useState } from "react";
import { NavItem } from "react-bootstrap";
import Cardtype1 from "./Cardtype1";
import Leafcard from "./Leafcard";

function Cards() {
  const cardType1Details = [
    {
      heading: "Earnings(Monthly)",
      subHeading: "$40,000",
      cardBorder: "left-primary",
      cardIcon: "fas fa-calendar",
      cardText: "text-primary",
      progress: false,
    },
    {
      heading: "Earnings(Annual)",
      subHeading: "$215,000",
      cardBorder: "left-success",
      cardIcon: "fa-dollar-sign",
      cardText: "text-success",
      progress: false,
    },
    {
      heading: "Tasks",
      subHeading: "50%",
      cardBorder: "left-info ",
      cardIcon: "fa-clipboard-list",
      cardText: "text-info",
      progress: true,
    },
    {
      heading: "Pending Requests",
      subHeading: 18,
      cardBorder: "left-warning",
      cardIcon: "fa-comments",
      cardText: "text-warning",
      progress: false,
    },
  ];

  const cardType5Details = [
    {
      heading: "Default Card Example",
      subHeading:
        "This card uses Bootstrap's default styling with no utility classNamees added. Global styles are the only things modifying the look and feel of this default card example.",
      type: "card-header",
      collapse: false,
    },
    {
      heading: "Basic Card Example",
      subHeading:
        "The styling for this basic card example is created by using default Bootstrap utility classNamees. By using utility classNamees, the style of the card component can be easily modified with no need for any custom CSS!",
      type: "card-header py-3",
      text: "m-0 font-weight-bold text-primary",
      collapse: false,
    },
    {
      heading: "Dropdown Card Example",
      subHeading:
        "The styling for this basic card example is created by using default Bootstrap utility classNamees. By using utility classNamees, the style of the card component can be easily modified with no need for any custom CSS!",
      type: "card-header py-3 d-flex flex-row align-items-center justify-content-between",
      text: "m-0 font-weight-bold text-primary",
      header: "Dropdown Header:",
      collapse: false,
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
          type: "dropdown-divider",
          header: "",
        },

        {
          type: "dropdown-item",
          header: "Something else here",
        },
      ],
    },
    {
      heading: "Collapsable Card Example",
      subHeading:
        "This is a collapsable card example using Bootstrap's built in collapse functionality. <strong>Click on the card header</strong> to see the card body collapse and expand!",
      type: "card-header py-3 d-flex flex-row align-items-center justify-content-between",
      text: "m-0 font-weight-bold text-primary",
      collapse: "Dropdown Header:",
    },
  ];
  const [drop, setDrop] = useState(false);
  const [collapseCard, setCollapseCard] = useState(true);
  const handleClick = (e) => {
    setDrop(!drop);
  };
  const handleCollapse = () => {
    setCollapseCard(!collapseCard);
    console.log(collapseCard);
  };
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Cards</h1>
      </div>

      <div className="row">
        {cardType1Details.map((item) => {
          return <Cardtype1 data={item} />;
        })}
      </div>

      <div className="row">
        {cardType5Details.map((item) => {
          return (
            <>
              <div className="col-lg-6">
                <div className="card shadow mb-4">
                  {/* <!-- Card Header - Dropdown --> */}
                  <div className={item.type}>
                    {item.collapse ? (
                      <>
                        <div role="button" onClick={handleCollapse}>
                          <h6 className={item.text}>{item.heading}</h6>
                        </div>
                      </>
                    ) : (
                      <h6 className={item.text}>{item.heading}</h6>
                    )}

                    {item.header ? (
                      <div>
                        <i onClick={handleClick} role="button">
                          <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </i>
                        {drop ? (
                          <div className=" dropdown-menu-left shadow animated--fade-in">
                            <div className="dropdown-header">{item.header}</div>
                            <Leafcard data={item.subNav} />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    {item.collapse ? (
                      collapseCard ? (
                        <div className="card-body">{item.subHeading}</div>
                      ) : (
                        ""
                      )
                    ) : (
                      <div className="card-body">{item.subHeading}</div>
                    )}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
