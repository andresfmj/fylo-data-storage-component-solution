import React from 'react'

import '../styles/fylo/fylo.styles.scss'

import logo from '../images/logo.svg'

import ic_document from '../images/icon-document.svg'
import ic_folder from '../images/icon-folder.svg'
import ic_upload from '../images/icon-upload.svg'


function Fylo(props) {

    return (
        <div className='Fylo'>
            <div className="fylo-wrapper">
                <div className="left-menu">
                    <div className="logo-header">
                        <img src={logo} alt="Brand" />
                    </div>
                    <div className="left-menu-inner">
                        <ul>
                            <li><img src={ic_document} alt="New Document" /></li>
                            <li><img src={ic_folder} alt="New Folder" /></li>
                            <li><img src={ic_upload} alt="Upload" /></li>
                        </ul>
                    </div>
                </div>
                <div className="right-stats">
                    <p>You've used <span className="highlighted">815 GB</span> of your storage</p>
                    <div className="float-legend">
                        <h1>185 <span className="text-small">gb left</span></h1>
                    </div>
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
                </div>
            </div>
        </div>
    )
}

export default Fylo;