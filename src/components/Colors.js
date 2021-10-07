import React from "react";
import ColorLeaf from "./ColorLeaf";

function Colors() {
  const colorCard = {
    heading: "Buttons",
    description:
      " Bootstrap's default utility classes can be found on the officialBootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.",
    card: [
      {
        header: "Custom Text Color Utilities",
        subcard: [
          {
            detail: ".text-gray-100",
            type: "text-gray-100 p-3 bg-dark ",
          },
          {
            detail: ".text-gray-200",
            type: "text-gray-200 p-3 bg-dark ",
          },
          {
            detail: ".text-gray-300",
            type: "text-gray-300 p-3 bg-dark ",
          },
          {
            detail: ".text-gray-400",
            type: "text-gray-400 p-3 bg-dark",
          },
          {
            detail: ".text-gray-400",
            type: "text-gray-400 p-3 ",
          },
          {
            detail: ".text-gray-500",
            type: "text-gray-500 p-3 ",
          },
          {
            detail: ".text-gray-600",
            type: "text-gray-600 p-3 ",
          },
          {
            detail: ".text-gray-700",
            type: "text-gray-700 p-3 ",
          },
          {
            detail: ".text-gray-800",
            type: "text-gray-800 p-3 ",
          },
          {
            detail: ".text-gray-900",
            type: "text-gray-900 p-3 ",
          },
        ],
      },
      {
          header:"Custom Font Size Utilities",
          subcard:[
              {
                  detail:".text-xs",
                  type:"text-xs"
              },
              {
                detail:".text-lg",
                type:"text-lg mb-0"
              }
          ]
      },
      {
          header:"Custom Background Gradient Utilities",
          subcard:[
              {
                  type:"px-3 py-5 bg-gradient-primary text-white",
                  detail:".bg-gradient-primary"
              },
              {
                type:"px-3 py-5 bg-gradient-secondary text-white",
                detail:".bg-gradient-secondary"
            },
            {
                type:"px-3 py-5 bg-gradient-success text-white",
                detail:".bg-gradient-success"
            },
            {
                type:"px-3 py-5 bg-gradient-info text-white",
                detail:".bg-gradient-info"
            },
            {
                type:"px-3 py-5 bg-gradient-warning text-white",
                detail:".bg-gradient-warning"
            },
            {
                type:"px-3 py-5 bg-gradient-danger text-white",
                detail:".bg-gradient-danger"
            },
            {
                type:"px-3 py-5 bg-gradient-light text-white",
                detail:".bg-gradient-light"
            },
            {
                type:"px-3 py-5 bg-gradient-dark text-white",
                detail:".bg-gradient-dark"
            }
          ]
      },
      {
          header:"",
          subcard:[
              {
                  type:"p-3 bg-gray-100",
                  detail:".bg-gray-100"
              },
              {
                type:"p-3 bg-gray-200",
                detail:".bg-gray-200"
            },
            {
                type:"p-3 bg-gray-300",
                detail:".bg-gray-300"
            },
            {
                type:"p-3 bg-gray-400",
                detail:".bg-gray-400"
            },
            {
                type:"p-3 bg-gray-500",
                detail:".bg-gray-500"
            },
            {
                type:"p-3 bg-gray-600",
                detail:".bg-gray-600"
            },
            {
                type:"p-3 bg-gray-700",
                detail:".bg-gray-700"
            },
            {
                type:" p-3 bg-gray-800",
                detail:".bg-gray-800"
            },
            {
                type:"p-3 bg-gray-800",
                detail:".bg-gray-900"
            },
          ]
      }
    ],
  };

  return (
    <div class="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 class="h3 mb-1 text-gray-800">{colorCard.heading}</h1>
      <p class="mb-4">
       {colorCard.description}
      </p>
      <div class="row">
                {
                colorCard.card.map((item)=>{
                    return(
                        <>
                        <div class="col-lg-4"> 
                        <div class="card shadow mb-4">
                         <div class="card-header py-3"> 
                        <h6 class="m-0 font-weight-bold text-primary">
                        {item.header}
                      </h6>
                      <div className="card-body"> 
                      <ColorLeaf data={item.subcard}/>
                      </div>
                      </div>
                      </div>
                      </div>
                        </>
                    )
                })
                }
        </div>
      </div> 
  );
}

export default Colors;
