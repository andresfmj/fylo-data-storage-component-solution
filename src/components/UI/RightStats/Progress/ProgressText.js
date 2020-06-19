import React from 'react'


function ProgressText(props) {

    return (
        <div className="progress-text">
            <p>{props.from} gb</p>
            <p>{props.to} gb</p>
        </div>
    )
}

export default ProgressText