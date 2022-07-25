import React from 'react'
import './index.css'

export default function SideBarCard(props) {
    return (
        <div className='SideBarPageCard'>
            {props.children}
        </div>
    )
}
