import React from 'react'

import '../styles/fylo/fylo.styles.scss'

import LeftMenu from './UI/LeftMenu/LeftMenu'
import RightStats from './UI/RightStats/RightStats'


function Fylo(props) {

    return (
        <div className='Fylo'>
            <div className="fylo-wrapper">
                <LeftMenu />
                <RightStats />
            </div>
        </div>
    )
}

export default Fylo;