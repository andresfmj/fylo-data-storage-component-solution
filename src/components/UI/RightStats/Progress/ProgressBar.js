import React from 'react'

import Progress from './Progress'
import ProgressText from './ProgressText'


function ProgressBar(props) {

    return (
        <div className="progress-container">
            <Progress />
            <ProgressText from='0' to='1000' />
        </div>
    )
}

export default ProgressBar