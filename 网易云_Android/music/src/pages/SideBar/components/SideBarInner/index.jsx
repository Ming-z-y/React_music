import React from 'react'
import './index.css'

export default function SideBarInner(props) {
    return (
        <div className='SideBarPage_inner'>
            <div>{props.children}</div>
            <div>&gt;</div>
        </div>
    )
}
