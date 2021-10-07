import React, { useState } from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";
import Leafcard from "./Leafcard";

function Animation() {
  const [navDrop, setNavDrop] = useState(true);
  const [buttonDrop, setButtonDrop] = useState(false);

  const handleNavDrop = (e) => {
    console.log(e.target.id);
    // let cardData =animation.find(()=>{

    // })
    // console.log(cardData)
    setNavDrop(!navDrop);
    // console.log("im clicked from navbar ")
  };
  const handleButtonDrop = (e) => {
    setButtonDrop(!buttonDrop);
    // console.log("im clicked from button"+buttonDrop)
  };

  const animation = {
    heading: "Animation Utilities",
    description:
      "Bootstrap's default utility classNamees can be found on the official page. The custom utilities below were created to extend this theme past the default utility classNamees built into Bootstrap's framework.",
    card: [
      {
        header: "Grow In Animation Utilty",
        description: ".animated--grow-in",
        dropdownNabar: "Navbar Dropdown Example",
        navBarHeader: "Navbar",
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
        footerDescription:
          "Note: This utility animates the CSS transform property, meaning it will override any existing transforms on an element being animated! In this theme, the grow in animation is only being used on dropdowns within the navbar.",
      },
      {
        header: "Fade In Animation Utilty",
        description: ".animated--grow-in",
        dropdownNavbar: "Navbar Dropdown Example",
        navBarHeader: "Navbar",
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
        dropDown: "Dropdown Button Example:",
        subDropDown: [
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
        footerDescription:
          " Note: This utility animates the CSS opacity property, meaning it will override any existing opacity on an element being animated!",
      },
    ],
  };
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-1 text-gray-800">{animation.heading}</h1>
      <p className="mb-4">{animation.description}</p>

      {/* <!-- Content Row --> */}
      <div className="row">
        {animation.card.map((item, index) => {
          return (
            <div className="col-lg-6">
              <div className="card position-relative">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    {item.header}
                  </h6>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <code>{item.description}</code>
                  </div>
                  <div className="small mb-1">{item.dropdownNavbar}</div>
                  <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                    <a className="navbar-brand">{item.navBarHeader}</a>
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item dropdown">
                        <i id={index} role="button" onClick={handleNavDrop}>
                          {item.dropdownHeader}
                        </i>
                        {navDrop ? (
                          <div
                            className="dropdown-menu-right animated--fade-in"
                            aria-labelledby="navbarDropdown"
                          >
                            <Leafcard data={item.subNav} />
                          </div>
                        ) : (
                          " "
                        )}
                      </li>
                    </ul>
                  </nav>
                  {item.dropDown ? (
                    <>
                      <div className="small mb-1">{item.dropDown}</div>
                      <div className="dropdown mb-4">
                        <button
                          className="btn btn-primary dropdown-toggle"
                          type="button"
                          onClick={handleButtonDrop}
                        >
                          {item.dropdownHeader}
                        </button>
                        {buttonDrop ? (
                          <div
                            className="animated--fade-in"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <Leafcard data={item.subDropDown} />
                          </div>
                        ) : (
                          " "
                        )}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <p className="mb-0 small">{item.footerDescription}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Animation;
