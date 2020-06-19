import React from 'react'


function Icons(props) {

    return (
        <ul>
            {
                props.icons && props.icons.map(i => (
                    <li><img src={i.source} alt={i.alt} /></li>
                ))
            }
        </ul>
    )
}

export default Icons