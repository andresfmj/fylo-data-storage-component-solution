import React from 'react'


function Logo(props) {

    return (
        <div className="logo-header">
            <img src={props.logoSrc} alt={props.brandName} />
        </div>
    )
} 

export default Logo