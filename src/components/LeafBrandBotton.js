import React from 'react'

function LeafBrandBotton(props) {
   const brandDetails = props.data;
    return (
        <>
        {
            brandDetails.map((item)=>{
            return(<> 
                    <div class="my-2"></div>
                    <a href="#" class={item.type}>
                        <span class={`icon ${item.text}-50`}>
                        <i class={item.icon}></i>
                        </span>
                        <span class="text">{item.detail}</span>
                    </a>
                    </>
                    )
            })
            
        }
        </>
    )
}

export default LeafBrandBotton
