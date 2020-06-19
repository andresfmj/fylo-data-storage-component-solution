import React from 'react'


import ic_document from '../../../images/icon-document.svg'
import ic_folder from '../../../images/icon-folder.svg'
import ic_upload from '../../../images/icon-upload.svg'

import logo from '../../../images/logo.svg'

import Logo from './Logo'
import Icons from './Icons'


function LeftMenu(props) {

    return (
        <div className="left-menu">
            <Logo logoSrc={logo} brandName='Brand' />
            <div className="left-menu-inner">
                <Icons icons={[
                    { source: ic_document, alt: 'New Document' },
                    { source: ic_folder, alt: 'New Folder' },
                    { source: ic_upload, alt: 'Upload' }
                ]} />
            </div>
        </div>
    )
}

export default LeftMenu