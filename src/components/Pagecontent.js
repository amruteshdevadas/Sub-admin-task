import React from "react";
import Cardtype1 from "./Cardtype1";

function Pagecontent() {
  const cardType1Detils = [
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
  const cardType2Details = [
    {
      heading: "Server Migration",
      progress: 20,
      subHeading: "20%",
      progressColor: "danger",
    },
    {
      heading: "Sales Tracking",
      progress: 40,
      subHeading: "40%",
      progressColor: "warning",
    },
    {
      heading: "Customer Database",
      progress: 60,
      subHeading: "60%",
      progressColor: "",
    },
    {
      heading: "Payout Details",
      progress: 80,
      subHeading: "80%",
      progressColor: "info",
    },
    {
      heading: "Account Setup",
      progress: 100,
      subHeading: "100%",
      progressColor: "success",
    },
  ];
  const colorSystem = [
    {
      color: "primary",
      colorNumber: "#1cc88a",
      text: "white",
    },
    {
      color: "success",
      colorNumber: "#4e73df",
      text: "white",
    },
    {
      color: "info",
      colorNumber: "#4e73df",
      text: "white",
    },
    {
      color: "warning",
      colorNumber: "#f6c23e",
      text: "white",
    },
    {
      color: "danger",
      colorNumber: "#e74a3b",
      text: "white",
    },
    {
      color: "secondary",
      colorNumber: "#858796",
      text: "white",
    },
    {
      color: "light",
      colorNumber: "#f8f9fc",
      text: "black",
    },
    {
      color: "dark",
      colorNumber: "#5a5c69c",
      text: "white",
    },
  ];

  const cardType3Details = [
    {
      Heading: "Illustrations",
      descriptionPart1:
        "Add some quality, svg illustrations to your project courtesy of",
      descriptionPart2: "unDraw",
      descriptionPart3:
        ", a constantly updated collection of beautiful svg images that you can use completely free and without attribution!",
      descriptionPart4: "Browse Illustrations on unDraw &rarr",
    },
  ];

  const cardType4Details = [
    {
      Heading: "Development Approach",
      descriptionPart1:
        " SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.",
      descriptionPart2:
        "Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.",
    },
  ];
  return (
    <div>
      <div class="container-fluid">
        {/* <!-- Page Heading --> */}
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
          <a
            href="#"
            class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
          </a>
        </div>

        {/* <!-- Content Row --> */}
        <div class="row">
          {cardType1Detils.map((item) => {
            return <Cardtype1 data={item} />;
          })}
        </div>

        {/* <!-- Content Row --> */}

        <div class="row">
          {/* <!-- Area Chart --> */}
          <div class="col-xl-8 col-lg-7">
            <div class="card shadow mb-4">
              {/* <!-- Card Header - Dropdown --> */}
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">
                  Earnings Overview
                </h6>
                <div class="dropdown no-arrow">
                  <a
                    class="dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <div class="dropdown-header">Dropdown Header:</div>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Card Body --> */}
              <div class="card-body">
                <div class="chart-area">
                  <canvas id="myAreaChart"></canvas>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Pie Chart --> */}
          <div class="col-xl-4 col-lg-5">
            <div class="card shadow mb-4">
              {/* <!-- Card Header - Dropdown --> */}
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">
                  Revenue Sources
                </h6>
                <div class="dropdown no-arrow">
                  <a
                    class="dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <div class="dropdown-header">Dropdown Header:</div>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Card Body --> */}
              <div class="card-body">
                <div class="chart-pie pt-4 pb-2">
                  <canvas id="myPieChart"></canvas>
                </div>
                <div class="mt-4 text-center small">
                  <span class="mr-2">
                    <i class="fas fa-circle text-primary"></i> Direct
                  </span>
                  <span class="mr-2">
                    <i class="fas fa-circle text-success"></i> Social
                  </span>
                  <span class="mr-2">
                    <i class="fas fa-circle text-info"></i> Referral
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Content Row --> */}
        <div class="row">
          {/* <!-- Content Column --> */}
          <div class="col-lg-6 mb-4">
            {/* <!-- Project Card Example --> */}
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
              </div>

              <div class="card-body">
                {cardType2Details.map((item) => {
                  return (
                    <>
                      <h4 className="small font-weight-bold">
                        {item.heading}{" "}
                        <span class="float-right">{item.subHeading}</span>
                      </h4>
                      <div className="progress mb-4">
                        <div
                          className={`progress-bar bg-${item.progressColor}`}
                          role="progressbar"
                          style={{ width: item.subHeading }}
                          aria-valuenow={item.progress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            {/* <!-- Color System --> */}
            <div class="row">
              {colorSystem.map((item) => {
                return (
                  <div class="col-lg-6 mb-4">
                    <div
                      className={`card bg-${item.color} text-${item.text} shadow`}
                    >
                      <div class="card-body">
                        {item.color.charAt(0).toUpperCase() +
                          item.color.slice(1)}
                        <div className={`text-${item.text}-50 small`}>
                          {item.colorNumber}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div class="col-lg-6 mb-4">
            {/* <!-- Illustrations --> */}

            {cardType3Details.map((item) => {
              return (
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      {item.Heading}
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="text-center">
                      <img
                        class="img-fluid px-3 px-sm-4 mt-3 mb-4"
                        style={{ width: "25rem" }}
                        src="img/undraw_posting_photo.svg"
                        alt="..."
                      />
                    </div>
                    <p>
                      {item.descriptionPart1}
                      <a
                        target="_blank"
                        rel="nofollow"
                        href="https://undraw.co/"
                      >
                        {item.descriptionPart2}
                      </a>
                      {item.descriptionPart3}
                    </p>
                    <a target="_blank" rel="nofollow" href="https://undraw.co/">
                      {item.descriptionPart4} ;
                    </a>
                  </div>
                </div>
              );
            })}

            {/* <!-- Approach --> */}
            {cardType4Details.map((item) => {
              return (
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      {item.Heading}
                    </h6>
                  </div>
                  <div class="card-body">
                    <p>{item.descriptionPart1}</p>
                    <p class="mb-0">{item.descriptionPart2}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagecontent;
