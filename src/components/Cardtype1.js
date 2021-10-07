import React from 'react'

function Cardtype1(props) {
    return (
       
            <div className="mb-4 col-xl-3 col-md-6">
        <div className={`card border-${props.data.cardBorder} shadow h-100 py-2`}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className={`text-xs font-weight-bold ${props.data.cardText}  text-uppercase mb-1`}>
                           {props.data.heading}
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data.subHeading}</div>
                    </div>
                   
                    { props.data.progress  ? 
                    (<div className="col">
                                <div class="progress progress-sm mr-2">
                                    <div class="progress-bar bg-info" role="progressbar"
                                        style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0"
                                        aria-valuemax="100">
                                    </div>
                                </div>
                            </div>)
                            :(<div> </div>)
                    

}
                    <div className="col-auto">
                        <i className={`fas ${props.data.cardIcon} fa-2x text-gray-300`}></i>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
        
    )
}

export default Cardtype1
