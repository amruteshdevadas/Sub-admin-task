import React from 'react'

function Progressleafcard(props) {
  const  progressCard = props.data;
    return (
        <>
        {
           progressCard.map((item)=>{
               return(
                <>
                <div class="mb-1 small">{item.detail}</div>
                <div class={item.type}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style = {{width:"75%"}}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div> 
                </>
               )
           }) 
        }
        </>
    )
}

export default Progressleafcard
