import React from 'react'

function Brandbutton(props) {
    const BrandButtonDetails=[
        {
          type:"btn-google",
          icon:"fab fa-google fa-fw"
        },
        {
          type:"btn-facebook",
          icon:"fab fa-facebook-f fa-fw"
        }
      ]
    return (
        <>
           {
               BrandButtonDetails.map((item)=>{
                return(
                    <a href="#" className={`btn ${item.type}  btn-block`}>
                <i className={item.icon}></i>
                .{item.type}
              </a>
                )
            })
           } 
        </>
    )
}

export default Brandbutton
