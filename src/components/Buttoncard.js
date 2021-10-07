import React from 'react'
import Leafbutton from './Leafbutton'

function Buttoncard(props) {
    // console.log(props.data)
    const buttonDetails = props.data
    return (<>
       { buttonDetails.map((item)=>{
            return(
                <>
                <div class="mb-2">
                <code>.{item.type}</code>
              </div> 
               <Leafbutton data={item.detail}/>
              </>
            )
        })}   
              </>
    )
}

export default Buttoncard
