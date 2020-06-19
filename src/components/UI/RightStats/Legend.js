import React, { Fragment } from 'react'


function Legend(props) {

    return (
        <Fragment>
            <p>{props.children}</p>
            <div className="float-legend">
                <h1>{props.gigasLeft} <span className="text-small">gb left</span></h1>
            </div>
        </Fragment>
    )
}

export default Legend