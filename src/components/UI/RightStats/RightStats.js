import React from 'react'


import Legend from './Legend'
import ProgressBar from './Progress/ProgressBar'


function RightStats(props) {

    return (
        <div className="right-stats">
            <Legend gigasLeft='185'>
                You've used <span className="highlighted">815 GB</span> of your storage
            </Legend>
            <ProgressBar />
        </div>
    )
}

export default RightStats