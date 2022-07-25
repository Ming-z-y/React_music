import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function Cover() {
    return (
        <div className='coverBox'>
            <Link to='/mine' className='home_cover_back'><i className='iconfont backIcon'>&#xeb09;</i></Link>
            <div className='coverFont'>换一个好看的封面吧 &gt;</div>
        </div>
    )
}
