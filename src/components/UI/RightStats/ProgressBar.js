import React from 'react'


function ProgressBar(props) {

    return (
        <div className="progress-container">
            <div className="progress">
                <div className="progress-inner">
                    <div className="progress-dot"></div>
                </div>
            </div>
            <div className="progress-text">
                <p>0 gb</p>
                <p>1000 gb</p>
            </div>
        </div>
    )
}

export default ProgressBar